import { NextResponse } from 'next/server';
import { db, admin } from '@/lib/firebase-admin';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('iicpc_session_token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized: No session token found' }, { status: 401 });
    }

    let decodedToken;
    try {
      decodedToken = await admin.auth().verifyIdToken(token);
    } catch (error) {
      return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
    }

    const userTier = decodedToken.tier || 'gold';
    const firmUid = decodedToken.uid;

    // Audit Logging
    try {
      await db.collection('audit_logs').add({
        firmUid: firmUid,
        tier: userTier,
        action: 'FETCH_CANDIDATES',
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });
    } catch (auditError) {
      console.error('Failed to write audit log:', auditError);
    }

    // Bypass client DENY ALL rules via firebase-admin and fetch all docs
    const candidatesSnapshot = await db.collection('candidates').get();
    
    const candidates: any[] = [];
    candidatesSnapshot.forEach((doc) => {
      candidates.push({ id: doc.id, ...doc.data() });
    });

    // Tier Shredder Logic
    const shreddedData = candidates.map((cand) => {
      const shredded: any = {};

      if (userTier === 'diamond') {
        // Diamond gets everything
        return cand;
      }

      if (userTier === 'platinum') {
        // Platinum: 20 fields
        const platinumFields = [
          'id', 'firstName', 'lastName', 'university', 'gradYear', 
          'major', 'gpa', 'cfHandle', 'cfRank', 'cfRating', 
          'leetCode', 'prefRole', 'prefLocation', 'relocate', 'pastIntern1', 
          'pastIntern2', 'techStack', 'event', 'stage', 'pipelineStatus'
        ];
        platinumFields.forEach((field) => {
          if (cand[field] !== undefined) {
            shredded[field] = cand[field];
          }
        });
        return shredded;
      }

      // Gold: 10 basic fields
      const goldFields = [
        'id', 'firstName', 'lastName', 'university', 'gradYear',
        'major', 'cfRank', 'cfRating', 'leetCode', 'prefRole'
      ];
      goldFields.forEach((field) => {
        if (cand[field] !== undefined) {
          shredded[field] = cand[field];
        }
      });
      return shredded;
    });

    return NextResponse.json(shreddedData);

  } catch (error: any) {
    console.error("Error fetching candidates:", error);
    return NextResponse.json({ error: 'Failed to fetch candidates from server' }, { status: 500 });
  }
}
