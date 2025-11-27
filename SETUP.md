# 🚀 Quick Setup Guide

## Getting Started

### 1. Install Dependencies

First, navigate to the project directory and install all dependencies:

```bash
cd autopilot-sop
npm install
```

If you encounter any issues, try:
```bash
npm install --legacy-peer-deps
```

### 2. Start Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:3000**

### 3. Explore the App

#### Public Pages
- **Landing Page**: http://localhost:3000
  - Beautiful hero section with animations
  - Features, pricing, and FAQ sections
  
- **Login**: http://localhost:3000/login
  - Mock authentication (just click "Log In")
  
- **Signup**: http://localhost:3000/signup
  - Mock registration flow

#### App Pages (After Login)
- **Dashboard**: http://localhost:3000/app/dashboard
  - Overview with stats and recent SOPs
  
- **SOP Library**: http://localhost:3000/app/sops
  - Browse and search SOPs
  - Filter by folders
  - Grid/List view toggle
  
- **SOP Editor**: http://localhost:3000/app/sops/1
  - Drag-and-drop step reordering
  - Edit steps inline
  - Add images and substeps
  
- **Generate SOP**: http://localhost:3000/app/generate
  - Upload video or paste URL
  - Watch AI processing animation
  - See result preview
  
- **Tasks**: http://localhost:3000/app/tasks
  - View assigned tasks
  - Track completion status
  
- **Team**: http://localhost:3000/app/team
  - Manage team members
  - Invite new members
  - Assign roles
  
- **Settings**: http://localhost:3000/app/settings
  - Profile settings
  - Notifications
  - Dark mode toggle
  
- **Billing**: http://localhost:3000/app/billing
  - View subscription
  - Payment methods
  - Billing history

## 🎨 Design Highlights

### Animations
- All pages use **Framer Motion** for smooth animations
- Hover effects on cards and buttons
- Page transitions
- Drag-and-drop in SOP editor

### Color Scheme
- **Primary**: Blue gradient (#0ea5e9 → #0369a1)
- **Secondary**: Purple gradient (#a855f7 → #7e22ce)
- **Accent**: Teal (#14b8a6)

### Components
All UI components are located in `components/ui/`:
- `Button` - Multiple variants and sizes
- `Card` - With hover effects
- `Input` - With icons and validation
- `Badge` - Status indicators
- `Modal` - Animated overlays
- `Textarea` - Rich text areas

## 📝 Mock Data

The app uses mock data from `lib/mock-data.ts` for:
- Sample SOPs
- Team members
- Tasks
- Activity data

This makes it easy to see the UI without backend setup!

## 🔧 Customization

### Change Colors
Edit `tailwind.config.ts` to customize the color palette.

### Add New Pages
1. Create a new file in `app/` directory
2. Export a default React component
3. Next.js will automatically create the route

### Modify Components
All reusable components are in `components/ui/` with full TypeScript support.

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy, specify a different port:
```bash
npm run dev -- -p 3001
```

### Module Not Found
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Build the project to see all TypeScript issues:
```bash
npm run build
```

## 🎯 Next Steps

### Add Real Authentication
1. Set up Supabase or Firebase
2. Replace mock login with real auth
3. Add protected routes middleware

### Connect to Backend
1. Create API routes in `app/api/`
2. Connect to database
3. Replace mock data with real queries

### Deploy
Deploy to Vercel with one command:
```bash
npm install -g vercel
vercel
```

## 💡 Tips

- Press `Cmd/Ctrl + K` to open command palette (when implemented)
- Dark mode toggle is in Settings page
- Drag steps in SOP editor to reorder them
- Try the search in SOP library
- Click through the video generation flow

## 🎉 Enjoy!

This is a **fully functional mock** of Autopilot SOP. All UI interactions work, and it's ready for backend integration!

**Have fun exploring!** 🚀

