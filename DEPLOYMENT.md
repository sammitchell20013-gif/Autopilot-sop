# 🚀 Deployment Guide - Netlify

This guide will help you deploy Autopilot SOP to Netlify in minutes!

## 📋 Prerequisites

1. A [Netlify account](https://app.netlify.com/signup) (free tier works great!)
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
3. Node.js 18+ installed locally (for testing)

## 🚀 Quick Deploy to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push Your Code to Git**
   ```bash
   cd autopilot-sop
   git init
   git add .
   git commit -m "Initial commit - Autopilot SOP"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your `autopilot-sop` repository
   - Netlify will auto-detect Next.js settings!

3. **Configure Build Settings**
   Netlify should auto-detect these, but verify:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18

4. **Deploy!**
   - Click "Deploy site"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at `https://random-name.netlify.app`

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Navigate to project
cd autopilot-sop

# Initialize Netlify site
netlify init

# Deploy
netlify deploy --prod
```

## 🔧 Configuration Files

The project includes these Netlify-specific files:

### `netlify.toml`
- Build configuration
- Redirect rules
- Security headers
- Next.js plugin settings

### `.env.example`
- Template for environment variables
- Copy to `.env.local` for local development
- Add real values in Netlify dashboard for production

## 🌍 Custom Domain

1. Go to Netlify dashboard → Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Enable HTTPS (automatic with Let's Encrypt)

## 🔐 Environment Variables

If you add backend services later, configure environment variables in Netlify:

1. Go to Site settings → Environment variables
2. Add your variables (see `.env.example` for list)
3. Redeploy for changes to take effect

**Important**: Never commit `.env.local` or `.env` files to Git!

## 📦 Build Settings

### Automatic Deploys
- **Enabled by default** when connected to Git
- Every push to `main` branch triggers a deploy
- Pull requests get preview deploys

### Build Configuration

The `netlify.toml` file handles:
- ✅ Next.js optimization
- ✅ Automatic redirects for SPA routing
- ✅ Security headers
- ✅ Node.js 18 environment

### Build Time
- **First build**: ~3-5 minutes
- **Subsequent builds**: ~2-3 minutes (with caching)

## 🐛 Troubleshooting

### Build Fails with "Module not found"
```bash
# Clear Netlify cache and rebuild
netlify build --clear-cache
```

### Images Not Loading
- Check `next.config.mjs` has `unoptimized: true`
- Verify image domains are listed in config

### 404 on Routes
- Ensure `netlify.toml` has redirect rules
- Check that all pages export properly

### Build Timeout
```toml
# Add to netlify.toml if needed
[build]
  command = "npm run build"
  publish = ".next"
  
[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--legacy-peer-deps"
```

## 🎯 Post-Deployment Checklist

- [ ] Site loads correctly at Netlify URL
- [ ] Landing page animations work
- [ ] Can navigate to all pages
- [ ] Login redirects to dashboard (mock auth)
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] Forms work (even if mock)
- [ ] No console errors
- [ ] Lighthouse score > 90

## 🔄 Continuous Deployment

Your site will automatically redeploy when you:
1. Push commits to your main branch
2. Merge pull requests
3. Create a new release/tag

### Preview Deploys
- Every pull request gets a unique preview URL
- Test changes before merging
- Share with team for review

## 📊 Performance Tips

### Netlify Plugin
The `@netlify/plugin-nextjs` is automatically installed and provides:
- ✅ Server-side rendering optimization
- ✅ Automatic route handling
- ✅ Edge function support
- ✅ Image optimization

### Edge Functions (Coming Soon)
When you add backend functionality:
```bash
netlify functions:create
```

## 🚀 Advanced Features

### Enable Deploy Previews
Go to Site settings → Build & deploy → Deploy contexts:
- ✅ Production branch: `main`
- ✅ Deploy previews: All branches
- ✅ Branch deploys: Enabled

### Add Forms (When Ready)
Netlify Forms work out of the box:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="email" name="email" />
  <button type="submit">Submit</button>
</form>
```

### Analytics
Enable Netlify Analytics for real-time traffic data:
- Site settings → Analytics → Enable

## 📱 Testing Your Deployment

Once deployed, test these key flows:

1. **Landing Page** → Should load with smooth animations
2. **Navigation** → All links work
3. **Login** → Redirects to /app/dashboard
4. **Dashboard** → All stats and SOPs display
5. **SOP Library** → Search and filters work
6. **SOP Editor** → Drag-and-drop functions
7. **Generate** → Upload flow works
8. **Mobile** → Responsive on all screens

## 🎉 You're Live!

Your Autopilot SOP webapp is now deployed and accessible to the world!

### Share Your Site
```
https://your-site-name.netlify.app
```

### Next Steps
1. 🎨 Customize your domain name in Netlify settings
2. 🔐 Add real authentication when ready (Supabase/Firebase)
3. 💳 Integrate Stripe for billing
4. 🤖 Connect OpenAI API for video processing
5. 📧 Set up email notifications
6. 📊 Enable analytics

---

## 🆘 Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **Next.js on Netlify**: https://docs.netlify.com/frameworks/next-js/
- **Netlify Community**: https://answers.netlify.com

## 🎊 Deployment Complete!

Your jaw-dropping SaaS webapp is now live on the internet! 🚀

**Share it, test it, and when you're ready, add the backend!**

