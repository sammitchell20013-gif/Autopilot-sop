import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
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

    // User should already be authenticated by the auth callback route
    // Just update the team member record
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    
    if (userError || !user) {
      return NextResponse.json(
        { error: 'Not authenticated. Please ensure you clicked the link from your email.' },
        { status: 401 }
      );
    }

    // Update the team member record to mark as accepted
    const { error: updateError } = await supabase
      .from('team_members')
      .update({
        accepted_at: new Date().toISOString(),
        user_id: user.id,
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
