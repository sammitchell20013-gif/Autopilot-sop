# ⚡ DO THIS NOW - 3 Quick Steps!

## Step 1: Create .env.local File (2 minutes)

**In your autopilot-sop folder:**

1. Right-click → New → Text Document
2. Name it: `.env.local` (with the dot!)
3. Open it and paste this:

```
NEXT_PUBLIC_SUPABASE_URL=https://yjpxyocsblunqiafjcls.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqcHh5b2NzYmx1bnFpYWZqY2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzcyNjMsImV4cCI6MjA3OTc1MzI2M30.kOjJwTKD7WR4Wh1yYFJPoO8Xn2wvdI2-gDWL5xS_elA
```

4. Save it!
5. Close it!

---

## Step 2: Install Supabase (2 minutes)

**Open PowerShell:**

```bash
cd C:\Users\Omar\OneDrive\Desktop\Software\autopilot-sop

npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

Wait for it to finish...

---

## Step 3: Run SQL in Supabase (3 minutes)

**In your Supabase Dashboard:**

1. Click **"SQL Editor"** (left sidebar)
2. Click **"New Query"**
3. Open the file `SETUP_SQL.sql` (I just created it)
4. Copy ALL of it
5. Paste into Supabase
6. Click **"RUN"** (bottom right)
7. Should say "Success!" ✅

**To verify it worked:**
- Click "Table Editor" (left sidebar)
- You should see these tables:
  - profiles
  - sops
  - tasks
  - team_members

**If you see them = YOU'RE DONE WITH SETUP!** 🎉

---

## Step 4: Setup Video Storage (3 minutes)

**In Supabase Dashboard:**

1. Click **"Storage"** (left sidebar)
2. Click **"Create a new bucket"**
3. Name: `videos`
4. Public: **OFF** (keep private)
5. Click **"Create bucket"**

---

## ✅ After You Finish All 4 Steps

Tell me: **"Setup complete! Create the code files!"**

And I'll create:
- Supabase client
- Real authentication
- Database functions
- Updated login/signup
- Everything you need!

---

**This is the hardest part - you're almost done!** 💪

**Go do those 4 steps now!** 🚀

