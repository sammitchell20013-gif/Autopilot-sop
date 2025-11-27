# 🚀 Upgrade YOUR Account to Pro - RIGHT NOW!

## Quick 2-Minute Process:

---

## Step 1: Go to Supabase SQL Editor

1. Open: **https://supabase.com/dashboard**
2. Select your **Autopilot SOP project**
3. Click **"SQL Editor"** in the left sidebar
4. Click **"New query"** button

---

## Step 2: Copy & Paste This SQL

**IMPORTANT:** Replace `YOUR-EMAIL-HERE` with the email you used to sign up!

```sql
-- Add subscription columns (if not already added)
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS subscription_plan TEXT DEFAULT 'free',
ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'active',
ADD COLUMN IF NOT EXISTS subscription_started_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS subscription_ends_at TIMESTAMPTZ;

-- Upgrade YOUR account to Pro
UPDATE profiles 
SET 
  subscription_plan = 'pro',
  subscription_status = 'active',
  subscription_started_at = NOW(),
  subscription_ends_at = NOW() + INTERVAL '1 year'
WHERE id IN (
  SELECT id FROM auth.users WHERE email = 'YOUR-EMAIL-HERE'
);

-- Verify it worked
SELECT 
  p.full_name,
  u.email,
  p.subscription_plan,
  p.subscription_status,
  p.subscription_started_at::date as started,
  p.subscription_ends_at::date as expires
FROM profiles p
JOIN auth.users u ON p.id = u.id
WHERE u.email = 'YOUR-EMAIL-HERE';
```

---

## Step 3: Replace the Email

**Find these 2 lines:**
```sql
WHERE email = 'YOUR-EMAIL-HERE'
```

**Replace `YOUR-EMAIL-HERE` with your actual email!**

Example:
```sql
WHERE email = 'omar@example.com'
```

---

## Step 4: Click "Run"

Press the **"Run"** button or hit **Ctrl+Enter**

---

## Step 5: Check Results

At the bottom of the screen, you should see:

| full_name | email | subscription_plan | subscription_status | started | expires |
|-----------|-------|-------------------|---------------------|---------|---------|
| Your Name | your@email.com | **pro** | **active** | 2025-11-27 | 2026-11-27 |

**If you see "pro" - it worked!** ✅

---

## Step 6: Refresh Your App

1. Go to: **http://localhost:3000/app/settings**
2. **Refresh the page** (F5 or Ctrl+R)
3. Look for "Subscription Plan"
4. Should say: **"Pro"** with green checkmark! ✅

---

## ✅ What You'll Get:

### **Before (Free):**
- ❌ 1 SOP limit
- ❌ 5 Task limit
- ❌ No video uploads
- ❌ Blocked from Generate page

### **After (Pro):**
- ✅ **Unlimited SOPs**
- ✅ **Unlimited Tasks**
- ✅ **5 Team Members**
- ✅ **Video Uploads Enabled**
- ✅ **AI Processing Works**
- ✅ **1 Year Access**

---

## 🎬 Test AI Features:

Once upgraded:

1. **Go to Generate page:**
   ```
   http://localhost:3000/app/generate
   ```

2. **Page is now unlocked!** (no more "Pro Feature" block)

3. **Upload a video** - AI will process it!

4. **Create unlimited SOPs!**

---

## 🐛 Troubleshooting:

### **"No rows returned"**
- Check you replaced `YOUR-EMAIL-HERE` with your actual email
- Make sure it's the SAME email you used to sign up
- Check for typos

### **"Still shows Free after refresh"**
- Hard refresh: Ctrl+Shift+R
- Close browser completely and reopen
- Check Supabase - did SQL actually run?

### **"Error running SQL"**
- Columns might already exist (that's OK!)
- Just run the UPDATE and SELECT parts only

---

## 📧 Find Your Signup Email:

**Not sure which email you used?**

Run this in Supabase SQL Editor:
```sql
SELECT email, created_at FROM auth.users ORDER BY created_at DESC LIMIT 5;
```

This shows your most recent accounts. Use that email!

---

## ⚡ Quick Copy-Paste:

**Replace YOUR EMAIL in this one-liner:**

```sql
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS subscription_plan TEXT DEFAULT 'free', ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'active', ADD COLUMN IF NOT EXISTS subscription_started_at TIMESTAMPTZ, ADD COLUMN IF NOT EXISTS subscription_ends_at TIMESTAMPTZ; UPDATE profiles SET subscription_plan = 'pro', subscription_status = 'active', subscription_started_at = NOW(), subscription_ends_at = NOW() + INTERVAL '1 year' WHERE id IN (SELECT id FROM auth.users WHERE email = 'YOUR-EMAIL-HERE'); SELECT p.full_name, u.email, p.subscription_plan FROM profiles p JOIN auth.users u ON p.id = u.id WHERE u.email = 'YOUR-EMAIL-HERE';
```

---

## 🎉 That's It!

**3 clicks:**
1. Paste SQL
2. Replace email
3. Run

**Result:** You're now Pro! 🎊

---

**Then test the AI video processing!** 🤖✨

