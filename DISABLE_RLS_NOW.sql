-- Temporarily disable RLS to test AI features
-- You can re-enable this later for production

ALTER TABLE sops DISABLE ROW LEVEL SECURITY;
ALTER TABLE tasks DISABLE ROW LEVEL SECURITY;
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE team_members DISABLE ROW LEVEL SECURITY;

-- Now your video processing should work!

