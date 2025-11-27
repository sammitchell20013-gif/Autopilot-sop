# Autopilot SOP - AI Video-to-SOP Generator

A jaw-dropping SaaS webapp that converts training videos into structured, executable SOPs with AI-powered automation.

## 🚀 Features

### Landing Page
- Premium hero section with animated gradients
- Feature showcase with smooth scroll animations
- Pricing section with 3 tiers
- FAQ section
- Fully responsive design

### Authentication
- Beautiful login/signup pages
- Social authentication (Google, GitHub)
- Password reset flow
- Glassmorphism design effects

### Dashboard
- Overview with key metrics
- Recent SOPs display
- Upcoming tasks
- Quick actions panel
- Real-time statistics

### SOP Management
- **SOP Library**: Browse, search, and organize SOPs by folders
- **SOP Editor**: Drag-and-drop step reordering with visual editor
- **Video to SOP**: Upload videos or paste URLs for AI processing
- Screenshot extraction and step generation
- Rich text editing with images

### Team Collaboration
- **Tasks**: Assign and track SOP execution
- **Team**: Invite members with role-based permissions (Owner, Editor, Viewer)
- **Activity tracking**: Monitor completion rates

### Settings & Billing
- Profile management
- Notification preferences
- Dark mode support
- Subscription management
- Payment method handling
- Usage statistics
- Billing history

## 🎨 Design Features

- **Smooth Animations**: Framer Motion throughout
- **Glassmorphism**: Modern glass effects
- **Gradients**: Vibrant blue, purple, and teal color schemes
- **Micro-interactions**: Hover effects and transitions
- **Responsive**: Mobile-first design
- **Dark Mode Ready**: Full dark theme support

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State**: React Hooks

## 📦 Installation

1. **Install Dependencies**:
```bash
cd autopilot-sop
npm install
```

2. **Run Development Server**:
```bash
npm run dev
```

3. **Open Browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
autopilot-sop/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── login/page.tsx              # Login page
│   ├── signup/page.tsx             # Signup page
│   ├── app/
│   │   ├── layout.tsx              # App layout with sidebar
│   │   ├── dashboard/page.tsx      # Dashboard
│   │   ├── sops/
│   │   │   ├── page.tsx            # SOP library
│   │   │   └── [id]/page.tsx       # SOP editor
│   │   ├── generate/page.tsx       # Video upload
│   │   ├── tasks/page.tsx          # Tasks management
│   │   ├── team/page.tsx           # Team management
│   │   ├── settings/page.tsx       # Settings
│   │   └── billing/page.tsx        # Billing
│   ├── globals.css                 # Global styles
│   └── layout.tsx                  # Root layout
├── components/
│   ├── ui/                         # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── modal.tsx
│   │   └── textarea.tsx
│   └── app/
│       └── sidebar.tsx             # App sidebar navigation
├── lib/
│   ├── utils.ts                    # Utility functions
│   └── mock-data.ts                # Mock data for demo
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies
```

## 🎯 Key Pages

### Public Pages
- `/` - Landing page with hero, features, pricing, FAQ
- `/login` - User authentication
- `/signup` - New user registration

### App Pages (Requires Auth)
- `/app/dashboard` - Main dashboard with overview
- `/app/sops` - SOP library with search and folders
- `/app/sops/:id` - SOP editor with drag-and-drop
- `/app/generate` - Video upload and AI generation
- `/app/tasks` - Task management and tracking
- `/app/team` - Team member management
- `/app/settings` - User settings and preferences
- `/app/billing` - Subscription and billing management

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9 - #0369a1)
- **Secondary**: Purple (#a855f7 - #7e22ce)
- **Accent**: Teal (#14b8a6 - #0f766e)
- **Success**: Green
- **Warning**: Yellow/Orange
- **Danger**: Red

### Components
All components are fully typed with TypeScript and include:
- Variants (primary, secondary, outline, ghost, etc.)
- Sizes (sm, md, lg)
- Hover effects
- Dark mode support
- Accessibility features

## 🚧 Next Steps (Future Implementation)

### Backend Integration
1. Set up Supabase/Firebase for:
   - User authentication
   - Database (PostgreSQL)
   - File storage for videos
   - Real-time updates

2. Integrate AI Services:
   - OpenAI API for transcription
   - FFmpeg for video processing
   - Screenshot extraction

3. Add Payment Processing:
   - Stripe integration
   - Subscription management
   - Webhook handling

### Additional Features
- Real-time collaboration
- Version history for SOPs
- Comments and annotations
- Export to multiple formats (PDF, Markdown, Notion)
- Public sharing links
- Integrations (Slack, Zapier, etc.)
- Mobile app
- API for developers

## 🔒 Environment Variables (To Add)

Create a `.env.local` file:

```env
# Authentication
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# OpenAI
OPENAI_API_KEY=your_openai_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

## 🚀 Deploy to Netlify

Your app is ready to deploy! See `DEPLOYMENT.md` for the complete guide.

### Quick Deploy Steps:

1. **Push to Git**:
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Click "Deploy site"

3. **Done!** Your site will be live at `https://your-site.netlify.app`

### Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## 📝 License

This project is created for demonstration purposes.

## 🎉 Credits

Built with love using:
- Next.js
- Tailwind CSS
- Framer Motion
- Lucide Icons
- TypeScript

---

**Ready to automate your SOPs?** Start the dev server and explore the app! 🚀

