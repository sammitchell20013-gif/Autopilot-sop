import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const email = requestUrl.searchParams.get('email');
  const inviteId = requestUrl.searchParams.get('invite');

  if (!code) {
    return NextResponse.json(
      { error: 'Missing authentication code' },
      { status: 400 }
    );
  }

  if (!inviteId) {
    return NextResponse.json(
      { error: 'Missing invite ID' },
      { status: 400 }
    );
  }

  try {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    // Exchange code for session
    const { error: sessionError } = await supabase.auth.exchangeCodeForSession(code);

    if (sessionError) {
      console.error('Session exchange error:', sessionError);
      return NextResponse.json(
        { error: `Authentication failed: ${sessionError.message}` },
        { status: 400 }
      );
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

