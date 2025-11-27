# 🚀 Upgrade Yourself to Professional Plan

## Quick Steps to Get Pro Access:

### **Step 1: Run SQL Script in Supabase**

1. **Go to Supabase Dashboard:**
   ```
   https://supabase.com/dashboard
   ```

2. **Open your project** (the one for Autopilot SOP)

3. **Click "SQL Editor"** in the left sidebar

4. **Click "New query"**

5. **Copy & paste this SQL:**

```sql
-- Add subscription fields to profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS subscription_plan TEXT DEFAULT 'free',
ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'active',
ADD COLUMN IF NOT EXISTS subscription_started_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS subscription_ends_at TIMESTAMPTZ;

-- Upgrade YOUR account to Pro (replace email with yours!)
UPDATE profiles 
SET 
  subscription_plan = 'pro',
  subscription_status = 'active',
  subscription_started_at = NOW(),
  subscription_ends_at = NOW() + INTERVAL '1 year'
WHERE id IN (
  SELECT id FROM auth.users WHERE email = 'YOUR-EMAIL@example.com'
);

-- Check it worked
SELECT 
  p.id,
  p.full_name,
  u.email,
  p.subscription_plan,
  p.subscription_status,
  p.subscription_started_at,
  p.subscription_ends_at
FROM profiles p
JOIN auth.users u ON p.id = u.id
WHERE u.email = 'YOUR-EMAIL@example.com';
```

6. **IMPORTANT:** Replace `YOUR-EMAIL@example.com` with your actual email (appears twice!)

7. **Click "Run"** (or press Ctrl+Enter)

8. **Check the results** at the bottom - you should see your account with `pro` plan! ✅

---

## **Step 2: Refresh Your App**

1. **Go to your app:** http://localhost:3000/app/settings

2. **Refresh the page** (F5 or Ctrl+R)

3. **Check "Current Plan"** - should show **"Pro"** now! 🎉

---

## ✅ What You Get with Pro:

- ✅ **Unlimited SOPs** (was: 5)
- ✅ **Unlimited Tasks** (was: 10)
- ✅ **5 Team Members** (was: 1)
- ✅ **Unlimited Video Uploads** (was: 0)
- ✅ **10GB Storage** (was: 0.5GB)
- ✅ **Priority Support**
- ✅ **AI Generation** 
- ✅ **1 Year Subscription**

---

## 🔍 Verify It Worked:

### **Check in Settings:**
```
http://localhost:3000/app/settings
```

You should see:
- **Current Plan:** Pro ✅

### **Check in Billing:**
```
http://localhost:3000/app/billing
```

You should see:
- **Your Current Plan:** Pro ✅
- **Status:** Active ✅
- **Renews:** One year from today ✅

---

## 📊 Where Your Plan Shows:

The app will now display "Pro" instead of "Free" in:
- ✅ Settings page
- ✅ Billing page  
- ✅ (Future) Dashboard stats
- ✅ (Future) Feature access checks

---

## 🎯 Quick Copy-Paste (Update Email):

Replace `YOUR-EMAIL@example.com` with your email, then run in Supabase SQL Editor:

```sql
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS subscription_plan TEXT DEFAULT 'free', ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'active', ADD COLUMN IF NOT EXISTS subscription_started_at TIMESTAMPTZ, ADD COLUMN IF NOT EXISTS subscription_ends_at TIMESTAMPTZ;

UPDATE profiles SET subscription_plan = 'pro', subscription_status = 'active', subscription_started_at = NOW(), subscription_ends_at = NOW() + INTERVAL '1 year' WHERE id IN (SELECT id FROM auth.users WHERE email = 'YOUR-EMAIL@example.com');

SELECT p.full_name, u.email, p.subscription_plan, p.subscription_status FROM profiles p JOIN auth.users u ON p.id = u.id WHERE u.email = 'YOUR-EMAIL@example.com';
```

---

## 🔄 Need to Change Plans Later?

### **Upgrade to Business:**
```sql
UPDATE profiles 
SET subscription_plan = 'business'
WHERE id IN (SELECT id FROM auth.users WHERE email = 'YOUR-EMAIL@example.com');
```

### **Upgrade to Enterprise:**
```sql
UPDATE profiles 
SET subscription_plan = 'enterprise'
WHERE id IN (SELECT id FROM auth.users WHERE email = 'YOUR-EMAIL@example.com');
```

### **Downgrade to Free:**
```sql
UPDATE profiles 
SET subscription_plan = 'free'
WHERE id IN (SELECT id FROM auth.users WHERE email = 'YOUR-EMAIL@example.com');
```

---

## ⚠️ Important Notes:

1. **Replace email** - Don't forget to change `YOUR-EMAIL@example.com` to your actual email!
2. **Run in Supabase** - This must be run in Supabase SQL Editor, not in your terminal
3. **Refresh browser** - After running SQL, refresh your webapp to see changes
4. **Check results** - The SELECT query at the end shows if it worked

---

## 🎉 Done!

**You're now on the Professional plan for 1 year!**

No payment needed - this is for development/testing. When you launch for real users, you'll integrate Stripe for actual payments! 🚀

