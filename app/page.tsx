"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CheckSquare,
  Edit,
  FileText,
  Sparkles,
  Upload,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function HomePage() {
  const comingSoon = (label: string) => {
    alert(`${label} is coming soon.`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950">
      {/* Sticky Header (topbar + nav) */}
      <header className="sticky top-0 z-50">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <p className="text-xs sm:text-sm font-semibold text-center">
              Pre-launch preview. Signup and login are disabled while we finish security + payments.
            </p>
          </div>
        </div>

        <nav className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200/70 dark:border-gray-800/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-3">
                <img src="/Logo.png" alt="Autopilot SOP" className="h-10 w-auto" />
                <span className="hidden sm:block text-sm font-semibold text-gray-900 dark:text-white">
                  Autopilot SOP
                </span>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                <a
                  href="#features"
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors"
                >
                  How it works
                </a>
                <a
                  href="#pricing"
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors"
                >
                  Pricing
                </a>
                <a href="#faq" className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors">
                  FAQ
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  disabled
                  className="cursor-not-allowed opacity-50"
                  title="Coming soon"
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  disabled
                  className="cursor-not-allowed opacity-50"
                  title="Coming soon"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-14 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">AI-powered SOP generation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 leading-[1.05]">
                Turn <span className="gradient-text">training videos</span> into executable SOPs.
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8">
                Upload a video and get a structured SOP with steps, screenshots, and checklists—then turn it into tasks
                your team can follow and track.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Step-by-step output
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Editable + shareable
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Tasks + completion
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Button variant="primary" size="lg" disabled className="cursor-not-allowed opacity-50">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <div className="text-sm text-gray-500 dark:text-gray-400 text-center lg:text-left">
                  Launching soon. We’re finalizing security headers, auth hardening, and billing.
                </div>
              </div>
            </motion.div>

            {/* Product Preview */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative"
            >
              <div className="relative">
                <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-200/70 dark:border-gray-700/70 bg-white dark:bg-gray-900">
                  <div className="bg-gray-100 dark:bg-gray-950 px-4 py-3 flex items-center space-x-2 border-b border-gray-200/70 dark:border-gray-800/70">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-3 text-xs text-gray-500 dark:text-gray-400">SOP Dashboard</div>
                  </div>
                  <div className="p-8 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-purple-950 min-h-[360px] flex items-center justify-center">
                    <div className="text-center max-w-sm">
                      <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <FileText className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        SOPs your team actually uses
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Generate, edit, assign, and track completion—all in one place.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 hidden lg:block"
                >
                  <div className="glass dark:glass-dark rounded-xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <Video className="w-7 h-7 text-primary-500" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Video in</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Upload or link</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 hidden lg:block"
                >
                  <div className="glass dark:glass-dark rounded-xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <CheckSquare className="w-7 h-7 text-green-500" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Tasks out</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Track completion</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Everything You Need to{" "}
                <span className="gradient-text">Automate SOPs</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                From video to documentation to execution. All in one platform.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              From messy video to polished SOP in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-gray-400 dark:text-gray-500">
                      0{index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose the plan that fits your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className={`h-full ${plan.featured ? 'ring-2 ring-primary-500' : ''}`}>
                  {plan.featured && (
                    <div className="bg-gradient-to-r from-primary-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                        <CheckSquare className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.featured ? 'primary' : 'outline'} 
                    className="w-full cursor-not-allowed opacity-50"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your SOPs?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join the waitlist and we’ll notify you when access opens.
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="bg-white text-primary-600 hover:bg-gray-100 cursor-not-allowed opacity-50"
              disabled
            >
              Coming Soon
              <Upload className="ml-2 w-5 h-5 text-primary-600" />
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/Logo.png" 
                  alt="Autopilot SOP" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm">
                Turn videos into executable SOPs your team actually follows.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#features" className="hover:text-white transition-colors">About</Link></li>
                <li>
                  <button
                    type="button"
                    className="hover:text-white transition-colors"
                    onClick={() => comingSoon("Signup")}
                  >
                    Get Started
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-white transition-colors"
                    onClick={() => comingSoon("Login")}
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>Autopilot SOP - Turn videos into executable SOPs</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
const features = [
  {
    icon: Upload,
    title: "Video Upload",
    description: "Upload training videos or paste a URL. Support for Loom, YouTube, and more.",
  },
  {
    icon: Sparkles,
    title: "AI Processing",
    description: "Auto transcription, step extraction, and screenshot generation powered by AI.",
  },
  {
    icon: Edit,
    title: "Drag & Drop Editor",
    description: "Beautiful editor to refine, reorder, and perfect your SOPs with ease.",
  },
  {
    icon: CheckSquare,
    title: "Executable Checklists",
    description: "Turn SOPs into tasks and checklists your team can follow step-by-step.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Assign tasks, track completion, and manage team access with roles.",
  },
  {
    icon: Share2,
    title: "Export & Share",
    description: "Export to PDF, Markdown, or share via public links with your team.",
  },
];

const steps = [
  {
    icon: Upload,
    title: "Upload Video",
    description: "Drop your training video or paste a link",
  },
  {
    icon: Sparkles,
    title: "AI Processes",
    description: "Auto-generates steps and screenshots",
  },
  {
    icon: Edit,
    title: "Edit & Refine",
    description: "Polish your SOP in our beautiful editor",
  },
  {
    icon: CheckSquare,
    title: "Execute & Track",
    description: "Assign tasks and track completion",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for solopreneurs and small teams",
    features: [
      "Up to 25 SOPs",
      "5 GB storage",
      "Basic AI features",
      "PDF export",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: 79,
    description: "Best for growing businesses",
    features: [
      "Unlimited SOPs",
      "50 GB storage",
      "Advanced AI features",
      "All export options",
      "Priority support",
      "Team collaboration",
      "Custom branding",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Advanced permissions",
      "SSO authentication",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
    ],
    featured: false,
  },
];

const faqs = [
  {
    question: "How does the AI video processing work?",
    answer: "Our AI analyzes your video, transcribes the audio, identifies key steps, and automatically extracts screenshots at important moments. You can then edit and refine everything in our editor.",
  },
  {
    question: "Can I edit the generated SOPs?",
    answer: "Absolutely! Our drag-and-drop editor lets you add, remove, reorder steps, edit text, add images, and customize everything to match your exact process.",
  },
  {
    question: "What video formats do you support?",
    answer: "We support all major video formats (MP4, MOV, AVI, etc.) and can also process videos from URLs like Loom, YouTube, Vimeo, and more.",
  },
  {
    question: "How does team collaboration work?",
    answer: "You can invite team members with different roles (Owner, Editor, Viewer), assign SOPs as tasks, set due dates, and track completion rates in real-time.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express) and can accommodate annual billing for larger teams. All plans include access to every feature.",
  },
];


