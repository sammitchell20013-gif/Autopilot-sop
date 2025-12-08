import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const error = requestUrl.searchParams.get('error');
  const error_description = requestUrl.searchParams.get('error_description');

  // Handle OAuth errors
  if (error) {
    console.error('OAuth error:', error, error_description);
    return NextResponse.redirect(
      new URL(`/login?error=${encodeURIComponent(error_description || error)}`, request.url)
    );
  }

  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    
    // Check if this is a magic link (OTP) or OAuth
    // For magic links, we need to verify OTP instead of exchanging code
    const email = requestUrl.searchParams.get('email');
    const inviteId = requestUrl.searchParams.get('invite');
    
    let sessionError = null;
    
    if (email) {
      // This is likely a magic link from signInWithOtp
      // Try verifyOtp first
      const { error: otpError } = await supabase.auth.verifyOtp({
        email: email,
        token: code,
        type: 'magiclink'
      });
      
      if (otpError) {
        // If OTP fails, try OAuth code exchange as fallback
        const { error: oauthError } = await supabase.auth.exchangeCodeForSession(code);
        sessionError = oauthError;
      }
    } else {
      // No email, try OAuth code exchange
      const { error: oauthError } = await supabase.auth.exchangeCodeForSession(code);
      sessionError = oauthError;
    }
    
    if (sessionError) {
      console.error('Session exchange error:', sessionError.message);
      return NextResponse.redirect(
        new URL(`/login?error=${encodeURIComponent(sessionError.message)}`, request.url)
      );
    }
    
    // If there's an invite ID, redirect to join-team page
    if (inviteId) {
      return NextResponse.redirect(
        new URL(`/join-team?invite=${inviteId}&email=${encodeURIComponent(email || '')}`, request.url)
      );
    }
    
    // Successfully exchanged code for session - redirect to dashboard
    return NextResponse.redirect(new URL('/app/dashboard', request.url));
  }

  // No code and no error - invalid callback, redirect to login
  return NextResponse.redirect(new URL('/login?error=Invalid authentication callback', request.url));
}

