# ✅ Netlify Deployment Checklist

Use this checklist to ensure smooth deployment to Netlify.

## 📋 Pre-Deployment

- [x] All code written and tested locally
- [x] `netlify.toml` configuration file created
- [x] `next.config.mjs` optimized for Netlify
- [x] `.nvmrc` file specifies Node 18
- [x] `public/_redirects` for routing
- [x] `robots.txt` for SEO
- [x] `.gitignore` includes `.netlify` folder
- [x] Package.json has build script
- [x] All dependencies listed in package.json

## 🚀 Deployment Steps

### Option A: Deploy via Netlify UI

- [ ] Push code to GitHub/GitLab/Bitbucket
  ```bash
  git init
  git add .
  git commit -m "🚀 Ready for deployment"
  git remote add origin YOUR_REPO_URL
  git push -u origin main
  ```

- [ ] Go to [app.netlify.com](https://app.netlify.com)
- [ ] Click "Add new site" → "Import an existing project"
- [ ] Select your Git provider
- [ ] Choose your repository
- [ ] Verify build settings:
  - Build command: `npm run build`
  - Publish directory: `.next`
  - Node version: 18 (from .nvmrc)
- [ ] Click "Deploy site"
- [ ] Wait 2-3 minutes for build

### Option B: Deploy via CLI

- [ ] Install Netlify CLI
  ```bash
  npm install -g netlify-cli
  ```

- [ ] Login to Netlify
  ```bash
  netlify login
  ```

- [ ] Initialize site
  ```bash
  cd autopilot-sop
  netlify init
  ```

- [ ] Deploy
  ```bash
  netlify deploy --prod
  ```

## 🧪 Post-Deployment Testing

### Functional Tests
- [ ] Site loads at Netlify URL
- [ ] Landing page displays correctly
- [ ] Navigation works (all links clickable)
- [ ] Login page redirects to dashboard
- [ ] Dashboard shows stats and SOPs
- [ ] SOP library search works
- [ ] SOP editor drag-and-drop works
- [ ] Generate page flow works
- [ ] Tasks page displays
- [ ] Team page displays
- [ ] Settings page loads
- [ ] Billing page loads

### Visual Tests
- [ ] Images load properly
- [ ] Animations play smoothly
- [ ] Colors display correctly
- [ ] Fonts render properly
- [ ] Icons appear correctly
- [ ] Gradients show properly
- [ ] No layout shifts
- [ ] No console errors

### Responsive Tests
- [ ] Mobile (375px) - iPhone SE
- [ ] Mobile (390px) - iPhone 12/13/14
- [ ] Tablet (768px) - iPad
- [ ] Tablet (1024px) - iPad Pro
- [ ] Desktop (1280px) - Laptop
- [ ] Desktop (1920px) - Full HD
- [ ] Sidebar collapses on mobile
- [ ] Navigation is touch-friendly
- [ ] Text is readable on all screens

### Performance Tests
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse Best Practices > 90
- [ ] Lighthouse SEO > 90
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] No render-blocking resources

### Browser Tests
- [ ] Chrome/Edge (Latest)
- [ ] Firefox (Latest)
- [ ] Safari (Latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## 🔧 Configuration

### Domain Setup (Optional)
- [ ] Add custom domain in Netlify
- [ ] Configure DNS records
- [ ] Enable HTTPS (automatic)
- [ ] Test custom domain
- [ ] Update `robots.txt` with new domain

### Environment Variables (When Backend Ready)
- [ ] Add environment variables in Netlify dashboard
- [ ] Test with environment variables
- [ ] Redeploy after adding variables

### Optimization
- [ ] Enable asset optimization
- [ ] Enable deploy notifications
- [ ] Set up deploy hooks (if needed)
- [ ] Configure build cache

## 📊 Monitoring

### After Launch
- [ ] Monitor build logs for errors
- [ ] Check Netlify analytics
- [ ] Set up uptime monitoring
- [ ] Enable error tracking (Sentry, etc.)
- [ ] Track user behavior (GA, PostHog, etc.)

## 🎯 Success Criteria

Your deployment is successful when:

✅ Site loads in < 3 seconds
✅ All pages are accessible
✅ No console errors
✅ Works on mobile and desktop
✅ Animations are smooth
✅ Forms work (even if mock)
✅ Images load properly
✅ Lighthouse scores > 90

## 🐛 Common Issues & Fixes

### Build Fails
```bash
# Clear Netlify cache
netlify build --clear-cache

# Or in Netlify UI: Deploys → Trigger deploy → Clear cache and deploy site
```

### Images Not Loading
- Check `next.config.mjs` has `unoptimized: true`
- Verify image domains in config
- Check public folder structure

### 404 on Routes
- Verify `public/_redirects` exists
- Check `netlify.toml` redirect rules
- Ensure all pages export properly

### Slow Build Times
- Check dependencies size
- Remove unused packages
- Enable Netlify cache

### Environment Variables Not Working
- Restart build after adding variables
- Check variable names match code
- Ensure NEXT_PUBLIC_ prefix for client-side vars

## 📞 Support Resources

- **Netlify Support**: https://answers.netlify.com
- **Next.js Docs**: https://nextjs.org/docs
- **Project Docs**: See `DEPLOYMENT.md`

## 🎉 Deployment Complete!

Once all checkboxes are ticked, your site is live and production-ready!

**Share your live URL**:
```
https://your-site-name.netlify.app
```

---

**Need help?** Check `DEPLOYMENT.md` for detailed troubleshooting.

