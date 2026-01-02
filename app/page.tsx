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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
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
              <Link href="/login" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">
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
              Turn training videos into{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SOPs your team actually follows
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              Upload a training video. Autopilot SOP generates structured SOPs with step-by-step instructions, screenshots, and task assignments. Teams execute processes consistently without repeated training.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  Get Started
                </Button>
              </Link>
              <Link href="#pricing">
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  View Pricing
                </Button>
              </Link>
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
            
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p>• Training videos are recorded but not systematized</p>
              <p>• Processes are explained repeatedly</p>
              <p>• New team members miss steps</p>
              <p>• Execution varies across the team</p>
              <p className="pt-6 font-semibold text-gray-900 dark:text-white">
                Traditional SOPs are slow to create, hard to maintain, and rarely followed.
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Autopilot SOP converts training into documented processes.
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
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
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
                    Upload existing training videos: Loom recordings, Zoom calls, or screen captures.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Receive structured SOP
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    System generates:
                  </p>
                  <ul className="space-y-2 text-lg text-gray-600 dark:text-gray-400">
                    <li>• Step-by-step instructions</li>
                    <li>• Screenshots per action</li>
                    <li>• Formatted checklists</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Deploy as tasks
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Assign steps to team members, track completion, maintain process consistency.
                  </p>
                </div>
              </div>

              <div className="pt-8 text-center">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  No manual documentation. No repeated explanations.
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
              Documentation vs. operational systems
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 mb-12">
              <p className="text-center">
                Standard tools store information. Autopilot SOP creates executable processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckSquare className="w-5 h-5 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">Automated SOP generation</p>
                </div>
                <div className="flex items-start">
                  <CheckSquare className="w-5 h-5 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">Visual step documentation</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckSquare className="w-5 h-5 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">Task assignment system</p>
                </div>
                <div className="flex items-start">
                  <CheckSquare className="w-5 h-5 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">Completion tracking</p>
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
              Target users
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p>• Agencies onboarding clients and team members</p>
              <p>• SaaS teams documenting workflows</p>
              <p>• Operations-dependent businesses</p>
              <p>• Remote teams scaling processes</p>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Designed for teams requiring process consistency during growth.
              </p>
            </div>
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
              Common questions
            </h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Already recording training videos
                </p>
                <p className="text-gray-900 dark:text-white font-semibold">
                  Convert existing videos into structured SOPs.
                </p>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Previous SOP attempts failed
                </p>
                <p className="text-gray-900 dark:text-white font-semibold">
                  Manual documentation is slow and rarely maintained.
                </p>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Implementation concerns
                </p>
                <p className="text-gray-900 dark:text-white font-semibold">
                  Uses existing training materials.
                </p>
              </div>
            </div>

            <p className="mt-12 text-center text-gray-600 dark:text-gray-400">
              Automated process documentation system.
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
              FAQ
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Supported video formats?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  MP4, MOV, AVI. Maximum file size: 100MB.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Generation time?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  1-3 minutes per video.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Can SOPs be edited?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes. Full editing capabilities included.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Task assignment process?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  SOPs convert to tasks with team assignment and completion tracking.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Video storage?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Secure storage. User-controlled deletion.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Cancellation policy?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Cancel anytime from account settings.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Start documenting processes
            </h2>
            
            <Link href="/signup">
              <Button variant="primary" size="lg" className="min-w-[200px] bg-white text-blue-600 hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
            
            <p className="mt-6 text-blue-100">
              No credit card required
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
            © 2024 Autopilot SOP. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
