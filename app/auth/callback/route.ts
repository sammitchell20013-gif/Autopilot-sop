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
    
    // Check if user is already authenticated (Supabase may have auto-authenticated)
    const { data: { user: existingUser } } = await supabase.auth.getUser();
    
    if (!existingUser) {
      // User not authenticated yet, need to process the code
      // For magic links with emailRedirectTo, Supabase uses exchangeCodeForSession
      // The code parameter is a one-time token that gets exchanged for a session
      const { error: sessionError } = await supabase.auth.exchangeCodeForSession(code);
      
      if (sessionError) {
        console.error('Session exchange error:', sessionError.message);
        return NextResponse.redirect(
          new URL(`/login?error=${encodeURIComponent(sessionError.message)}`, request.url)
        );
      }
      
      // Verify the user is now authenticated
      const { data: { user: newUser }, error: userCheckError } = await supabase.auth.getUser();
      if (userCheckError || !newUser) {
        console.error('User authentication verification failed:', userCheckError);
        return NextResponse.redirect(
          new URL(`/login?error=${encodeURIComponent('Authentication failed. Please try again.')}`, request.url)
        );
      }
    }
    
    // If there's an invite ID, accept it and redirect to dashboard
    if (inviteId && email) {
      const cookieStore = cookies();
      const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
      
      // Get the authenticated user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // Accept the team invitation
        await supabase
          .from('team_members')
          .update({
            accepted_at: new Date().toISOString(),
            user_id: user.id,
          })
          .eq('id', inviteId)
          .eq('email', email);
      }
    }
    
    // Successfully authenticated - redirect to dashboard
    return NextResponse.redirect(new URL('/app/dashboard', request.url));
  }

  // No code and no error - invalid callback, redirect to login
  return NextResponse.redirect(new URL('/login?error=Invalid authentication callback', request.url));
}

