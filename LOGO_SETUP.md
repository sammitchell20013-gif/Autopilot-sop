# 🎨 Logo Setup Instructions

## ✅ Code Updated!

All branding text has been replaced with your logo image throughout the app!

## 📁 Move Your Logo File

**You need to move your logo to the public folder:**

### Windows (PowerShell):
```powershell
Move-Item "Logo.png" "public\logo.png"
```

### Or manually:
1. Find `Logo.png` in the root folder: `C:\Users\Omar\OneDrive\Desktop\Software\autopilot-sop\Logo.png`
2. Move it to: `C:\Users\Omar\OneDrive\Desktop\Software\autopilot-sop\public\logo.png`
3. Rename it to lowercase: `logo.png`

## 🎯 Where Your Logo Now Appears

Your logo has replaced the old "Autopilot SOP" branding in:

### 1. **Landing Page** (`app/page.tsx`)
   - ✅ Header navigation (top-left)
   - ✅ Footer

### 2. **Login Page** (`app/login/page.tsx`)
   - ✅ Logo at top of login form

### 3. **Signup Page** (`app/signup/page.tsx`)
   - ✅ Logo at top of signup form

### 4. **App Sidebar** (`components/app/sidebar.tsx`)
   - ✅ Logo in sidebar (adjusts size when collapsed)
   - Expands: 40px height (sidebar open)
   - Collapses: 32px height (sidebar collapsed)

## 🎨 Logo Sizes

Your logo is displayed at these sizes:
- **Header/Nav**: 40px height (h-10)
- **Auth Pages**: 64px height (h-16)
- **Footer**: 32px height (h-8)
- **Sidebar Expanded**: 40px height (h-10)
- **Sidebar Collapsed**: 32px height (h-8)

All widths are set to `auto` to maintain aspect ratio.

## ✅ What Was Changed

### Removed:
- ❌ Gradient icon boxes with Zap icon
- ❌ "Autopilot SOP" text branding
- ❌ Unused icon imports

### Added:
- ✅ `<img>` tags with your logo
- ✅ Proper alt text for accessibility
- ✅ Responsive sizing
- ✅ Smooth transitions (sidebar)

## 🚀 Deploy Changes

After moving the logo file:

```bash
git add .
git commit -m "Replace branding with logo image"
git push
```

Netlify will automatically redeploy!

## 🧪 Test Your Logo

Once deployed, check:
- [ ] Landing page header
- [ ] Landing page footer
- [ ] Login page
- [ ] Signup page
- [ ] Dashboard sidebar (expanded)
- [ ] Dashboard sidebar (collapsed)

## 📐 Logo Requirements

For best results, your logo should be:
- **Format**: PNG with transparent background (recommended)
- **Size**: At least 200px height
- **Aspect ratio**: Horizontal logos work best
- **File size**: Under 100KB for fast loading

## 🎨 Adjust Logo Size (Optional)

If you want to adjust the logo sizes, edit these classes in the files:

**Header**: `className="h-10 w-auto"` → Change `h-10` to desired size
**Auth Pages**: `className="h-16 w-auto"` → Change `h-16` to desired size
**Sidebar**: Look for `collapsed ? "h-8" : "h-10"` → Adjust both sizes

Height classes:
- `h-8` = 32px
- `h-10` = 40px
- `h-12` = 48px
- `h-16` = 64px
- `h-20` = 80px

## ✨ Your Logo is Live!

Once you move the file and deploy, your custom logo will be visible across the entire app! 🎉

---

**Quick Checklist**:
- [ ] Move `Logo.png` to `public/logo.png`
- [ ] Verify it's lowercase: `logo.png`
- [ ] Commit and push changes
- [ ] Check deployed site
- [ ] Celebrate! 🎊

