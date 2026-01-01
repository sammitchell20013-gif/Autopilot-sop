/**
 * API Route: Export User Data
 * Allows users to download all their data (GDPR/CCPA compliance)
 */

import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    console.log('📦 Exporting data for user:', user.id);

    // Fetch all user data
    const [profileData, sopsData, tasksData, teamData] = await Promise.all([
      // Profile
      supabase.from('profiles').select('*').eq('id', user.id).single(),
      
      // SOPs
      supabase.from('sops').select('*').eq('user_id', user.id),
      
      // Tasks
      supabase.from('tasks').select('*').eq('user_id', user.id),
      
      // Team members
      supabase.from('team_members').select('*').eq('user_id', user.id),
    ]);

    // Compile export data
    const exportData = {
      export_date: new Date().toISOString(),
      user_id: user.id,
      account: {
        email: user.email,
        created_at: user.created_at,
        last_sign_in: user.last_sign_in_at,
        profile: profileData.data || null,
      },
      sops: {
        count: sopsData.data?.length || 0,
        items: sopsData.data || [],
      },
      tasks: {
        count: tasksData.data?.length || 0,
        items: tasksData.data || [],
      },
      team_members: {
        count: teamData.data?.length || 0,
        items: teamData.data || [],
      },
      notes: [
        'This export contains all your personal data stored in Autopilot SOP.',
        'Video files are not included in this export due to file size limitations.',
        'To download your videos, please access them individually from the SOPs page.',
        'This export was generated in compliance with GDPR and CCPA regulations.',
      ],
    };

    console.log('✅ Data export complete');

    // Return as JSON download
    const filename = `autopilot-sop-data-export-${user.id.substring(0, 8)}-${new Date().toISOString().split('T')[0]}.json`;
    
    return new NextResponse(JSON.stringify(exportData, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error: any) {
    console.error('❌ Data export error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to export data' },
      { status: 500 }
    );
  }
}

