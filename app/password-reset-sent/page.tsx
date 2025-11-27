"use client";

import { motion } from "framer-motion";
import { Mail, CheckCircle, Home, ArrowRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function PasswordResetSentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center mb-4">
            <img 
              src="/logo.png" 
              alt="Autopilot SOP" 
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Main Card */}
        <Card glass className="backdrop-blur-xl text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Mail className="w-10 h-10 text-green-600 dark:text-green-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Check Your Email
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
          >
            We've sent a password reset link to your email address.
          </motion.p>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 text-left"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              Next Steps:
            </h2>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Check your inbox
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Look for an email from Autopilot SOP
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Click the reset link
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    The link will expire in 1 hour for security
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Create new password
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Enter your new password and confirm it
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  ✓
                </span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    You're all set!
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Log in with your new password
                  </p>
                </div>
              </li>
            </ol>
          </motion.div>

          {/* Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8"
          >
            <p className="text-sm text-yellow-700 dark:text-yellow-400">
              💡 <strong>Tip:</strong> If you don't see the email, check your spam or junk folder
            </p>
          </motion.div>

          {/* Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link href="/">
              <Button variant="primary" size="lg" className="group">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </Card>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6 space-y-2"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Didn't receive the email?{" "}
            <Link
              href="/app/settings"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-semibold"
            >
              Try again
            </Link>
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Need help?{" "}
            <Link
              href="/login"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-semibold"
            >
              Back to Login
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

