# 🔑 Supabase Setup - Step by Step

**You created your project! Now let's set it up!**

---

## Step 1: Get Your API Keys (5 minutes)

### In Your Supabase Dashboard:

1. **Click on your project** (if not already in it)

2. **Go to Project Settings** (gear icon on left sidebar)

3. **Click "API"** in the settings menu

4. **You'll see 3 important things:**

   **A) Project URL**
   ```
   Looks like: https://xxxxxxxxxxxxx.supabase.co
   ```
   
   **B) Anon/Public Key**
   ```
   Starts with: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   (It's a LONG key - that's normal!)
   ```
   
   **C) Service Role Key** (we'll use this later)
   ```
   Also starts with: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   (Different from anon key!)
   ```

5. **COPY BOTH:**
   - Project URL
   - Anon key
   
   **Save them in Notepad for now!**

---

## Step 2: Add Keys to Your Project (5 minutes)

### In Your Project Folder:

**Create a new file:** `.env.local`

**Location:** `C:\Users\Omar\OneDrive\Desktop\Software\autopilot-sop\.env.local`

**Put this inside** (replace with YOUR keys!):
```
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUz...your-long-key-here
```

**Example of what it looks like filled in:**
```
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAwMDAwMDAsImV4cCI6MTk4NTU3NjAwMH0.something-long-here
```

**Save the file!**

---

## Step 3: Install Supabase (2 minutes)

### Open PowerShell:

```bash
# Navigate to your project
cd C:\Users\Omar\OneDrive\Desktop\Software\autopilot-sop

# Install Supabase
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

**Wait for it to finish** (takes 1-2 minutes)

---

## Step 4: Create Database Tables (10 minutes)

### In Supabase Dashboard:

1. **Click "SQL Editor"** (left sidebar - looks like </> icon)

2. **Click "New Query"**

3. **Copy ALL the SQL below** and paste it in:

```sql
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
  status TEXT DEFAULT 'draft', -- 'draft', 'published', 'archived'
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
  status TEXT DEFAULT 'pending', -- 'pending', 'in-progress', 'completed'
  priority TEXT DEFAULT 'medium', -- 'low', 'medium', 'high'
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
  role TEXT DEFAULT 'viewer', -- 'owner', 'editor', 'viewer'
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
```

4. **Click "RUN"** (bottom right corner)

5. **You should see:** "Success. No rows returned"

6. **Check it worked:**
   - Click "Table Editor" (left sidebar)
   - You should see: `profiles`, `sops`, `tasks`, `team_members`
   - **If you see them = SUCCESS!** ✅

---

## Step 5: Setup Storage for Videos (5 minutes)

### In Supabase Dashboard:

1. **Click "Storage"** (left sidebar - folder icon)

2. **Click "Create a new bucket"**

3. **Settings:**
   - Name: `videos`
   - Public bucket: **OFF** (keep it private!)
   - File size limit: 500 MB
   - Allowed file types: Leave blank (allows all)

4. **Click "Create bucket"**

5. **Set Storage Policies:**
   - Click on your `videos` bucket
   - Go to "Policies" tab
   - Click "New Policy"
   
   **Policy 1: Upload**
   - Name: "Users can upload own videos"
   - Policy definition: Custom
   - Target roles: authenticated
   - With check: `(bucket_id = 'videos'::text) AND (auth.uid()::text = (storage.foldername(name))[1])`
   - Click "Save"
   
   **Policy 2: View**
   - Name: "Users can view own videos"
   - Policy definition: Custom  
   - Target roles: authenticated
   - Using: `(bucket_id = 'videos'::text) AND (auth.uid()::text = (storage.foldername(name))[1])`
   - Click "Save"

---

## ✅ You're Done with Setup!

**What you just did:**
- ✅ Got your API keys
- ✅ Added them to your project
- ✅ Installed Supabase
- ✅ Created database tables
- ✅ Set up security (users can only see their own data!)
- ✅ Created video storage

**Next:** I'll create the code files to connect everything! 🚀

---

## 🎯 What To Do Now

Tell me: **"I finished the Supabase setup! Create the code!"**

And I'll create:
1. Supabase client configuration
2. Authentication functions
3. Database query functions
4. Real login/signup (no more mock!)
5. Everything you need to start using it!

---

## 🚨 Troubleshooting

**"I don't see my keys!"**
- Make sure you're in Project Settings → API
- Scroll down - keys are in the middle of page

**"SQL gave an error!"**
- Make sure you copied ALL of it
- Try running it again
- Check you're connected to the right project

**"Can't create storage bucket!"**
- You might need to wait a few more minutes for project setup
- Refresh the page
- Try again

---

**You're doing great! Database is almost ready!** 💪

**Next step:** I'll create all the code files! 🎉

