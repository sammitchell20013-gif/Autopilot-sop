/**
 * Supabase Storage Functions
 * These handle video and image uploads
 */

import { supabase } from './client';

/**
 * Upload a video file to Supabase Storage
 * @param file - The video file to upload
 * @param userId - The user ID (for organizing files)
 * @returns Upload result with URL
 */
export async function uploadVideo(file: File, userId: string) {
  try {
    // Generate unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}/${Date.now()}.${fileExt}`;

    // Upload file
    const { data, error } = await supabase.storage
      .from('videos')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('Upload error:', error);
      return { success: false, error: error.message };
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('videos')
      .getPublicUrl(fileName);

    return {
      success: true,
      path: data.path,
      url: publicUrl,
    };
  } catch (error: any) {
    console.error('Upload error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Upload an image file (for screenshots, thumbnails, etc.)
 * @param file - The image file to upload
 * @param userId - The user ID
 * @returns Upload result with URL
 */
export async function uploadImage(file: File, userId: string) {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}/images/${Date.now()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('videos') // Using same bucket for simplicity
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('Image upload error:', error);
      return { success: false, error: error.message };
    }

    const { data: { publicUrl } } = supabase.storage
      .from('videos')
      .getPublicUrl(fileName);

    return {
      success: true,
      path: data.path,
      url: publicUrl,
    };
  } catch (error: any) {
    console.error('Image upload error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Delete a file from storage
 * @param path - The file path in storage
 */
export async function deleteFile(path: string) {
  try {
    const { error } = await supabase.storage
      .from('videos')
      .remove([path]);

    if (error) {
      console.error('Delete error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Delete error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get signed URL for private file (valid for 1 hour)
 * @param path - The file path in storage
 */
export async function getSignedUrl(path: string) {
  try {
    const { data, error } = await supabase.storage
      .from('videos')
      .createSignedUrl(path, 3600); // 1 hour

    if (error) {
      console.error('Signed URL error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, url: data.signedUrl };
  } catch (error: any) {
    console.error('Signed URL error:', error);
    return { success: false, error: error.message };
  }
}

