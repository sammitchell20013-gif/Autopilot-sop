# 🔧 Troubleshooting Guide

Common issues and their solutions when building/deploying Autopilot SOP.

---

## 🐛 Build Errors

### ❌ "The `border-border` class does not exist"

**Problem**: Invalid Tailwind utility classes in `globals.css`

**Solution**: ✅ FIXED! See `BUILD_FIX.md`

The `app/globals.css` file has been updated to use only valid Tailwind classes.

**Verify the fix**:
```bash
npm run build
```

---

### ❌ "Module not found: Can't resolve..."

**Problem**: Missing dependencies

**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Or with force
npm install --force
```

---

### ❌ "PostCSS plugin tailwindcss requires PostCSS 8"

**Problem**: PostCSS version mismatch

**Solution**: Already configured correctly in `package.json`. If you still see this:
```bash
npm install -D postcss@latest autoprefixer@latest tailwindcss@latest
```

---

## 🌐 Netlify-Specific Issues

### ❌ Build succeeds locally but fails on Netlify

**Common causes**:
1. **Node version mismatch**
   - Solution: `.nvmrc` file specifies Node 18 ✅ Already added

2. **Environment variables missing**
   - Solution: Add them in Netlify dashboard
   - Note: Currently no env vars needed for mock version

3. **Build command incorrect**
   - Solution: Check `netlify.toml` has `command = "npm run build"` ✅ Correct

**Debug steps**:
```bash
# Test build locally
npm run build

# Check Netlify build logs
# Look for the specific error message
```

---

### ❌ "404 Not Found" on routes after deploy

**Problem**: Routing not configured

**Solution**: ✅ FIXED! We have:
- `public/_redirects` file ✅
- `netlify.toml` redirect rules ✅

If still having issues:
1. Check Netlify deploy logs
2. Verify `_redirects` file is in `public/` folder
3. Clear Netlify cache and redeploy

---

### ❌ Images not loading on Netlify

**Problem**: Image optimization issues

**Solution**: ✅ FIXED! `next.config.mjs` has:
```javascript
images: {
  unoptimized: true,
  domains: ['images.unsplash.com', 'api.dicebear.com'],
}
```

---

## 💻 Local Development Issues

### ❌ "Port 3000 is already in use"

**Problem**: Another app using the port

**Solution**:
```bash
# Use a different port
npm run dev -- -p 3001

# Or kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

---

### ❌ "Cannot find module 'next'"

**Problem**: Dependencies not installed

**Solution**:
```bash
npm install
```

---

### ❌ Tailwind styles not applying

**Problem**: Tailwind not configured correctly

**Solution**: Check these files exist and are correct:
- ✅ `tailwind.config.ts`
- ✅ `postcss.config.mjs`
- ✅ `app/globals.css` imports Tailwind

All already configured correctly!

---

## 🎨 Style Issues

### ❌ "Unknown at rule @tailwind"

**Problem**: Editor doesn't recognize Tailwind directives

**Solution**: Install Tailwind CSS IntelliSense extension in VSCode

---

### ❌ Dark mode not working

**Problem**: Dark mode toggle needs implementation

**Solution**: The UI is ready! Dark mode toggle is in Settings page.
To implement:
1. Add `next-themes` package
2. Wrap app in `ThemeProvider`
3. Use `useTheme` hook

Currently uses Tailwind's `dark:` classes - manual toggle needed.

---

## 🔐 Authentication Issues

### ❌ "Authentication required"

**Problem**: Mock auth redirects

**Solution**: This is expected! The app uses mock authentication.
- Login just redirects to dashboard
- No real auth implemented yet

To add real auth:
1. Set up Supabase/Firebase
2. Replace mock functions in login/signup pages
3. Add auth context
4. Protect routes with middleware

---

## 📦 Deployment Issues

### ❌ "Build took longer than 15 minutes"

**Problem**: Build timeout

**Solution**:
1. Optimize dependencies
2. Enable build cache (automatic on Netlify)
3. Check for infinite loops in build

Typical build time: 2-3 minutes

---

### ❌ "Deploy preview not working"

**Problem**: Preview deploys not enabled

**Solution**:
1. Go to Netlify dashboard
2. Site settings → Build & deploy → Deploy contexts
3. Enable "Deploy previews"

---

## 🚀 Performance Issues

### ❌ "Lighthouse score is low"

**Check these**:
- ✅ Images optimized
- ✅ Code split
- ✅ Minification enabled
- Build with `npm run build` for production

**Common fixes**:
- Reduce image sizes
- Lazy load components
- Remove unused dependencies

---

## 🔧 Quick Fixes

### Clear Netlify Cache
```bash
# Via CLI
netlify build --clear-cache

# Via Dashboard
Deploys → Trigger deploy → Clear cache and deploy
```

### Reset Local Environment
```bash
# Clean everything
rm -rf node_modules .next package-lock.json

# Reinstall
npm install

# Test build
npm run build
```

### Verify Configuration Files
```bash
# Check all config files exist
ls -la netlify.toml
ls -la next.config.mjs
ls -la tailwind.config.ts
ls -la tsconfig.json
ls -la .nvmrc
ls -la public/_redirects
```

All should exist! ✅

---

## 📞 Still Having Issues?

### Check These Resources:
1. **Build logs**: Netlify dashboard → Deploys → Build log
2. **Netlify docs**: https://docs.netlify.com
3. **Next.js docs**: https://nextjs.org/docs
4. **Tailwind docs**: https://tailwindcss.com/docs

### Common Commands:
```bash
# Test everything locally
npm install
npm run build
npm start

# Deploy to Netlify
git add .
git commit -m "Fix: Your change description"
git push

# Or use CLI
netlify deploy --prod
```

---

## ✅ Verification Checklist

Before deploying, verify:
- [ ] `npm run build` succeeds locally
- [ ] No TypeScript errors
- [ ] No console errors when running `npm run dev`
- [ ] All pages load correctly
- [ ] Animations work
- [ ] Mobile responsive

---

## 🎉 Most Common Fix

**If build fails on Netlify**:
1. Check the error message in build logs
2. Google the exact error
3. Try building locally first: `npm run build`
4. Check this troubleshooting guide
5. Clear Netlify cache and retry

**90% of issues are fixed by**:
- Clearing cache
- Reinstalling dependencies
- Using correct Node version (18)

---

**Current Status**: All known issues are fixed! ✅

The app should build successfully on Netlify now.

