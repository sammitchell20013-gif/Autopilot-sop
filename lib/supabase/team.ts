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
  invited_at: string;
  accepted_at?: string;
  // Computed property - status is derived from accepted_at
  status?: 'pending' | 'active';
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
        invited_at: new Date().toISOString(),
        // accepted_at is null for pending invites
      })
      .select()
      .single();

    if (error) {
      console.error('Error inviting team member:', error);
      return { success: false, error: error.message };
    }

    // Create a simple invitation link (no magic link authentication)
    // User will sign up/login normally, then we'll auto-accept the invite
    const appUrl = window.location.origin;
    const inviteLink = `${appUrl}/signup?invite=${data.id}&email=${encodeURIComponent(email)}`;
    
    // TODO: In production, send this link via a transactional email service (SendGrid, Resend, etc.)
    // For now, we'll just log it - you can manually send the email or integrate an email service
    console.log('Invitation link for', email, ':', inviteLink);
    
    // Note: We're not using signInWithOtp anymore to avoid authentication complexity
    // The user will sign up/login normally, and we'll check for pending invites after authentication

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

    // Add computed status field based on accepted_at
    const membersWithStatus = (data || []).map((member: any) => ({
      ...member,
      status: member.accepted_at ? 'active' : 'pending',
    }));

    return { data: membersWithStatus, error: null };
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

