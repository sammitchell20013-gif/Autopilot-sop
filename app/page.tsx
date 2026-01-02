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
      {/* Under Construction Banner */}
      <div className="bg-yellow-400 text-gray-900 py-2 px-4 text-center font-semibold text-sm">
        🚧 Under Construction - Site is being actively developed
      </div>

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
              Upload training videos. System generates SOPs with step-by-step instructions, screenshots, and task assignments. Teams execute processes consistently.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  <Upload className="mr-2 w-5 h-5" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm">
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
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p>Training videos are recorded and stored, but remain scattered across platforms without systematic organization or actionable structure for team implementation.</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p>Team leaders spend hours explaining the same processes repeatedly to new hires, existing team members, and across different departments, consuming valuable time.</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p>New team members miss critical steps or misunderstand key instructions during onboarding, leading to errors, delays, and the need for additional correction cycles.</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p>Execution quality varies significantly across the team as each member interprets and implements processes differently, resulting in inconsistent outcomes and reduced reliability.</p>
              </div>
              <div className="pt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">
                  Traditional standard operating procedures require extensive manual creation time, become outdated quickly without consistent maintenance, and typically sit unused in folders because team members find them difficult to reference during actual work execution.
                </p>
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Autopilot SOP transforms existing training materials into living, actionable process documentation that teams actively reference and follow.
                </p>
              </div>
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
              <div className="flex flex-col md:flex-row gap-8 items-start p-8 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Upload a training video
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Select and upload training videos from any source—whether they're Loom screen recordings, Zoom meeting captures, or direct screen recordings from your computer. The system accepts all standard video formats and processes them securely in the cloud.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-start p-8 bg-gradient-to-r from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Receive structured documentation
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    The AI engine analyzes video content, identifies key actions, and automatically generates comprehensive documentation. Each generated SOP includes:
                  </p>
                  <ul className="space-y-2 text-lg text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 mr-3 mt-1 text-purple-600 flex-shrink-0" />
                      <span>Detailed step-by-step instructions that break down complex processes into clear, actionable tasks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 mr-3 mt-1 text-purple-600 flex-shrink-0" />
                      <span>Automatically captured screenshots showing exactly what users should see at each step of the process</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 mr-3 mt-1 text-purple-600 flex-shrink-0" />
                      <span>Interactive checklists that team members can use to track progress and ensure nothing is missed</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-start p-8 bg-gradient-to-r from-teal-50 to-teal-100/50 dark:from-teal-900/20 dark:to-teal-800/10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Deploy and track execution
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Transform documentation into actionable work by assigning specific process steps to individual team members or groups. Set deadlines, track completion status in real-time, and monitor adherence to ensure every process is executed consistently according to the documented standard. Managers gain visibility into process completion rates and can identify bottlenecks or training gaps before they impact operations.
                  </p>
                </div>
              </div>

              <div className="pt-8 text-center">
                <div className="inline-block p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md">
                  <p className="text-xl text-gray-900 dark:text-white font-semibold">
                    Eliminate the cycle of manual documentation creation, repetitive verbal explanations, and inconsistent process execution that slows down team growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm">
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
              <p className="text-center text-xl p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                Traditional documentation tools passively store information in static files that quickly become outdated and forgotten. Autopilot SOP creates dynamic, executable process systems that teams actively use daily to maintain operational consistency and quality standards across all activities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <CheckSquare className="w-6 h-6 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Automated SOP generation</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Convert video content into structured documentation without manual transcription or formatting work</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckSquare className="w-6 h-6 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Visual step documentation</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Every process includes screenshots and visual guides that eliminate ambiguity and clarify expectations</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <CheckSquare className="w-6 h-6 mr-3 mt-1 text-purple-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Task assignment system</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Delegate specific process steps to team members with clear accountability and tracking mechanisms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckSquare className="w-6 h-6 mr-3 mt-1 text-purple-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Completion tracking</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Monitor process adherence in real-time and identify bottlenecks before they impact business operations</p>
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
              Target users
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">Agencies managing client onboarding and team training</p>
              </div>
              <div className="flex items-start p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-3 h-3 bg-purple-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">SaaS companies documenting support and sales workflows</p>
              </div>
              <div className="flex items-start p-6 bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-900/20 dark:to-teal-800/10 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-3 h-3 bg-teal-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">Operations businesses requiring consistent execution</p>
              </div>
              <div className="flex items-start p-6 bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-900/20 dark:to-indigo-800/10 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-3 h-3 bg-indigo-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">Remote teams scaling processes across time zones</p>
              </div>
            </div>

            <div className="mt-12 text-center p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl">
              <p className="text-xl text-white font-semibold">
                For organizations requiring process consistency during growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm">
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
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600">
                <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">
                  Already recording training videos
                </p>
                <p className="text-gray-900 dark:text-white font-semibold text-lg">
                  Upload existing videos. System converts to structured documentation.
                </p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-600">
                <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">
                  Previous SOP attempts failed
                </p>
                <p className="text-gray-900 dark:text-white font-semibold text-lg">
                  Manual documentation requires time and becomes outdated. Automated generation maintains current documentation.
                </p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-teal-600">
                <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">
                  Implementation concerns
                </p>
                <p className="text-gray-900 dark:text-white font-semibold text-lg">
                  No workflow changes required. Upload existing materials and begin operations within days.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md">
              <p className="text-xl text-gray-900 dark:text-white font-semibold">
                Automated process documentation without manual overhead.
              </p>
            </div>
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
                    <span>10 SOPs - Create up to 10 standard operating procedures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>5 video uploads/month - Process 5 training videos monthly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>1 user account - Single user access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Email support - Response within 24 hours</span>
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
                    <span>Unlimited SOPs - No limits on documentation creation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>25 video uploads/month - Process 25 training videos monthly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>5 user accounts - Team collaboration included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Priority support - Response within 4 hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Team collaboration tools - Shared workspaces and permissions</span>
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
                    <span>Unlimited SOPs - No restrictions on documentation volume</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>100 video uploads/month - High-volume processing capacity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>20 user accounts - Full team access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Premium support - Response within 1 hour, dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Advanced analytics - Completion rates, time tracking, custom reports</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm" id="faq">
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
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  What video formats are supported?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The platform accepts MP4, MOV, AVI, and WebM formats. Maximum file size is 100MB per upload. Videos can be screen recordings from tools like Loom, Zoom meeting recordings, or direct captures from screen recording software. The system processes standard resolution videos (720p to 1080p) most efficiently, though 4K videos are supported with longer processing times.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  How long does SOP generation take?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Processing time ranges from 1-3 minutes depending on video length and complexity. A 5-minute training video typically generates a complete SOP in under 2 minutes. The system analyzes audio, captures key visual moments, and structures content into sequential steps. Processing occurs in the background, allowing multiple uploads simultaneously. Email notifications are sent when documentation is ready for review.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Are generated SOPs editable?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All generated documentation is fully editable. Modify step descriptions, add clarifying notes, reorganize sequences, update screenshots, or insert additional instructions. Changes save automatically and sync across assigned tasks. Version history tracks modifications. The editing interface supports rich text formatting, bullet points, numbered lists, and embedded images. Team members with appropriate permissions can contribute edits.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  How does task assignment work?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Convert any SOP into executable tasks by selecting specific team members or groups as assignees. Set due dates, priority levels, and recurring schedules for routine processes. Assigned members receive email notifications and dashboard alerts. Track completion status, view progress percentages, and identify bottlenecks through the management dashboard. Tasks include direct links to full SOP documentation. Completion requires checking off all steps, with optional manager approval workflows.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  How are uploaded videos stored?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Videos are encrypted during upload and stored on secure cloud infrastructure with SOC 2 Type II compliance. Storage is geographically redundant across multiple data centers. Original videos remain accessible for future reference or re-processing. Account owners can permanently delete videos at any time through the media management interface. Deletion is immediate and irreversible. Videos are used solely for SOP generation and are never shared with third parties or used for training external AI models.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  What is the cancellation policy?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Cancel subscription at any time directly from account settings without contacting support. Cancellation takes effect at the end of the current billing cycle. Access to all features, existing SOPs, and documentation remains available until the subscription period ends. All data can be exported before cancellation. No cancellation fees or long-term contracts. Reactivate canceled accounts at any time without data loss if within 90 days of cancellation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
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
              <Button variant="primary" size="lg" className="min-w-[250px] bg-white hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <Upload className="mr-2 w-5 h-5 text-blue-600" />
                <span className="text-white">Get Started</span>
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
        </div>
      </footer>
    </main>
  );
}
