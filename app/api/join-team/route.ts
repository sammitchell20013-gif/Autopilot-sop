import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const email = requestUrl.searchParams.get('email');
  const inviteId = requestUrl.searchParams.get('invite');

  if (!inviteId) {
    return NextResponse.json(
      { error: 'Missing invite ID' },
      { status: 400 }
    );
  }

  try {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    // Check if user is already authenticated (session might have been created by auth callback)
    const { data: { user: existingUser } } = await supabase.auth.getUser();
    
    if (existingUser) {
      // User is already authenticated, just update the team member record
      const { error: updateError } = await supabase
        .from('team_members')
        .update({
          accepted_at: new Date().toISOString(),
          user_id: existingUser.id,
        })
        .eq('id', inviteId)
        .eq('email', email || existingUser.email);

      if (updateError) {
        console.error('Error updating team member:', updateError);
        return NextResponse.json({
          success: true,
          message: 'Authenticated successfully. Team invitation may need manual approval.',
          authenticated: true,
        });
      }

      return NextResponse.json({
        success: true,
        message: 'Successfully joined the team!',
        authenticated: true,
      });
    }

    // If not authenticated and we have a code, try to authenticate
    if (!code) {
      return NextResponse.json(
        { error: 'Missing authentication code. Please ensure you clicked the link from your email.' },
        { status: 400 }
      );
    }

    // For magic links, verify OTP
    if (email) {
      const { error: otpError } = await supabase.auth.verifyOtp({
        email: email,
        token: code,
        type: 'magiclink'
      });

      if (otpError) {
        console.error('OTP verification error:', otpError);
        return NextResponse.json(
          { error: `Authentication failed: ${otpError.message}` },
          { status: 400 }
        );
      }
    } else {
      // Try OAuth code exchange as fallback
      const { error: oauthError } = await supabase.auth.exchangeCodeForSession(code);
      if (oauthError) {
        console.error('OAuth exchange error:', oauthError);
        return NextResponse.json(
          { error: `Authentication failed: ${oauthError.message}` },
          { status: 400 }
        );
      }
    }

    // Get the current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: 'Failed to get user information' },
        { status: 400 }
      );
    }

    // Update the team member record to mark as accepted
    const { error: updateError } = await supabase
      .from('team_members')
      .update({
        accepted_at: new Date().toISOString(),
        user_id: user.id, // Link the authenticated user to the team member record
      })
      .eq('id', inviteId)
      .eq('email', email || user.email);

    if (updateError) {
      console.error('Error updating team member:', updateError);
      // Still return success if they're authenticated - they can access the dashboard
      return NextResponse.json({
        success: true,
        message: 'Authenticated successfully. Team invitation may need manual approval.',
        authenticated: true,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully joined the team!',
      authenticated: true,
    });

  } catch (error: any) {
    console.error('Error joining team:', error);
    return NextResponse.json(
      { error: `An error occurred: ${error.message || 'Unknown error'}` },
      { status: 500 }
    );
  }
}

