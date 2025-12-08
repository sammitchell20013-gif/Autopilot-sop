/**
 * SOP Database Functions
 * These handle creating, reading, updating, and deleting SOPs
 */

import { supabase } from './client';

export interface SOPStep {
  id: string;
  order: number;
  title: string;
  description: string;
  imageUrl?: string;
  substeps?: string[];
}

export interface SOP {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  folder: string;
  tags: string[];
  video_url: string | null;
  thumbnail_url: string | null;
  steps: SOPStep[];
  is_favorite: boolean;
  status: string;
  created_at: string;
  updated_at: string;
}

/**
 * Get all SOPs for the current user
 */
export async function getUserSOPs() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return [];
    }

    const { data, error } = await supabase
      .from('sops')
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Error fetching SOPs:', error);
      return [];
    }

    return data as SOP[];
  } catch (error) {
    console.error('Error fetching SOPs:', error);
    return [];
  }
}

/**
 * Get a single SOP by ID (only if it belongs to the current user)
 */
export async function getSOP(id: string) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return null;
    }

    const { data, error } = await supabase
      .from('sops')
      .select('*')
      .eq('id', id)
      .eq('user_id', user.id)
      .single();

    if (error) {
      console.error('Error fetching SOP:', error);
      return null;
    }

    return data as SOP;
  } catch (error) {
    console.error('Error fetching SOP:', error);
    return null;
  }
}

/**
 * Create a new SOP
 */
export async function createSOP(sop: {
  title: string;
  description?: string;
  folder?: string;
  tags?: string[];
  video_url?: string;
  steps?: SOPStep[];
}) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    const { data, error } = await supabase
      .from('sops')
      .insert({
        user_id: user.id,
        title: sop.title,
        description: sop.description || '',
        folder: sop.folder || 'Uncategorized',
        tags: sop.tags || [],
        video_url: sop.video_url || null,
        steps: sop.steps || [],
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating SOP:', error);
      return { success: false, error: error.message };
    }

    return { success: true, sop: data as SOP };
  } catch (error: any) {
    console.error('Error creating SOP:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Update an existing SOP (only if it belongs to the current user)
 */
export async function updateSOP(id: string, updates: Partial<SOP>) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    const { data, error } = await supabase
      .from('sops')
      .update(updates)
      .eq('id', id)
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating SOP:', error);
      return { success: false, error: error.message };
    }

    return { success: true, sop: data as SOP };
  } catch (error: any) {
    console.error('Error updating SOP:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Delete a SOP (only if it belongs to the current user)
 */
export async function deleteSOP(id: string) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    const { error } = await supabase
      .from('sops')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      console.error('Error deleting SOP:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error deleting SOP:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Toggle favorite status (only if SOP belongs to the current user)
 */
export async function toggleFavorite(id: string, isFavorite: boolean) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    const { error } = await supabase
      .from('sops')
      .update({ is_favorite: isFavorite })
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      console.error('Error toggling favorite:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error toggling favorite:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Search SOPs by title or description (only for current user)
 */
export async function searchSOPs(query: string) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return [];
    }

    const { data, error } = await supabase
      .from('sops')
      .select('*')
      .eq('user_id', user.id)
      .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Error searching SOPs:', error);
      return [];
    }

    return data as SOP[];
  } catch (error) {
    console.error('Error searching SOPs:', error);
    return [];
  }
}

/**
 * Get SOPs by folder (only for current user)
 */
export async function getSOPsByFolder(folder: string) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return [];
    }

    const { data, error } = await supabase
      .from('sops')
      .select('*')
      .eq('user_id', user.id)
      .eq('folder', folder)
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Error fetching SOPs by folder:', error);
      return [];
    }

    return data as SOP[];
  } catch (error) {
    console.error('Error fetching SOPs by folder:', error);
    return [];
  }
}

/**
 * Get all unique folders for the current user
 */
export async function getUserFolders() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return [];
    }

    const { data, error } = await supabase
      .from('sops')
      .select('folder')
      .eq('user_id', user.id)
      .order('folder');

    if (error) {
      console.error('Error fetching folders:', error);
      return [];
    }

    // Get unique folders
    const folders = Array.from(new Set(data.map(item => item.folder)));
    return folders;
  } catch (error) {
    console.error('Error fetching folders:', error);
    return [];
  }
}

