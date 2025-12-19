/**
 * Helper functions for handling team invitations
 */

import { supabase } from './client';

/**
 * Accept a pending team invitation after user authentication
 */
export async function acceptTeamInvite(inviteId: string, userEmail: string) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    // Update the team member record to mark as accepted
    const { error: updateError } = await supabase
      .from('team_members')
      .update({
        accepted_at: new Date().toISOString(),
        user_id: user.id,
      })
      .eq('id', inviteId)
      .eq('email', userEmail);

    if (updateError) {
      console.error('Error accepting team invite:', updateError);
      return { success: false, error: updateError.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error accepting team invite:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Check for and accept any pending invitations for the current user's email
 */
export async function checkAndAcceptPendingInvites(userEmail: string) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    // Find pending invites for this email
    const { data: pendingInvites, error: fetchError } = await supabase
      .from('team_members')
      .select('*')
      .eq('email', userEmail)
      .is('accepted_at', null);

    if (fetchError) {
      console.error('Error fetching pending invites:', fetchError);
      return { success: false, error: fetchError.message };
    }

    if (!pendingInvites || pendingInvites.length === 0) {
      return { success: true, accepted: 0 };
    }

    // Accept all pending invites
    const { error: updateError } = await supabase
      .from('team_members')
      .update({
        accepted_at: new Date().toISOString(),
        user_id: user.id,
      })
      .eq('email', userEmail)
      .is('accepted_at', null);

    if (updateError) {
      console.error('Error accepting invites:', updateError);
      return { success: false, error: updateError.message };
    }

    return { success: true, accepted: pendingInvites.length };
  } catch (error: any) {
    console.error('Error checking pending invites:', error);
    return { success: false, error: error.message };
  }
}



