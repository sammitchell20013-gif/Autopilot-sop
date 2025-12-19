-- ============================================
-- RE-ENABLE RLS - FINAL VERSION
-- Only includes tables that exist in your database
-- ============================================

-- ENABLE RLS ON EXISTING TABLES ONLY
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE sops ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- DROP ANY EXISTING POLICIES
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view own SOPs" ON sops;
DROP POLICY IF EXISTS "Users can create own SOPs" ON sops;
DROP POLICY IF EXISTS "Users can update own SOPs" ON sops;
DROP POLICY IF EXISTS "Users can delete own SOPs" ON sops;
DROP POLICY IF EXISTS "Users can view own tasks" ON tasks;
DROP POLICY IF EXISTS "Users can create own tasks" ON tasks;
DROP POLICY IF EXISTS "Users can update own tasks" ON tasks;
DROP POLICY IF EXISTS "Users can delete own tasks" ON tasks;
DROP POLICY IF EXISTS "Users can view team members they invited" ON team_members;
DROP POLICY IF EXISTS "Users can view own team member record" ON team_members;
DROP POLICY IF EXISTS "Users can create team member invites" ON team_members;
DROP POLICY IF EXISTS "Users can update team members they invited" ON team_members;
DROP POLICY IF EXISTS "Users can update own team member record" ON team_members;
DROP POLICY IF EXISTS "Users can delete team members they invited" ON team_members;

-- PROFILES POLICIES
CREATE POLICY "Users can view own profile"
ON profiles FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- SOPS POLICIES
CREATE POLICY "Users can view own SOPs"
ON sops FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own SOPs"
ON sops FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own SOPs"
ON sops FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own SOPs"
ON sops FOR DELETE USING (auth.uid() = user_id);

-- TASKS POLICIES
CREATE POLICY "Users can view own tasks"
ON tasks FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own tasks"
ON tasks FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tasks"
ON tasks FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own tasks"
ON tasks FOR DELETE USING (auth.uid() = user_id);

-- TEAM_MEMBERS POLICIES
CREATE POLICY "Users can view team members they invited"
ON team_members FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view own team member record"
ON team_members FOR SELECT USING (auth.uid()::text IN (
  SELECT id::text FROM auth.users WHERE email = team_members.email
));

CREATE POLICY "Users can create team member invites"
ON team_members FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update team members they invited"
ON team_members FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can update own team member record"
ON team_members FOR UPDATE USING (auth.uid()::text IN (
  SELECT id::text FROM auth.users WHERE email = team_members.email
));

CREATE POLICY "Users can delete team members they invited"
ON team_members FOR DELETE USING (auth.uid() = user_id);

-- VERIFY RLS IS ENABLED
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public'
ORDER BY tablename;

