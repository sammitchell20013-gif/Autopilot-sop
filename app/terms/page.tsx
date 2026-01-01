"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, AlertCircle, CreditCard, UserX, Shield, Scale } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Last updated: January 1, 2026
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Welcome to Autopilot SOP! These Terms of Service ("Terms") govern your use of our service. By creating an account or using Autopilot SOP, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Please read these Terms carefully. If you do not agree with these Terms, do not use our service.
            </p>
          </section>

          {/* Definitions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              1. Definitions
            </h2>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>"Service"</strong> refers to the Autopilot SOP platform, including the website, application, and all related services.</li>
                <li><strong>"User," "you," "your"</strong> refers to the person or entity using the Service.</li>
                <li><strong>"We," "us," "our"</strong> refers to Autopilot SOP and its operators.</li>
                <li><strong>"Content"</strong> refers to SOPs, videos, text, images, and other materials you create or upload.</li>
                <li><strong>"Account"</strong> refers to your user account on the Service.</li>
              </ul>
            </div>
          </section>

          {/* Account Registration */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <UserX className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                2. Account Registration
              </h2>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To use Autopilot SOP, you must create an account. When creating an account:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• You must be at least 13 years old</li>
                <li>• You must provide accurate and complete information</li>
                <li>• You are responsible for maintaining the security of your password</li>
                <li>• You are responsible for all activity that occurs under your account</li>
                <li>• You must not share your account credentials with others</li>
                <li>• One person or entity per account (no shared accounts)</li>
                <li>• You must not create multiple accounts to evade restrictions</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </div>
          </section>

          {/* Acceptable Use */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                3. Acceptable Use Policy
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  You agree NOT to:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Upload illegal, offensive, or harmful content</li>
                  <li>• Violate any laws or regulations</li>
                  <li>• Infringe on intellectual property rights</li>
                  <li>• Upload malware, viruses, or malicious code</li>
                  <li>• Attempt to hack, disrupt, or reverse engineer the Service</li>
                  <li>• Use the Service for spam or unauthorized marketing</li>
                  <li>• Impersonate others or misrepresent your affiliation</li>
                  <li>• Scrape or collect data from the Service without permission</li>
                  <li>• Use the Service to compete with us or build a similar product</li>
                  <li>• Share or resell access to the Service</li>
                </ul>
              </div>

              <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 dark:text-red-400 mb-2">
                      Violation Consequences
                    </h3>
                    <p className="text-red-800 dark:text-red-300 text-sm">
                      Violation of these policies may result in immediate suspension or termination of your account without refund.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Subscription & Billing */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                4. Subscription & Billing
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Subscription Plans
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>• We offer multiple subscription tiers (Starter, Pro, Enterprise)</li>
                  <li>• Subscriptions are billed monthly or annually in advance</li>
                  <li>• Pricing is displayed on our website and may change with notice</li>
                  <li>• All fees are in USD unless otherwise stated</li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Payment
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Payment is processed through Stripe</li>
                  <li>• You must provide valid payment information</li>
                  <li>• You authorize us to charge your payment method automatically</li>
                  <li>• If payment fails, your account may be suspended</li>
                  <li>• You are responsible for all taxes</li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Renewals & Cancellations
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>• Subscriptions automatically renew unless canceled</li>
                  <li>• You can cancel anytime from your account settings</li>
                  <li>• Cancellations take effect at the end of the current billing period</li>
                  <li>• No refunds for partial months or unused time</li>
                  <li>• After cancellation, you retain access until the period ends</li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Refund Policy
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We offer a <strong>14-day money-back guarantee</strong> for first-time subscribers.
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Request a refund within 14 days of your first payment</li>
                  <li>• Refunds are not available for renewals</li>
                  <li>• Refunds are not available if your account was terminated for violations</li>
                  <li>• Contact support@autopilotsop.com to request a refund</li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Price Changes
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We may change our pricing at any time. If we increase the price of your subscription, we will notify you at least 30 days in advance. The new price will apply at your next renewal. If you do not agree to the price change, you may cancel your subscription.
                </p>
              </div>
            </div>
          </section>

          {/* Your Content */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                5. Your Content & Intellectual Property
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Ownership
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>You own your content.</strong> You retain all rights to the SOPs, videos, and other materials you create or upload.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  By using the Service, you grant us a limited license to store, process, and display your content solely to provide the Service to you.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Content Responsibility
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>• You are solely responsible for your content</li>
                  <li>• <strong>You represent and warrant</strong> that you own all rights to your content or have obtained all necessary licenses, permissions, and consents</li>
                  <li>• You represent that your content does not infringe on any third-party intellectual property rights, privacy rights, publicity rights, or other legal rights</li>
                  <li>• You will not upload content that violates copyright, trademark, patent, trade secret, or other proprietary rights</li>
                  <li>• We are not responsible for any loss or corruption of your content</li>
                  <li>• You should maintain your own backups of all important content</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800">
                  <strong>Copyright Notice:</strong> If you believe content on our Service infringes your copyright, contact us at legal@autopilotsop.com with details per the DMCA process (see section 5.5 below).
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  AI-Generated Content
                </h3>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 mb-4">
                  <p className="text-red-800 dark:text-red-300 font-semibold mb-2">
                    ⚠️ CRITICAL: AI Content Requires Human Review
                  </p>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    AI-generated SOPs are NOT guaranteed to be accurate, complete, or safe. They may contain errors, omissions, or dangerous instructions.
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  When you use our AI features to generate SOPs:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>• <strong>You must review and verify</strong> all AI-generated content before use</li>
                  <li>• <strong>You are solely responsible</strong> for ensuring accuracy and safety</li>
                  <li>• We do NOT guarantee quality, accuracy, completeness, or safety</li>
                  <li>• AI outputs may be incorrect, incomplete, biased, or harmful</li>
                  <li>• Never use AI-generated SOPs for safety-critical, medical, legal, or financial decisions without expert review</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                  NO PROFESSIONAL ADVICE:
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  AI-generated content does not constitute professional advice of any kind (medical, legal, financial, safety, or otherwise). Consult qualified professionals for specific guidance in your situation.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Our Intellectual Property
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Service itself, including the website, logo, design, code, and features, are owned by us and protected by copyright, trademark, and other laws.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  You may not copy, modify, distribute, or reverse engineer any part of the Service without our written permission.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  DMCA Copyright Takedown Procedure
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We respect intellectual property rights. If you believe content on our Service infringes your copyright, send a DMCA notice to:
                </p>
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded mb-4">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Email:</strong> legal@autopilotsop.com<br />
                    <strong>Subject Line:</strong> "DMCA Takedown Request"
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Your notice must include:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm mb-4">
                  <li>• Your physical or electronic signature</li>
                  <li>• Identification of the copyrighted work claimed to be infringed</li>
                  <li>• Identification of the infringing material and its location on our Service</li>
                  <li>• Your contact information (address, phone, email)</li>
                  <li>• A statement that you have a good faith belief the use is not authorized</li>
                  <li>• A statement under penalty of perjury that the information is accurate and you are authorized to act</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  We will investigate valid DMCA notices and may remove or disable access to allegedly infringing content. Repeat infringers will have their accounts terminated.
                </p>
              </div>
            </div>
          </section>

          {/* Service Availability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              6. Service Availability, Security & Data Breaches
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Service Availability
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• We strive for 99.9% uptime but do not guarantee uninterrupted access</li>
                  <li>• We may perform scheduled maintenance that temporarily affects availability</li>
                  <li>• We may modify, suspend, or discontinue features at any time with reasonable notice</li>
                  <li>• We will notify you of major changes when possible</li>
                  <li>• We are not liable for any downtime or service interruptions beyond our reasonable control</li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Data Security
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We implement reasonable security measures to protect your data, including:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>• Encryption in transit (TLS/SSL)</li>
                  <li>• Encryption at rest (AES-256)</li>
                  <li>• Row-level security controls</li>
                  <li>• Regular security audits</li>
                  <li>• Access controls and authentication</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  However, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Data Breach Notification
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In the event of a data breach that compromises your personal information:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• We will notify you via email within 72 hours of discovering the breach</li>
                  <li>• We will describe the nature of the breach and data affected</li>
                  <li>• We will provide steps you can take to protect yourself</li>
                  <li>• We will report to relevant authorities as required by Ohio law (Ohio Revised Code § 1349.19 and § 1349.191)</li>
                  <li>• We will cooperate with law enforcement as necessary</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              7. Disclaimer of Warranties
            </h2>
            <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
              <p className="text-gray-700 dark:text-gray-300 mb-4 uppercase font-semibold">
                Important Legal Notice:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                <li>• Any warranties regarding accuracy, reliability, or quality of the Service</li>
                <li>• Any warranties that the Service will be uninterrupted, secure, or error-free</li>
                <li>• Any warranties regarding AI-generated content quality or accuracy</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4 text-sm">
                You use the Service at your own risk. We recommend reviewing all AI-generated SOPs before using them in production.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              8. Limitation of Liability
            </h2>
            <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
              <p className="text-gray-700 dark:text-gray-300 mb-4 uppercase font-semibold">
                Important Legal Notice:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm mb-4">
                <li>• Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>• Loss of profits, revenue, data, or use</li>
                <li>• Business interruption</li>
                <li>• Damage to reputation</li>
                <li>• Cost of substitute services</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                OUR TOTAL LIABILITY FOR ANY CLAIMS RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRIOR TO THE CLAIM.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of the above may not apply to you.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              9. Indemnification
            </h2>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You agree to indemnify, defend, and hold harmless Autopilot SOP and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Your use of the Service</li>
                <li>• Your violation of these Terms</li>
                <li>• Your violation of any third-party rights</li>
                <li>• Your content uploaded to the Service</li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              10. Termination
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  You May Terminate
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You may cancel your account at any time from your account settings. Upon cancellation, your access will continue until the end of your current billing period, after which your account and data will be deleted.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  We May Terminate
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We reserve the right to suspend or terminate your account at any time, with or without notice, for:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Violation of these Terms</li>
                  <li>• Violation of applicable laws</li>
                  <li>• Fraudulent, abusive, or harmful behavior</li>
                  <li>• Non-payment</li>
                  <li>• Any other reason at our discretion</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  No refunds will be provided for accounts terminated for violations.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Effect of Termination
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Upon termination of your account:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Your access to the Service will immediately cease</li>
                  <li>• All your data will be deleted within 30 days</li>
                  <li>• You will not receive refunds for unused time</li>
                  <li>• You may not create a new account if terminated for violations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              11. Governing Law & Disputes
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Governing Law
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  These Terms are governed by the laws of the State of Ohio and the United States, without regard to conflict of law principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Binding Arbitration
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Any dispute, claim, or controversy arising out of or relating to these Terms or the Service shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules.
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>• The arbitration shall take place in Ohio</li>
                  <li>• The arbitrator's decision is final and binding</li>
                  <li>• Each party bears their own costs unless the arbitrator decides otherwise</li>
                  <li>• The arbitration shall be confidential</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Exceptions to Arbitration:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Either party may bring claims in small claims court (if eligible)</li>
                  <li>• Either party may seek injunctive or equitable relief in court</li>
                  <li>• Claims of intellectual property infringement may be brought in court</li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Class Action Waiver
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  YOU AND AUTOPILOT SOP AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Unless both you and we agree otherwise, the arbitrator may not consolidate more than one person's claims and may not otherwise preside over any form of representative or class proceeding.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Venue
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If arbitration does not apply, you agree that any legal action shall be brought exclusively in the state or federal courts located in Ohio, and you consent to the personal jurisdiction of such courts.
                </p>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              12. Changes to These Terms
            </h2>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may update these Terms from time to time. We will notify you of material changes by:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>• Sending you an email</li>
                <li>• Displaying a notice in the app</li>
                <li>• Updating the "Last updated" date at the top of this page</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Your continued use of the Service after changes are made constitutes acceptance of the updated Terms. If you do not agree to the changes, you must stop using the Service and cancel your account.
              </p>
            </div>
          </section>

          {/* Miscellaneous */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              13. Miscellaneous
            </h2>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us.</li>
                <li><strong>Severability:</strong> If any provision is found invalid, the remaining provisions remain in effect.</li>
                <li><strong>No Waiver:</strong> Our failure to enforce any right does not waive that right.</li>
                <li><strong>Assignment:</strong> You may not assign these Terms without our consent. We may assign these Terms at any time.</li>
                <li><strong>Force Majeure:</strong> We are not liable for delays or failures caused by events beyond our reasonable control.</li>
                <li><strong>Export Compliance:</strong> You agree to comply with all export laws and restrictions.</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              14. Contact Us
            </h2>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-purple-200 dark:border-purple-900">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Email:</strong> <a href="mailto:legal@autopilotsop.com" className="text-purple-600 hover:text-purple-700 dark:text-purple-400">legal@autopilotsop.com</a></p>
                <p><strong>Support:</strong> <a href="mailto:support@autopilotsop.com" className="text-purple-600 hover:text-purple-700 dark:text-purple-400">support@autopilotsop.com</a></p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              These Terms of Service were last updated on January 1, 2026.
            </p>
            <Link
              href="/privacy"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 font-medium"
            >
              View Privacy Policy →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
