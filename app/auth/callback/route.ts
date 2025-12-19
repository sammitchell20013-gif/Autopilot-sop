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
    
    const email = requestUrl.searchParams.get('email');
    const inviteId = requestUrl.searchParams.get('invite');
    
    // Exchange the code for a session
    const { data, error: sessionError } = await supabase.auth.exchangeCodeForSession(code);
    
    if (sessionError) {
      console.error('Session exchange error:', sessionError.message);
      return NextResponse.redirect(
        new URL(`/login?error=${encodeURIComponent(sessionError.message)}`, request.url)
      );
    }
    
    // Verify we have a user now
    if (!data?.user) {
      console.error('No user after session exchange');
      return NextResponse.redirect(
        new URL(`/login?error=${encodeURIComponent('Authentication failed. Please try again.')}`, request.url)
      );
    }
    
    // If there's an invite ID, accept it
    if (inviteId && email) {
      // Accept the team invitation
      await supabase
        .from('team_members')
        .update({
          accepted_at: new Date().toISOString(),
          user_id: data.user.id,
        })
        .eq('id', inviteId)
        .eq('email', email);
    }
    
    // Create the response with the redirect
    const response = NextResponse.redirect(new URL('/app/dashboard', request.url));
    
    // Ensure session cookies are properly set
    // The createRouteHandlerClient should handle this, but we'll be explicit
    return response;
  }

  // No code and no error - invalid callback, redirect to login
  return NextResponse.redirect(new URL('/login?error=Invalid authentication callback', request.url));
}

