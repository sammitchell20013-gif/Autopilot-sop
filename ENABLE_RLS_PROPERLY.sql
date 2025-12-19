-- ============================================
-- RE-ENABLE ROW LEVEL SECURITY (RLS) PROPERLY
-- ============================================
-- This script re-enables RLS with correct policies
-- Run this in Supabase SQL Editor

-- ============================================
-- STEP 1: ENABLE RLS ON ALL TABLES
-- ============================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE sops ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE folders ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- ============================================
-- STEP 2: PROFILES TABLE POLICIES
-- ============================================

-- Users can view their own profile
CREATE POLICY "Users can view own profile"
ON profiles FOR SELECT
USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE
USING (auth.uid() = id);

-- Users can insert their own profile (for new signups)
CREATE POLICY "Users can insert own profile"
ON profiles FOR INSERT
WITH CHECK (auth.uid() = id);

-- ============================================
-- STEP 3: SOPS TABLE POLICIES
-- ============================================

-- Users can view their own SOPs
CREATE POLICY "Users can view own SOPs"
ON sops FOR SELECT
USING (auth.uid() = user_id);

-- Users can create their own SOPs
CREATE POLICY "Users can create own SOPs"
ON sops FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can update their own SOPs
CREATE POLICY "Users can update own SOPs"
ON sops FOR UPDATE
USING (auth.uid() = user_id);

-- Users can delete their own SOPs
CREATE POLICY "Users can delete own SOPs"
ON sops FOR DELETE
USING (auth.uid() = user_id);

-- ============================================
-- STEP 4: TASKS TABLE POLICIES
-- ============================================

-- Users can view their own tasks
CREATE POLICY "Users can view own tasks"
ON tasks FOR SELECT
USING (auth.uid() = user_id);

-- Users can create their own tasks
CREATE POLICY "Users can create own tasks"
ON tasks FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can update their own tasks
CREATE POLICY "Users can update own tasks"
ON tasks FOR UPDATE
USING (auth.uid() = user_id);

-- Users can delete their own tasks
CREATE POLICY "Users can delete own tasks"
ON tasks FOR DELETE
USING (auth.uid() = user_id);

-- ============================================
-- STEP 5: FOLDERS TABLE POLICIES (if exists)
-- ============================================

-- Users can view their own folders
CREATE POLICY "Users can view own folders"
ON folders FOR SELECT
USING (auth.uid() = user_id);

-- Users can create their own folders
CREATE POLICY "Users can create own folders"
ON folders FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can update their own folders
CREATE POLICY "Users can update own folders"
ON folders FOR UPDATE
USING (auth.uid() = user_id);

-- Users can delete their own folders
CREATE POLICY "Users can delete own folders"
ON folders FOR DELETE
USING (auth.uid() = user_id);

-- ============================================
-- STEP 6: TEAM_MEMBERS TABLE POLICIES
-- ============================================

-- Users can view team members they invited
CREATE POLICY "Users can view team members they invited"
ON team_members FOR SELECT
USING (auth.uid() = user_id);

-- Users can view their own team member record
CREATE POLICY "Users can view own team member record"
ON team_members FOR SELECT
USING (auth.uid()::text IN (
  SELECT id::text FROM auth.users WHERE email = team_members.email
));

-- Users can create team member invites
CREATE POLICY "Users can create team member invites"
ON team_members FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can update team members they invited
CREATE POLICY "Users can update team members they invited"
ON team_members FOR UPDATE
USING (auth.uid() = user_id);

-- Users can update their own team member record (for accepting invites)
CREATE POLICY "Users can update own team member record"
ON team_members FOR UPDATE
USING (auth.uid()::text IN (
  SELECT id::text FROM auth.users WHERE email = team_members.email
));

-- Users can delete team members they invited
CREATE POLICY "Users can delete team members they invited"
ON team_members FOR DELETE
USING (auth.uid() = user_id);

-- ============================================
-- STEP 7: SUBSCRIPTIONS TABLE POLICIES
-- ============================================

-- Users can view their own subscription
CREATE POLICY "Users can view own subscription"
ON subscriptions FOR SELECT
USING (auth.uid() = user_id);

-- Users can insert their own subscription
CREATE POLICY "Users can insert own subscription"
ON subscriptions FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can update their own subscription
CREATE POLICY "Users can update own subscription"
ON subscriptions FOR UPDATE
USING (auth.uid() = user_id);

-- ============================================
-- STEP 8: STORAGE POLICIES (for video uploads)
-- ============================================

-- Enable RLS on storage buckets
-- Note: Run this in Supabase Dashboard -> Storage -> Policies

-- For videos bucket:
-- 1. Allow authenticated users to upload their own videos
-- 2. Allow authenticated users to view their own videos
-- 3. Allow authenticated users to delete their own videos

-- You'll need to create these in the Supabase Dashboard:
-- Bucket: videos
-- Policy: "Users can upload own videos"
--   Operation: INSERT
--   Policy definition: (bucket_id = 'videos' AND auth.uid()::text = (storage.foldername(name))[1])

-- Policy: "Users can view own videos"
--   Operation: SELECT
--   Policy definition: (bucket_id = 'videos' AND auth.uid()::text = (storage.foldername(name))[1])

-- Policy: "Users can delete own videos"
--   Operation: DELETE
--   Policy definition: (bucket_id = 'videos' AND auth.uid()::text = (storage.foldername(name))[1])

-- ============================================
-- VERIFICATION QUERIES
-- ============================================

-- Check RLS is enabled on all tables
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public';

-- Check all policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- ============================================
-- DONE!
-- ============================================
-- RLS is now properly enabled with secure policies
-- Each user can only access their own data

