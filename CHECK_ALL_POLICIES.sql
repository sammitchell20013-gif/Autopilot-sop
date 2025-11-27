-- Check if there are any policies still active
-- Even with RLS disabled, policies might still exist and cause issues

-- Check all policies on all tables
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- Drop ALL policies on all tables
DROP POLICY IF EXISTS "Users can view their own SOPs" ON sops;
DROP POLICY IF EXISTS "Users can insert their own SOPs" ON sops;
DROP POLICY IF EXISTS "Users can update their own SOPs" ON sops;
DROP POLICY IF EXISTS "Users can delete their own SOPs" ON sops;
DROP POLICY IF EXISTS "Enable read access for all users" ON sops;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON sops;
DROP POLICY IF EXISTS "Enable update for users based on user_id" ON sops;

DROP POLICY IF EXISTS "Users can view their own tasks" ON tasks;
DROP POLICY IF EXISTS "Users can insert their own tasks" ON tasks;
DROP POLICY IF EXISTS "Users can update their own tasks" ON tasks;
DROP POLICY IF EXISTS "Users can delete their own tasks" ON tasks;

DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;

DROP POLICY IF EXISTS "Team members can view their team" ON team_members;
DROP POLICY IF EXISTS "Team members can insert" ON team_members;
DROP POLICY IF EXISTS "Team members can delete" ON team_members;

-- Verify all policies are gone
SELECT tablename, COUNT(*) as policy_count
FROM pg_policies
WHERE schemaname = 'public'
GROUP BY tablename;

