"use client";

import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Privacy Policy
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Introduction</h2>
              <p>
                Autopilot SOP ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, store, and protect your information when you use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, password, company name</li>
                <li><strong>Payment Information:</strong> Billing details (processed securely by Stripe)</li>
                <li><strong>Profile Data:</strong> Profile information, preferences, settings</li>
                <li><strong>Content:</strong> Videos, SOPs, tasks, notes, and other content you create</li>
                <li><strong>Communications:</strong> Messages you send to us or through the Service</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Usage Data:</strong> Pages viewed, features used, time spent</li>
                <li><strong>Device Information:</strong> Browser type, operating system, device identifiers</li>
                <li><strong>Log Data:</strong> IP address, access times, error logs</li>
                <li><strong>Cookies:</strong> Session cookies for authentication and preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">2.3 Third-Party Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>OAuth Data:</strong> If you sign in with Google, we receive your name, email, and profile picture</li>
                <li><strong>Analytics:</strong> Aggregated usage statistics (if applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. How We Use Your Information</h2>
              <p>
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Provide the Service:</strong> Process videos, generate SOPs, store your data</li>
                <li><strong>AI Processing:</strong> Send your videos to OpenAI for transcription and analysis</li>
                <li><strong>Account Management:</strong> Create and maintain your account</li>
                <li><strong>Communication:</strong> Send service updates, support responses, important notices</li>
                <li><strong>Billing:</strong> Process payments and manage subscriptions</li>
                <li><strong>Improvements:</strong> Analyze usage to improve the Service</li>
                <li><strong>Security:</strong> Detect and prevent fraud, abuse, and security issues</li>
                <li><strong>Legal Compliance:</strong> Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Third-Party Services</h2>
              <p>
                We use the following third-party services that may access your data:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">4.1 OpenAI</h3>
              <p>
                We send your videos to OpenAI for AI processing (transcription and SOP generation). 
                OpenAI's data usage is governed by their <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Videos are processed but not used to train OpenAI models</li>
                <li>OpenAI retains data for 30 days for abuse monitoring</li>
                <li>After 30 days, your data is deleted from OpenAI's systems</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">4.2 Supabase</h3>
              <p>
                We use Supabase for data storage, authentication, and file hosting. 
                Supabase's practices are governed by their <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">4.3 Stripe</h3>
              <p>
                Payment processing is handled by Stripe. We do not store your full credit card information. 
                Stripe's practices are governed by their <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">4.4 Google OAuth</h3>
              <p>
                If you sign in with Google, we receive limited information from Google (name, email, profile picture) 
                as permitted by Google's OAuth policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. Data Storage and Security</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5.1 Where We Store Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Supabase (US):</strong> Account data, SOPs, tasks, profile information</li>
                <li><strong>Supabase Storage:</strong> Uploaded videos and files</li>
                <li><strong>OpenAI (US):</strong> Temporary processing (30 days)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5.2 Security Measures</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Industry-standard encryption (HTTPS/TLS)</li>
                <li>Secure password hashing</li>
                <li>Regular security updates</li>
                <li>Access controls and authentication</li>
                <li>Secure third-party services (SOC 2 compliant)</li>
              </ul>

              <p className="mt-4">
                However, no method of transmission over the internet is 100% secure. 
                We cannot guarantee absolute security of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. Data Retention</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Active Accounts:</strong> We retain your data as long as your account is active</li>
                <li><strong>Deleted Accounts:</strong> Data is permanently deleted within 30 days of account deletion</li>
                <li><strong>Backups:</strong> Backup copies may persist for up to 90 days</li>
                <li><strong>Legal Requirements:</strong> Some data may be retained longer if required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. Your Rights and Choices</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">7.1 Access and Control</h3>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> View your personal data</li>
                <li><strong>Update:</strong> Correct or update your information in Settings</li>
                <li><strong>Delete:</strong> Delete your account and all associated data</li>
                <li><strong>Export:</strong> Request a copy of your data</li>
                <li><strong>Object:</strong> Object to certain processing of your data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">7.2 Communication Preferences</h3>
              <p>You can:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unsubscribe from marketing emails (we send very few)</li>
                <li>Control notification settings in your account</li>
                <li>Note: Some service-related communications cannot be opted out</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">7.3 Cookies</h3>
              <p>
                We use essential cookies for authentication and functionality. You can disable cookies in your browser, 
                but this may affect Service functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. Children's Privacy</h2>
              <p>
                Our Service is not directed to individuals under 18. We do not knowingly collect personal information from children. 
                If you believe a child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">9. International Users (GDPR)</h2>
              <p>
                If you are in the European Economic Area (EEA), you have additional rights under GDPR:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of your data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li><strong>Right to Restriction:</strong> Request limited processing of your data</li>
                <li><strong>Right to Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Right to Object:</strong> Object to processing of your data</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at autopilotsophelp@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">10. California Privacy Rights (CCPA)</h2>
              <p>
                If you are a California resident, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Know what personal information we collect and how we use it</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of the sale of your personal information (we don't sell your data)</li>
                <li>Non-discrimination for exercising your rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">11. Data Sharing</h2>
              <p>
                We DO NOT sell your personal data. We only share data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>With Your Consent:</strong> When you explicitly agree</li>
                <li><strong>Service Providers:</strong> OpenAI, Supabase, Stripe (to provide the Service)</li>
                <li><strong>Team Members:</strong> SOPs and content you explicitly share with your team</li>
                <li><strong>Legal Requirements:</strong> If required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In case of merger or acquisition (with notice)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">12. Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes via email or 
                through the Service. Your continued use after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">13. Contact Us</h2>
              <p>
                For privacy-related questions or to exercise your rights:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> autopilotsophelp@gmail.com<br />
                <strong>Support:</strong> autopilotsophelp@gmail.com<br />
                <strong>Website:</strong> https://autopilotsop.com
              </p>
            </section>

            <section className="mt-12 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm">
                <strong>Privacy in Plain English:</strong> We collect your account info and videos. We use OpenAI to process videos. 
                We don't sell your data. You can delete your account anytime (all data gone). We use secure, trusted services. 
                Your videos are yours. We're just processing them for you. 🔒
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

