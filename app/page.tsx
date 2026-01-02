"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight,
  Upload,
  CheckSquare,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <img 
                src="/Logo.png" 
                alt="Autopilot SOP" 
                className="h-10 w-auto"
              />
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium">
                Login
              </Link>
              <Link href="/signup">
                <Button variant="primary" size="sm">
                  Try it free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Turn training videos into SOPs your team actually follows
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 leading-relaxed max-w-3xl mx-auto">
              Record a process once. Upload the video.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              Autopilot SOP automatically creates step-by-step SOPs with screenshots, checklists, and executable tasks—so your team executes consistently without constant training.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  <Upload className="mr-2 w-5 h-5" />
                  Upload a video
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="min-w-[200px]">
                <PlayCircle className="mr-2 w-5 h-5" />
                See how it works
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Training breaks as teams grow
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <p>You record Looms and Zoom trainings.</p>
              <p>You explain the same process over and over.</p>
              <p>New hires miss steps.</p>
              <p>Work gets done differently every time.</p>
              <p className="pt-6 font-semibold text-gray-900 dark:text-white">
                Traditional SOPs don't solve this. They're slow to create, hard to maintain, and rarely followed.
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Autopilot SOP exists to turn training into execution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
              From video → process → execution
            </h2>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Upload a training video
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Use the videos you already record—Looms, Zoom calls, screen recordings.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Get an instant SOP
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    Autopilot SOP analyzes the video and generates:
                  </p>
                  <ul className="space-y-2 text-lg text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                      <span>Step-by-step instructions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                      <span>Screenshots for each key action</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                      <span>Clean, scannable checklists</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Turn SOPs into tasks
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Assign steps, track completion, and ensure processes are followed the same way every time.
                  </p>
                </div>
              </div>

              <div className="pt-8 text-center">
                <p className="text-xl text-gray-900 dark:text-white font-semibold mb-2">
                  No rewriting. No manual documentation. No chasing people.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              This isn't just documentation
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 mb-12">
              <p className="text-center text-xl">
                Most tools store information. Autopilot SOP creates operational systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckSquare className="w-6 h-6 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">SOPs are generated automatically</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckSquare className="w-6 h-6 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Steps are visual, not vague</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckSquare className="w-6 h-6 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Processes turn into real tasks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckSquare className="w-6 h-6 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Training stops living in videos and starts running your company</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Built for teams that run on processes
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                <p>Agencies onboarding clients and team members</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                <p>SaaS teams documenting support, sales, and internal workflows</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                <p>Operations-heavy businesses that depend on consistency</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                <p>Remote teams tired of explaining the same thing twice</p>
              </div>
            </div>

            <p className="mt-12 text-xl text-center text-gray-900 dark:text-white font-semibold">
              If processes break when someone new joins, Autopilot SOP is for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Why teams switch
            </h2>
            
            <div className="space-y-8 text-lg">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Already recording training videos
                </p>
                <p className="text-gray-900 dark:text-white font-semibold">
                  We turn them into executable systems.
                </p>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Tried SOPs before
                </p>
                <p className="text-gray-900 dark:text-white font-semibold">
                  Manual SOPs fail because they're slow to create and rarely followed.
                </p>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Concerned about additional work
                </p>
                <p className="text-gray-900 dark:text-white font-semibold">
                  This replaces work you're already doing.
                </p>
              </div>
            </div>

            <p className="mt-12 text-xl text-center text-gray-900 dark:text-white font-semibold">
              Autopilot SOP automates process documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="pricing">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Pricing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center">
              Choose the plan that fits your team size
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Starter
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>10 SOPs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>5 video uploads/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>1 user</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button variant="outline" className="w-full">
                    Start free trial
                  </Button>
                </Link>
              </div>

              {/* Professional */}
              <div className="border-2 border-blue-600 rounded-lg p-8 bg-white dark:bg-gray-800 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Professional
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$79</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Unlimited SOPs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>25 video uploads/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>5 users</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Team collaboration</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button variant="primary" className="w-full">
                    Start free trial
                  </Button>
                </Link>
              </div>

              {/* Business */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Business
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$199</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Unlimited SOPs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>100 video uploads/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>20 users</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Premium support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button variant="outline" className="w-full">
                    Start free trial
                  </Button>
                </Link>
              </div>
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
              14-day free trial. No credit card required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50" id="faq">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Frequently asked questions
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  What video formats do you support?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  MP4, MOV, AVI, and most common video formats up to 100MB.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  How long does it take to generate an SOP?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  1-3 minutes depending on video length. Most SOPs are ready in under 2 minutes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Can I edit the generated SOPs?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes. All SOPs are fully editable. You can modify steps, add notes, and customize as needed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  How does task assignment work?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Convert any SOP into tasks, assign to team members, set due dates, and track completion.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  What happens to my videos after upload?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Videos are stored securely and used only to generate your SOPs. You can delete them anytime.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Can I cancel anytime?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes. Cancel from your account settings. No questions asked.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Stop explaining. Start scaling.
            </h2>
            
            <Link href="/signup">
              <Button variant="primary" size="lg" className="min-w-[250px]">
                <Upload className="mr-2 w-5 h-5" />
                Upload your first video
              </Button>
            </Link>
            
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              No credit card required • Built for real teams
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img 
                src="/Logo.png" 
                alt="Autopilot SOP" 
                className="h-8 w-auto"
              />
            </div>
            
            <div className="flex gap-8 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white">
                Terms
              </Link>
              <a href="mailto:autopilotsop@gmail.com" className="hover:text-gray-900 dark:hover:text-white">
                Contact
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
            Made with love by TT
          </div>
        </div>
      </footer>
    </main>
  );
}
