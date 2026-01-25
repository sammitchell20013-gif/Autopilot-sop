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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. Content Policy and Moderation</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5.1 Prohibited Content</h3>
              <p>
                You agree NOT to upload, create, or generate content that contains, promotes, or facilitates:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Illegal Activities:</strong> Content that violates any applicable local, state, national, or international law</li>
                <li><strong>Hate Speech:</strong> Content that promotes hatred or violence against individuals or groups based on race, ethnicity, religion, gender, sexual orientation, disability, or other protected characteristics</li>
                <li><strong>Harassment or Bullying:</strong> Content intended to harass, threaten, intimidate, or abuse others</li>
                <li><strong>Violence or Harm:</strong> Content depicting, promoting, or providing instructions for violence, self-harm, or harm to others</li>
                <li><strong>Sexual Content:</strong> Pornographic, sexually explicit content, or content involving minors in any sexual context</li>
                <li><strong>Dangerous Activities:</strong> Instructions for creating weapons, explosives, drugs, or other dangerous materials</li>
                <li><strong>Misinformation:</strong> Content deliberately designed to spread false or misleading information that could cause harm</li>
                <li><strong>Spam or Malware:</strong> Malicious code, viruses, or unsolicited commercial content</li>
                <li><strong>Intellectual Property Violations:</strong> Copyrighted material, trademarks, or other protected intellectual property without authorization</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5.2 Content Moderation</h3>
              <p>
                We use automated content moderation systems (including OpenAI's Moderation API) to detect prohibited content. By using the Service, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your uploaded videos will be transcribed and the transcripts will be scanned for policy violations</li>
                <li>Your text prompts and descriptions will be scanned for policy violations before processing</li>
                <li>Content flagged by our moderation systems will be blocked and not processed</li>
                <li>We reserve the right to review, remove, or refuse to process any content at our sole discretion</li>
                <li>Repeated violations may result in account suspension or termination without refund</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5.3 Your Sole Responsibility</h3>
              <p className="font-semibold">
                YOU ARE SOLELY RESPONSIBLE FOR ALL CONTENT YOU UPLOAD, CREATE, OR GENERATE USING THE SERVICE.
              </p>
              <p className="mt-4">
                We are a technology platform that provides tools for creating SOPs. We do not review, endorse, or assume responsibility for user-generated content. 
                You bear all legal and ethical responsibility for ensuring your content complies with applicable laws and does not harm others.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">5.4 Reporting Violations</h3>
              <p>
                If you become aware of content that violates this policy, please report it to: <a href="mailto:autopilotsop@gmail.com" className="text-blue-600 hover:underline">autopilotsop@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. Acceptable Use</h2>
              <p>
                In addition to the Content Policy above, you agree NOT to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Attempt to bypass or circumvent content moderation systems</li>
                <li>Use the Service to create content that violates third-party rights</li>
                <li>Attempt to reverse engineer, decompile, or extract source code from the Service</li>
                <li>Use the Service for any automated or high-volume purpose without permission</li>
                <li>Scrape, crawl, or collect data from the Service using automated means</li>
                <li>Impersonate others or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Attempt to gain unauthorized access to the Service or user accounts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. Subscription and Payments</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. Third-Party Services</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">9. Data and Privacy</h2>
              <p>
                Your privacy is important to us. Please review our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> to 
                understand how we collect, use, and protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">10. Disclaimer of Warranties</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">11. Limitation of Liability</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">12. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Autopilot SOP, its owners, operators, employees, and service providers from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use or misuse of the Service</li>
                <li>Your violation of these Terms of Service</li>
                <li>Your violation of any rights of another party, including intellectual property rights</li>
                <li>Your Content, including any claims that Your Content infringes, violates, or misappropriates third-party rights</li>
                <li>Any content you create, upload, or generate using the Service</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Any harm caused by SOPs, instructions, or procedures you create using the Service</li>
              </ul>
              <p className="mt-4 font-semibold">
                This indemnification obligation will survive termination of your account and these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">13. Account Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice, for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violation of these Terms of Service</li>
                <li>Violation of our Content Policy</li>
                <li>Repeated upload of prohibited content</li>
                <li>Fraudulent, illegal, or abusive activity</li>
                <li>Non-payment of fees</li>
                <li>Any reason at our sole discretion to protect the Service or other users</li>
              </ul>
              <p className="mt-4">
                You may delete your account at any time from the Settings page. Upon termination, your right to use the Service immediately ceases. 
                We may, but are not obligated to, delete your content after account termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">14. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of significant changes via email or through the Service. 
                Your continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">15. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by the laws of the United States, without regard to conflict of law principles. 
                Any disputes shall be resolved in the courts of the applicable jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">16. Contact Us</h2>
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
                <strong>Summary in Plain English:</strong> You own your content. We process it with AI to create SOPs. 
                Don't upload illegal, harmful, or prohibited content—our moderation systems will block it. Don't upload stuff you don't have rights to. 
                You're responsible for everything you create. We're not liable for AI mistakes or how you use the SOPs. 
                You can cancel anytime. Be cool, we'll be cool. 🤝
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

