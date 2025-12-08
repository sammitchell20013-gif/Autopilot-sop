# 🔑 Get Google OAuth Client ID (5 Minutes)

## 🎯 What You Need

Supabase needs:
- **Client ID** (like: `123456789-abc123xyz.apps.googleusercontent.com`)
- **Client Secret** (like: `GOCSPX-abc123xyz`)

---

## ✅ Step-by-Step Setup

### **Step 1: Go to Google Cloud Console**

1. Open: https://console.cloud.google.com/
2. Sign in with your Google account
3. You should see the Google Cloud dashboard

---

### **Step 2: Create a New Project**

1. Click the **project dropdown** (top left, next to "Google Cloud")
2. Click **"New Project"**
3. **Project Name:** "Autopilot SOP"
4. Click **"Create"**
5. Wait a few seconds...
6. **Select your new project** from the dropdown

---

### **Step 3: Enable OAuth Consent Screen**

1. In the left sidebar (☰ menu), go to:
   - **"APIs & Services"** → **"OAuth consent screen"**

2. Choose **"External"** (allows anyone with a Google account)
3. Click **"Create"**

4. **Fill in the form:**
   - **App name:** Autopilot SOP
   - **User support email:** (your email)
   - **App logo:** (skip for now - optional)
   - **App domain:** (leave blank for now)
   - **Developer contact email:** (your email)

5. Click **"Save and Continue"**

6. **Scopes page:**
   - Click **"Add or Remove Scopes"**
   - Find and check:
     - ✅ `userinfo.email`
     - ✅ `userinfo.profile`
   - Click **"Update"**
   - Click **"Save and Continue"**

7. **Test users page:**
   - Click **"Add Users"**
   - Add your email address
   - Click **"Add"**
   - Click **"Save and Continue"**

8. **Summary page:**
   - Click **"Back to Dashboard"**

---

### **Step 4: Create OAuth Client ID**

1. In the left sidebar, go to:
   - **"APIs & Services"** → **"Credentials"**

2. Click **"+ Create Credentials"** (at the top)

3. Choose **"OAuth client ID"**

4. **Application type:** Select **"Web application"**

5. **Name:** "Autopilot SOP Web Client"

6. **Authorized JavaScript origins:**
   - Click **"+ Add URI"**
   - Add: `https://yjpxyocsblunqiafjcls.supabase.co`

7. **Authorized redirect URIs:**
   - Click **"+ Add URI"**
   - Add: `https://yjpxyocsblunqiafjcls.supabase.co/auth/v1/callback`

8. Click **"Create"**

9. **Pop-up appears with your credentials!** 🎉
   - **Copy the Client ID** (looks like: `123456-abc.apps.googleusercontent.com`)
   - **Copy the Client Secret** (looks like: `GOCSPX-abc123`)

---

### **Step 5: Add to Supabase**

1. Go back to **Supabase Dashboard**
2. **Authentication** → **Providers** → **Google**
3. **Paste:**
   - **Client ID** → paste what you copied
   - **Client Secret** → paste what you copied
4. **Toggle:** Turn Google **ON** ✅
5. Click **"Save"**

---

## 🧪 Test It!

1. Go to: `http://localhost:3000/login`
2. Click **"Continue with Google"**
3. Sign in with your Google account
4. **It should work!** 🎉

---

## ❌ Troubleshooting

### **"Redirect URI mismatch" error**

Make sure you added the EXACT URI in Google Console:
```
https://yjpxyocsblunqiafjcls.supabase.co/auth/v1/callback
```

### **"Access blocked: This app's request is invalid"**

1. Go back to OAuth consent screen
2. Make sure you added your email as a test user
3. Make sure you added the scopes (`userinfo.email` and `userinfo.profile`)

### **"App is in testing mode"**

That's OK! It will work for you and any test users you add. 

To make it public:
1. Go to **OAuth consent screen**
2. Click **"Publish App"**
3. Click **"Confirm"**

---

## 🎯 Quick Reference

**Your Supabase Redirect URI:**
```
https://yjpxyocsblunqiafjcls.supabase.co/auth/v1/callback
```

**Your Authorized Origin:**
```
https://yjpxyocsblunqiafjcls.supabase.co
```

---

## 💡 For Production Later

When you deploy to Netlify, you'll need to add:

**Authorized JavaScript origins:**
```
https://your-app.netlify.app
```

**Authorized redirect URIs:**
```
https://your-app.netlify.app/auth/v1/callback
```

---

## 🎉 You're Done!

Once you:
1. ✅ Created Google OAuth credentials
2. ✅ Added them to Supabase
3. ✅ Saved in Supabase

**Google Sign-In will work!** Test it now! 🚀

