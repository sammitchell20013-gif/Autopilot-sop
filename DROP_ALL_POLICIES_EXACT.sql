-- Drop ALL policies with exact names from the screenshot

-- Profiles policies
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;

-- SOPs policies
DROP POLICY IF EXISTS "Users can create own SOPs" ON sops;
DROP POLICY IF EXISTS "Users can delete own SOPs" ON sops;
DROP POLICY IF EXISTS "Users can update own SOPs" ON sops;
DROP POLICY IF EXISTS "Users can view own SOPs" ON sops;

-- Tasks policies
DROP POLICY IF EXISTS "Users can create own tasks" ON tasks;
DROP POLICY IF EXISTS "Users can delete own tasks" ON tasks;
DROP POLICY IF EXISTS "Users can update own tasks" ON tasks;
DROP POLICY IF EXISTS "Users can view own tasks" ON tasks;

-- Team members policies
DROP POLICY IF EXISTS "Users can invite team members" ON team_members;
DROP POLICY IF EXISTS "Users can remove team members" ON team_members;
DROP POLICY IF EXISTS "Users can update team members" ON team_members;

-- Verify all policies are gone (should return NOTHING)
SELECT 
    tablename,
    policyname
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

