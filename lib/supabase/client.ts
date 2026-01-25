/**
 * Supabase Client Configuration
 * This connects your app to your Supabase database
 */

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';

// For client components (pages that use "use client")
export const supabase = createClientComponentClient();

// For server components and API routes
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Type definitions for our database
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          email: string | null;
          company: string | null;
          avatar_url: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          full_name?: string;
          email?: string;
          company?: string;
          avatar_url?: string;
        };
        Update: {
          full_name?: string;
          email?: string;
          company?: string;
          avatar_url?: string;
        };
      };
      sops: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          description: string | null;
          folder: string;
          tags: string[];
          video_url: string | null;
          thumbnail_url: string | null;
          steps: any; // JSONB
          is_favorite: boolean;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          title: string;
          description?: string;
          folder?: string;
          tags?: string[];
          video_url?: string;
          steps?: any;
          is_favorite?: boolean;
          status?: string;
        };
        Update: {
          title?: string;
          description?: string;
          folder?: string;
          tags?: string[];
          video_url?: string;
          steps?: any;
          is_favorite?: boolean;
          status?: string;
        };
      };
      tasks: {
        Row: {
          id: string;
          sop_id: string | null;
          user_id: string;
          title: string;
          assigned_to: string | null;
          assigned_to_email: string | null;
          due_date: string | null;
          status: string;
          priority: string;
          notes: string | null;
          created_at: string;
          completed_at: string | null;
        };
        Insert: {
          sop_id?: string;
          user_id: string;
          title: string;
          assigned_to?: string;
          assigned_to_email?: string;
          due_date?: string;
          status?: string;
          priority?: string;
          notes?: string;
        };
        Update: {
          title?: string;
          assigned_to?: string;
          due_date?: string;
          status?: string;
          priority?: string;
          notes?: string;
          completed_at?: string;
        };
      };
    };
  };
}

