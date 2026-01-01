"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Database, Lock, Eye, Trash2, Download, Mail, Globe } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Autopilot SOP
          </Link>
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Last updated: January 1, 2026
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              At Autopilot SOP, we take your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our service.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By using Autopilot SOP, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* What We Collect */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Information We Collect
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Account Information
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Email address</li>
                  <li>• Full name</li>
                  <li>• Company name (optional)</li>
                  <li>• Profile picture (optional)</li>
                  <li>• Password (encrypted and hashed)</li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Content You Create
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• SOPs (titles, descriptions, steps)</li>
                  <li>• Videos you upload (training videos)</li>
                  <li>• Tasks you create</li>
                  <li>• Team member invitations</li>
                  <li>• Custom AI prompts/instructions</li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Usage Information
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Login activity and timestamps</li>
                  <li>• Features you use</li>
                  <li>• Browser type and version</li>
                  <li>• Device information</li>
                  <li>• IP address</li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Payment Information (via Stripe)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  We use Stripe for payment processing. We do NOT store your credit card information on our servers.
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Stripe customer ID (reference only)</li>
                  <li>• Subscription status</li>
                  <li>• Billing history</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Data */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                How We Use Your Information
              </h2>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>Provide our service:</strong> Create your account, generate SOPs, store your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>AI processing:</strong> Transcribe videos and generate SOPs using OpenAI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>Communicate with you:</strong> Send important updates, support responses, and service notifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>Process payments:</strong> Handle subscriptions and billing through Stripe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>Improve our service:</strong> Analyze usage patterns to enhance features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>Security:</strong> Detect and prevent fraud or abuse</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Storage */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Where We Store Your Data
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Primary Database & Storage
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Provider:</strong> Supabase (powered by AWS)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Location:</strong> US-East-1 (Virginia, USA)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Stores:</strong> User accounts, SOPs, tasks, team data, video files
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  AI Processing
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Provider:</strong> OpenAI
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Location:</strong> US-based servers
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Data sent to OpenAI:</strong> Video audio/transcripts and optional custom instructions
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>NOT sent to OpenAI:</strong> Your name, email, company, or other personal identifiers
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Retention:</strong> 30 days, then automatically deleted per OpenAI's data retention policy
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Purpose:</strong> Audio transcription (Whisper API) and SOP text generation (GPT-4)
                </p>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-300 text-sm">
                    <strong>Important:</strong> Do not upload videos containing confidential personal information (SSNs, medical records, financial data) if you want to keep them out of AI processing. Only the audio and transcript are sent to OpenAI, not the video file itself.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Payment Processing
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Provider:</strong> Stripe
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Certification:</strong> PCI-DSS Level 1 compliant
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Note:</strong> We never see or store your credit card information
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                How We Protect Your Data
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Security Measures
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">🔒</span>
                    <span><strong>Encryption in transit:</strong> All data transmitted over HTTPS/TLS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">🔒</span>
                    <span><strong>Encryption at rest:</strong> Database encrypted with AES-256</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">🔒</span>
                    <span><strong>Password security:</strong> Hashed with bcrypt (never stored in plain text)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">🔒</span>
                    <span><strong>Row Level Security:</strong> Users can only access their own data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">🔒</span>
                    <span><strong>Regular backups:</strong> Automated daily backups of all data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">🔒</span>
                    <span><strong>Access control:</strong> Strict internal policies and role-based permissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">🔒</span>
                    <span><strong>Secure infrastructure:</strong> Hosted on enterprise-grade cloud services (AWS via Supabase)</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Data Breach Notification (Ohio Law Compliance)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In compliance with Ohio data breach notification laws (Ohio Revised Code § 1349.19 and § 1349.191), if we experience a data breach that compromises your personal information:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>We will notify you via email <strong>within 72 hours</strong> of discovering the breach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>We will describe what personal information was compromised</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>We will provide steps you can take to protect yourself</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>We will notify the Ohio Attorney General if the breach affects 1,000+ Ohio residents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>We will notify consumer reporting agencies if required by law</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>We will cooperate fully with law enforcement</span>
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 text-sm p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800">
                  <strong>Note:</strong> We maintain incident response procedures and security monitoring to detect and respond to breaches quickly. However, no system is 100% secure.
                </p>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Data Retention & Deletion
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  How Long We Keep Your Data
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>Account data:</strong> Until you delete your account</li>
                  <li>• <strong>SOPs & videos:</strong> Until you delete them or your account</li>
                  <li>• <strong>Tasks:</strong> Until you delete them or your account</li>
                  <li>• <strong>AI transcripts:</strong> 30 days (OpenAI policy), then deleted</li>
                  <li>• <strong>Login logs:</strong> 90 days</li>
                  <li>• <strong>Billing records:</strong> 7 years (tax law requirement)</li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Deleting Your Account
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  When you delete your account, the following happens immediately:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• All your SOPs are permanently deleted</li>
                  <li>• All your video files are removed from storage</li>
                  <li>• All your tasks are deleted</li>
                  <li>• All team invitations are revoked</li>
                  <li>• Your profile and account data are removed</li>
                  <li>• <strong>This cannot be undone</strong></li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Note: Billing records are retained for 7 years for tax compliance.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Your Rights
              </h2>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span><strong>Access:</strong> View all data we have about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span><strong>Correction:</strong> Update or correct your information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span><strong>Deletion:</strong> Request deletion of your account and data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span><strong>Export:</strong> Download a copy of all your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span><strong>Portability:</strong> Transfer your data to another service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span><strong>Objection:</strong> Opt out of marketing communications</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                To exercise any of these rights, contact us at: <strong className="text-blue-600 dark:text-blue-400">privacy@autopilotsop.com</strong>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Cookies & Tracking
            </h2>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>• Keep you logged in</li>
                <li>• Remember your preferences (theme, settings)</li>
                <li>• Analyze how you use our service (anonymized)</li>
                <li>• Improve performance and security</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                You can disable cookies in your browser settings, but this may affect functionality.
              </p>
            </div>
          </section>

          {/* Third Parties */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Third-Party Services
            </h2>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use the following trusted third-party services:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Supabase:</strong> Database and file storage
                  <br />
                  <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm">
                    View Supabase Privacy Policy →
                  </a>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">OpenAI:</strong> AI transcription and SOP generation
                  <br />
                  <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm">
                    View OpenAI Privacy Policy →
                  </a>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Stripe:</strong> Payment processing
                  <br />
                  <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm">
                    View Stripe Privacy Policy →
                  </a>
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Netlify:</strong> Website hosting
                  <br />
                  <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm">
                    View Netlify Privacy Policy →
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Children */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Children's Privacy
            </h2>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300">
                Autopilot SOP is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </div>
          </section>

          {/* Changes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Changes to This Policy
            </h2>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>• Sending you an email notification</li>
                <li>• Displaying a prominent notice in the app</li>
                <li>• Updating the "Last updated" date at the top of this page</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Your continued use of Autopilot SOP after changes are made constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Contact Us
              </h2>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-blue-200 dark:border-purple-900">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Email:</strong> <a href="mailto:privacy@autopilotsop.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">privacy@autopilotsop.com</a></p>
                <p><strong>Support:</strong> <a href="mailto:support@autopilotsop.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">support@autopilotsop.com</a></p>
                <p><strong>Response time:</strong> Within 30 days</p>
              </div>
            </div>
          </section>

          {/* GDPR/CCPA */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              GDPR, CCPA & State Privacy Rights
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  We Comply With:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>• <strong>GDPR</strong> (General Data Protection Regulation) - European Union</li>
                  <li>• <strong>CCPA</strong> (California Consumer Privacy Act) - California, USA</li>
                  <li>• <strong>Ohio Data Protection Laws</strong> - Ohio Revised Code § 1349.19 et seq.</li>
                  <li>• Other applicable state and federal data protection laws</li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  California Residents (CCPA Rights)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you are a California resident, you have additional rights:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>• <strong>Right to Know:</strong> What personal information we collect and how we use it</li>
                  <li>• <strong>Right to Delete:</strong> Request deletion of your personal information</li>
                  <li>• <strong>Right to Opt-Out:</strong> We do NOT sell your personal information (see below)</li>
                  <li>• <strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your rights</li>
                </ul>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-green-800 dark:text-green-300 font-semibold mb-2">
                    ✓ We Do NOT Sell Your Personal Information
                  </p>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    We do not sell, rent, or share your personal information with third parties for their marketing purposes. We only share data with service providers necessary to operate our service (Supabase, OpenAI, Stripe).
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  European Residents (GDPR Rights)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you are in the European Union, you have specific rights under GDPR:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>Right of Access:</strong> Request a copy of your data</li>
                  <li>• <strong>Right to Rectification:</strong> Correct inaccurate data</li>
                  <li>• <strong>Right to Erasure:</strong> Delete your data ("right to be forgotten")</li>
                  <li>• <strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                  <li>• <strong>Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
                  <li>• <strong>Right to Object:</strong> Object to certain data processing</li>
                  <li>• <strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4 text-sm">
                  Contact us at privacy@autopilotsop.com to exercise any of these rights. We will respond within 30 days.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              This Privacy Policy was last updated on January 1, 2026.
            </p>
            <Link
              href="/terms"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
            >
              View Terms of Service →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
