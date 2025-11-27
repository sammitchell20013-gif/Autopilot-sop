-- Fix RLS Policies for SOPs Table
-- Run this in your Supabase SQL Editor

-- First, let's check if RLS is enabled and what policies exist
-- Then we'll add the correct policies

-- Enable RLS on sops table (if not already enabled)
ALTER TABLE sops ENABLE ROW LEVEL SECURITY;

-- Drop existing policies (if any conflict)
DROP POLICY IF EXISTS "Users can view their own SOPs" ON sops;
DROP POLICY IF EXISTS "Users can insert their own SOPs" ON sops;
DROP POLICY IF EXISTS "Users can update their own SOPs" ON sops;
DROP POLICY IF EXISTS "Users can delete their own SOPs" ON sops;

-- Create new policies that allow users to manage their own SOPs
-- Policy 1: Allow users to view their own SOPs
CREATE POLICY "Users can view their own SOPs"
ON sops FOR SELECT
USING (auth.uid() = user_id);

-- Policy 2: Allow users to insert their own SOPs
CREATE POLICY "Users can insert their own SOPs"
ON sops FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Policy 3: Allow users to update their own SOPs
CREATE POLICY "Users can update their own SOPs"
ON sops FOR UPDATE
USING (auth.uid() = user_id);

-- Policy 4: Allow users to delete their own SOPs
CREATE POLICY "Users can delete their own SOPs"
ON sops FOR DELETE
USING (auth.uid() = user_id);

-- IMPORTANT: Service role key bypasses RLS automatically
-- But we need to make sure the user_id is set correctly when creating SOPs

