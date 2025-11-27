-- Autopilot SOP Database Setup
-- Copy ALL of this and paste into Supabase SQL Editor, then click RUN

-- Enable UUID extension (needed for IDs)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles table (user info)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  email TEXT,
  company TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. SOPs table (the main content!)
CREATE TABLE sops (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  folder TEXT DEFAULT 'Uncategorized',
  tags TEXT[] DEFAULT '{}',
  video_url TEXT,
  thumbnail_url TEXT,
  steps JSONB DEFAULT '[]',
  is_favorite BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tasks table (assign SOPs to people)
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sop_id UUID REFERENCES sops ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  assigned_to TEXT,
  assigned_to_email TEXT,
  due_date DATE,
  status TEXT DEFAULT 'pending',
  priority TEXT DEFAULT 'medium',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE
);

-- 4. Team members table
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  role TEXT DEFAULT 'viewer',
  avatar_url TEXT,
  invited_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  accepted_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better performance
CREATE INDEX sops_user_id_idx ON sops(user_id);
CREATE INDEX sops_created_at_idx ON sops(created_at DESC);
CREATE INDEX sops_folder_idx ON sops(folder);
CREATE INDEX tasks_user_id_idx ON tasks(user_id);
CREATE INDEX tasks_sop_id_idx ON tasks(sop_id);
CREATE INDEX tasks_status_idx ON tasks(status);

-- Enable Row Level Security (RLS)
-- This makes sure users can only see THEIR OWN data!
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE sops ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Security Policies for PROFILES
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Security Policies for SOPS
CREATE POLICY "Users can view own SOPs"
  ON sops FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own SOPs"
  ON sops FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own SOPs"
  ON sops FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own SOPs"
  ON sops FOR DELETE
  USING (auth.uid() = user_id);

-- Security Policies for TASKS
CREATE POLICY "Users can view own tasks"
  ON tasks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own tasks"
  ON tasks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tasks"
  ON tasks FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own tasks"
  ON tasks FOR DELETE
  USING (auth.uid() = user_id);

-- Security Policies for TEAM MEMBERS
CREATE POLICY "Users can view own team"
  ON team_members FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can invite team members"
  ON team_members FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update team members"
  ON team_members FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can remove team members"
  ON team_members FOR DELETE
  USING (auth.uid() = user_id);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at on SOPs
CREATE TRIGGER update_sops_updated_at
  BEFORE UPDATE ON sops
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Function to create profile automatically when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create profile
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

