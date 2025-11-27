# 🎬 Test Video Upload - Quick Steps!

## ✅ Your Account is Pro - Great!

Now let's get the AI video processing working!

---

## 🚀 3 Steps to Test:

### **Step 1: Install OpenAI Package**

Open **PowerShell** in your project folder and run:

```bash
cd C:\Users\Omar\OneDrive\Desktop\Software\autopilot-sop
npm install
```

This installs the OpenAI package (already in package.json).

---

### **Step 2: Get OpenAI API Key**

1. **Go to:** https://platform.openai.com/api-keys

2. **Sign in** (or create account if needed)

3. **Click:** "Create new secret key"

4. **Name it:** "Autopilot SOP"

5. **Copy the key** - Starts with `sk-...`

---

### **Step 3: Add API Key to .env.local**

Open your `.env.local` file and add this line at the bottom:

```env
OPENAI_API_KEY=sk-your-actual-key-paste-here
```

**Replace** `sk-your-actual-key-paste-here` with the real key you just copied!

**Your .env.local should look like:**

```env
NEXT_PUBLIC_SUPABASE_URL=your-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxx
```

---

### **Step 4: Restart Dev Server**

1. **Stop the server** (Ctrl+C in terminal)
2. **Start it again:**
   ```bash
   npm run dev
   ```

---

### **Step 5: Test Video Upload!**

1. **Go to:** http://localhost:3000/app/generate

2. **Click "Choose Video File"** (should work now!)

3. **Select a short video** (1-5 minutes recommended for first test)

4. **Click "Upload & Generate SOP with AI"**

5. **Watch the magic:**
   - ✅ "Uploading..." with progress bar
   - ✅ "🎤 Transcribing audio with AI..."
   - ✅ "🧠 Generating SOP steps..."
   - ✅ "✅ SOP generated successfully!"
   - ✅ Redirects to your new AI-generated SOP!

---

## 🎥 Where to Get Test Videos:

### **Option 1: Download a Tutorial Video**
- Go to YouTube
- Search: "how to tutorial 5 minutes"
- Download any tutorial video
- Use: https://ytmp3.nu/ (just change mp3 to mp4)

### **Option 2: Record Your Own (Best!)**
- Press **Win + G** (Xbox Game Bar)
- Click "Record" button
- Do something simple for 2 minutes
- Narrate what you're doing
- Stop recording
- Upload that video!

### **Option 3: Use Phone Camera**
- Record yourself explaining any process
- Transfer video to PC
- Upload!

---

## 💰 OpenAI Credits:

**You'll need credits on your OpenAI account:**

1. Go to: https://platform.openai.com/account/billing
2. Add a payment method
3. Add **$5-10** for testing (plenty!)

**Costs per video:**
- 5-minute video: ~$0.10
- 10-minute video: ~$0.20

**$5 = about 25-50 test videos!**

---

## 🐛 Troubleshooting:

### **"Choose Video File" Still Doesn't Work**
- Hard refresh: Ctrl+Shift+R
- Clear cache
- Try different browser

### **"Invalid API Key" Error**
- Check `.env.local` has the key
- Key should start with `sk-`
- No quotes needed around the key
- Restart server after adding

### **"OpenAI Credits" Error**
- Add credits to your OpenAI account
- Need at least $0.50 balance

---

## ✅ Checklist:

- [ ] Run `npm install`
- [ ] Get OpenAI API key
- [ ] Add key to `.env.local`
- [ ] Restart server (`npm run dev`)
- [ ] Go to Generate page
- [ ] Click "Choose Video File"
- [ ] Upload a video
- [ ] Watch AI process it!

---

## 🎉 Ready!

Once you've done these 3 steps:
1. Install OpenAI ✅
2. Add API key ✅
3. Restart server ✅

**You can test the video upload and AI processing!** 🤖

---

**Let me know when you've added the OpenAI API key and I'll help you test!** 🎬

