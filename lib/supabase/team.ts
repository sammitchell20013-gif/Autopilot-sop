/**
 * Team Management Functions
 */

import { supabase } from './client';

export interface TeamMember {
  id: string;
  user_id: string;
  email: string;
  name?: string;
  role: string;
  status: string;
  invited_at: string;
  accepted_at?: string;
}

/**
 * Invite a team member via email
 */
export async function inviteTeamMember(email: string, role: string = 'member') {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    // Check if already invited
    const { data: existing } = await supabase
      .from('team_members')
      .select('*')
      .eq('user_id', user.id)
      .eq('email', email)
      .single();

    if (existing) {
      return { success: false, error: 'This email has already been invited' };
    }

    // Insert team member invite
    const { data, error } = await supabase
      .from('team_members')
      .insert({
        user_id: user.id,
        email: email,
        role: role,
        status: 'pending',
        invited_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Error inviting team member:', error);
      return { success: false, error: error.message };
    }

    // Send invitation email using Supabase Auth
    // This will send a magic link to join the team
    const appUrl = window.location.origin;
    const inviteLink = `${appUrl}/join-team?invite=${data.id}&email=${encodeURIComponent(email)}`;
    
    // For now, we'll use a simple approach - user gets signup link
    // In production, you'd use a transactional email service like SendGrid or Resend
    const { error: emailError } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: inviteLink,
        data: {
          invited_by: user.email,
          role: role,
        }
      }
    });

    if (emailError) {
      console.error('Error sending invite email:', emailError);
      // Don't fail the invite if email fails - they can still be added manually
    }

    return { 
      success: true, 
      member: data,
      message: `Invitation sent to ${email}! They will receive an email to join your team.`
    };
  } catch (error: any) {
    console.error('Error inviting team member:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get all team members for the current user
 */
export async function getTeamMembers() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { data: [], error: null };
    }

    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('user_id', user.id)
      .order('invited_at', { ascending: false });

    if (error) {
      console.error('Error fetching team members:', error);
      return { data: [], error };
    }

    return { data: data || [], error: null };
  } catch (error: any) {
    console.error('Error fetching team members:', error);
    return { data: [], error };
  }
}

/**
 * Remove a team member
 */
export async function removeTeamMember(memberId: string) {
  try {
    const { error } = await supabase
      .from('team_members')
      .delete()
      .eq('id', memberId);

    if (error) {
      console.error('Error removing team member:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error removing team member:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Update team member role
 */
export async function updateTeamMemberRole(memberId: string, role: string) {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .update({ role })
      .eq('id', memberId)
      .select()
      .single();

    if (error) {
      console.error('Error updating team member role:', error);
      return { success: false, error: error.message };
    }

    return { success: true, member: data };
  } catch (error: any) {
    console.error('Error updating team member role:', error);
    return { success: false, error: error.message };
  }
}

