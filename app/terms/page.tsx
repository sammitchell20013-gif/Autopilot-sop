"use client";

import { motion } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function TermsOfServicePage() {
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
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Terms of Service
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using Autopilot SOP ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
                If you disagree with any part of these terms, you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Description of Service</h2>
              <p>
                Autopilot SOP provides AI-powered tools to convert training videos into structured Standard Operating Procedures (SOPs). 
                The Service includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Video upload and storage</li>
                <li>AI-powered transcription using OpenAI Whisper</li>
                <li>AI-generated SOP creation using GPT-4</li>
                <li>SOP management and editing tools</li>
                <li>Task assignment and tracking</li>
                <li>Team collaboration features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. User Accounts</h2>
              <p>
                To use the Service, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your password</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
              <p className="mt-4">
                You must be at least 18 years old to use this Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Content Ownership and Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">4.1 Your Content</h3>
              <p>
                You retain all rights to the videos, SOPs, and other content you upload or create using the Service ("Your Content"). 
                By uploading content, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You own all rights to Your Content or have obtained all necessary permissions</li>
                <li>Your Content does not infringe on any third-party rights</li>
                <li>Your Content does not violate any laws or regulations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">4.2 License to Process</h3>
              <p>
                By uploading content, you grant us a limited, non-exclusive license to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Store Your Content on our servers</li>
                <li>Process Your Content using AI services (OpenAI)</li>
                <li>Generate SOPs and other derivative works from Your Content</li>
                <li>Display Your Content back to you and authorized team members</li>
              </ul>
              <p className="mt-4">
                This license exists solely to provide the Service and ends when you delete Your Content or close your account.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">4.3 AI-Generated Content</h3>
              <p>
                The Service uses artificial intelligence to generate SOPs from your videos. You own all AI-generated content created from Your Content. 
                We make no claims to ownership of AI-generated SOPs created through the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. Acceptable Use</h2>
              <p>
                You agree NOT to use the Service to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Upload content you don't have rights to use</li>
                <li>Upload copyrighted material without permission</li>
                <li>Violate any laws or regulations</li>
                <li>Harass, abuse, or harm others</li>
                <li>Upload malicious code, viruses, or harmful content</li>
                <li>Attempt to bypass security measures</li>
                <li>Use the Service for illegal activities</li>
                <li>Scrape or collect data from the Service</li>
                <li>Impersonate others or misrepresent your affiliation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. Subscription and Payments</h2>
              <p>
                Some features of the Service require a paid subscription. By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pay all fees associated with your chosen plan</li>
                <li>Provide accurate billing information</li>
                <li>Authorize automatic recurring charges (if applicable)</li>
              </ul>
              <p className="mt-4">
                We reserve the right to change pricing with 30 days notice. You may cancel your subscription at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. Third-Party Services</h2>
              <p>
                The Service uses third-party services including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>OpenAI:</strong> For AI transcription and content generation</li>
                <li><strong>Supabase:</strong> For data storage and authentication</li>
                <li><strong>Google:</strong> For OAuth authentication (optional)</li>
              </ul>
              <p className="mt-4">
                Your use of these services is subject to their respective terms and policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. Data and Privacy</h2>
              <p>
                Your privacy is important to us. Please review our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> to 
                understand how we collect, use, and protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">9. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>That the Service will be uninterrupted or error-free</li>
                <li>That AI-generated content will be accurate or complete</li>
                <li>That the Service will meet your specific requirements</li>
                <li>That all bugs or errors will be corrected</li>
              </ul>
              <p className="mt-4">
                You are responsible for reviewing and verifying all AI-generated content before use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">10. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any indirect, incidental, or consequential damages</li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>Damages arising from your use of the Service</li>
                <li>Errors or inaccuracies in AI-generated content</li>
              </ul>
              <p className="mt-4">
                Our total liability shall not exceed the amount you paid us in the last 12 months, or $100, whichever is greater.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">11. Indemnification</h2>
              <p>
                You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your Content or use of the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">12. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without notice, for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Non-payment of fees</li>
                <li>Any reason at our sole discretion</li>
              </ul>
              <p className="mt-4">
                You may delete your account at any time from the Settings page. Upon termination, your right to use the Service immediately ceases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of significant changes via email or through the Service. 
                Your continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">14. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of the United States, without regard to conflict of law principles. 
                Any disputes shall be resolved in the courts of the applicable jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">15. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> autopilotsophelp@gmail.com<br />
                <strong>Website:</strong> https://autopilotsop.com
              </p>
            </section>

            <section className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm">
                <strong>Summary in Plain English:</strong> You own your content. We process it to create SOPs. 
                Don't upload stuff you don't have rights to. Use the Service responsibly. We're not liable for AI mistakes. 
                You can cancel anytime. Be cool, we'll be cool. 🤝
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

