/**
 * Authentication Functions
 * These handle signup, login, logout, etc.
 */

import { supabase } from './client';

/**
 * Sign up a new user with email and password
 */
export async function signUp(email: string, password: string, fullName: string, company: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          company: company,
        },
      },
    });

    if (error) {
      console.error('Signup error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, user: data.user };
  } catch (error: any) {
    console.error('Signup error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Sign in existing user with email and password
 */
export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Login error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, user: data.user };
  } catch (error: any) {
    console.error('Login error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Sign out the current user
 */
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      console.error('Logout error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Logout error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get the current logged-in user
 */
export async function getCurrentUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error) {
      console.error('Get user error:', error.message);
      return null;
    }

    return user;
  } catch (error: any) {
    console.error('Get user error:', error);
    return null;
  }
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}

/**
 * Reset password (send reset email)
 */
export async function resetPassword(email: string) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      console.error('Reset password error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Reset password error:', error);
    return { success: false, error: error.message };
  }
}

