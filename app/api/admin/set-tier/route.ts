import { NextResponse } from 'next/server';
import { admin } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { uid, tier, secret } = body;

    // Validate the secret
    if (secret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Validate tier
    if (!['gold', 'platinum', 'diamond'].includes(tier)) {
      return NextResponse.json({ error: 'Invalid tier specified' }, { status: 400 });
    }

    if (!uid) {
      return NextResponse.json({ error: 'UID is required' }, { status: 400 });
    }

    // Set custom user claims
    await admin.auth().setCustomUserClaims(uid, { tier });

    return NextResponse.json({ message: `Successfully assigned tier '${tier}' to user ${uid}` });
  } catch (error: any) {
    console.error("Error setting custom claims:", error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
