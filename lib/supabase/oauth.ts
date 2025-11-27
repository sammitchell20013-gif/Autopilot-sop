/**
 * OAuth Authentication Functions
 * Handle Google, GitHub, and other OAuth providers
 */

import { supabase } from './client';

/**
 * Sign in with Google
 */
export async function signInWithGoogle() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });

    if (error) {
      console.error('Google sign-in error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error('Google sign-in error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Sign in with GitHub (if needed later)
 */
export async function signInWithGitHub() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/app/dashboard`,
      },
    });

    if (error) {
      console.error('GitHub sign-in error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error('GitHub sign-in error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Sign in with Microsoft (Azure AD)
 */
export async function signInWithMicrosoft() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'azure',
      options: {
        redirectTo: `${window.location.origin}/app/dashboard`,
        scopes: 'email',
      },
    });

    if (error) {
      console.error('Microsoft sign-in error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error('Microsoft sign-in error:', error);
    return { success: false, error: error.message };
  }
}

