import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In-memory rate limiting mock using Map
// In production, this would be an Upstash Redis connection.
const rateLimitMap = new Map<string, { count: number, resetTime: number }>();

export default function proxy(request: NextRequest) {
  const url = request.nextUrl.pathname;
  
  const response = NextResponse.next();
  
  // 1. Strict HSTS Headers
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');

  // Apply to API routes for rate limiting
  if (url.startsWith('/api/candidates')) {
    // We can use IP address or a generic identifier for rate limiting if firmUid is not easily available here
    // For this mock, we will rate limit based on a general identifier or IP if available.
    // In Edge runtime, we might read the session token, but to avoid any Firebase decoding here,
    // we'll just rate limit by IP.
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    
    // Rate Limiting (100 req / hour)
    const limit = 100;
    const windowMs = 60 * 60 * 1000; // 1 hour
    const now = Date.now();
    
    const record = rateLimitMap.get(ip);
    if (!record || now > record.resetTime) {
      rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    } else {
      record.count += 1;
      if (record.count > limit) {
        console.warn(`[RATE LIMIT EXCEEDED] IP: ${ip}`);
        return new NextResponse('Rate Limit Exceeded. Max 100 requests per hour.', { status: 429 });
      }
    }
  }

  return response;
}

export const config = {
  matcher: ['/api/candidates/:path*', '/portal/:path*'],
};
