/**
 * Middleware - Protects dashboard routes
 * This checks if user is logged in before allowing access to /app/* pages
 */

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Allow access to auth callback and password reset pages without authentication
  if (
    req.nextUrl.pathname.startsWith('/auth/') ||
    req.nextUrl.pathname === '/reset-password' || 
    req.nextUrl.pathname === '/password-reset-sent'
  ) {
    return res;
  }

  // If user is not logged in and trying to access /app/* pages, redirect to login
  if (!user && req.nextUrl.pathname.startsWith('/app')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // If user IS logged in and trying to access /login or /signup, redirect to dashboard
  if (user && (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/signup')) {
    return NextResponse.redirect(new URL('/app/dashboard', req.url));
  }

  return res;
}

// Specify which routes this middleware should run on
export const config = {
  matcher: ['/app/:path*', '/login', '/signup', '/reset-password', '/password-reset-sent', '/auth/:path*'],
};

