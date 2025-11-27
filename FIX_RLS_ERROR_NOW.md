# 🔧 Fix RLS Error - Step by Step

## The Problem
You're getting "new row violates row-level security policy" when processing videos.

---

## ✅ Solution 1: Verify .env.local File (MOST LIKELY FIX)

### Step 1: Open your .env.local file
```
C:\Users\Omar\OneDrive\Desktop\Software\autopilot-sop\.env.local
```

### Step 2: Make sure it has ALL of these lines:
```env
NEXT_PUBLIC_SUPABASE_URL=https://yjpxyocsblunqiafjcls.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
OPENAI_API_KEY=your-openai-key-here
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqcHh5b2NzYmx1bnFpYWZqY2xzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDE3NzI2MywiZXhwIjoyMDc5NzUzMjYzfQ.GxRzfL-SnCMSp8Cg58gKsLm4XX62NyLUc8PVHoj8pi8
```

### Step 3: Save the file (Ctrl + S)

### Step 4: Restart your server
- Stop the current server (Ctrl + C in terminal)
- Run: `npm run dev`
- Wait for "Ready on http://localhost:3000"

---

## ✅ Solution 2: Check Terminal Output

After you upload a video, check your terminal (where `npm run dev` is running).

### You should see:
```
🎬 Starting video processing for SOP: xxx
🔑 Service Role Key exists? true
🔑 Service Role Key length: 270
```

### If you see:
```
🔑 Service Role Key exists? false
🔑 Service Role Key length: 0
```

**→ This means .env.local doesn't have the service role key!**

---

## ✅ Solution 3: Temporary Fix (Disable RLS for Testing)

If you just want to test the AI and fix this later:

1. Go to: https://supabase.com/dashboard
2. Select your project
3. Click: **SQL Editor** (left sidebar)
4. Run this SQL:

```sql
-- Temporarily disable RLS on SOPs table
ALTER TABLE sops DISABLE ROW LEVEL SECURITY;
```

5. Click **Run**

**⚠️ Remember to re-enable RLS later for production!**

---

## 🔍 Debug: Check What the Terminal Says

After you try uploading again, copy and paste the terminal output here so I can see what's happening.

Look for lines that start with:
- 🎬 (starting)
- 🔑 (service key check)
- 📝 (database update)
- ❌ (errors)
- ✅ (success)

---

## 📋 Quick Checklist:

- [ ] .env.local file exists in `autopilot-sop/` folder
- [ ] .env.local has SUPABASE_SERVICE_ROLE_KEY line
- [ ] The service role key is the LONG one (not the anon key)
- [ ] Server was restarted after adding the key
- [ ] Terminal shows "Service Role Key exists? true"

---

## 🆘 If Nothing Works:

Try the temporary fix (disable RLS) and we'll debug why the service role key isn't working.

