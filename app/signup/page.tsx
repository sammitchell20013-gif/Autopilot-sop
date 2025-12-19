"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Building, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Card from "@/components/ui/card";
import { signUp } from "@/lib/supabase/auth";
import { signInWithGoogle } from "@/lib/supabase/oauth";
import { acceptTeamInvite } from "@/lib/supabase/invites";

function SignupContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleGoogleSignup = async () => {
    setGoogleLoading(true);
    setError("");
    
    const result = await signInWithGoogle();
    
    if (!result.success) {
      setError(result.error || "Google sign-in failed. Please try again.");
      setGoogleLoading(false);
    }
    // If successful, Supabase will redirect automatically
  };

  const validatePassword = (password: string) => {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasMinLength = password.length >= 8;
    
    return {
      hasLowerCase,
      hasUpperCase,
      hasDigit,
      hasMinLength,
      isValid: hasLowerCase && hasUpperCase && hasDigit && hasMinLength
    };
  };

  const passwordValidation = validatePassword(formData.password);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy");
      return;
    }
    
    // Client-side password validation
    if (!passwordValidation.isValid) {
      setError("Please ensure your password meets all requirements");
      return;
    }
    
    setLoading(true);
    setError("");
    
    // Real signup with Supabase!
    const result = await signUp(
      formData.email,
      formData.password,
      formData.name,
      formData.company
    );
    
    if (result.success) {
      // Check if there's a pending team invite
      const inviteId = searchParams.get('invite');
      const inviteEmail = searchParams.get('email');
      
      if (inviteId && inviteEmail) {
        // Accept the team invitation
        await acceptTeamInvite(inviteId, inviteEmail);
      }
      
      // Signup successful - redirect to dashboard
      router.push("/app/dashboard");
    } else {
      // Show error message
      setError(result.error || "Signup failed. Please try again.");
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        className="w-full max-w-md relative z-10"
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
            Create Your Account
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Choose a plan and get started today
          </p>
        </div>

        {/* Signup Form */}
        <Card glass className="backdrop-blur-xl">
          {error && (
            <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSignup} className="space-y-5">
            <Input
              type="text"
              name="name"
              label="Full Name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              icon={<User className="w-5 h-5" />}
              required
            />

            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              icon={<Mail className="w-5 h-5" />}
              required
            />

            <Input
              type="text"
              name="company"
              label="Company Name"
              placeholder="Acme Inc."
              value={formData.company}
              onChange={handleChange}
              icon={<Building className="w-5 h-5" />}
              required
            />

            <div>
              <Input
                type="password"
                name="password"
                label="Password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                icon={<Lock className="w-5 h-5" />}
                required
              />
              
              {/* Password Requirements */}
              {(passwordFocused || formData.password) && (
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Password must contain:</p>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs">
                      {passwordValidation.hasMinLength ? (
                        <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-600 mr-2">○</span>
                      )}
                      <span className={passwordValidation.hasMinLength ? "text-green-600 dark:text-green-400" : "text-gray-600 dark:text-gray-400"}>
                        At least 8 characters
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      {passwordValidation.hasLowerCase ? (
                        <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-600 mr-2">○</span>
                      )}
                      <span className={passwordValidation.hasLowerCase ? "text-green-600 dark:text-green-400" : "text-gray-600 dark:text-gray-400"}>
                        One lowercase letter (a-z)
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      {passwordValidation.hasUpperCase ? (
                        <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-600 mr-2">○</span>
                      )}
                      <span className={passwordValidation.hasUpperCase ? "text-green-600 dark:text-green-400" : "text-gray-600 dark:text-gray-400"}>
                        One uppercase letter (A-Z)
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      {passwordValidation.hasDigit ? (
                        <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-600 mr-2">○</span>
                      )}
                      <span className={passwordValidation.hasDigit ? "text-green-600 dark:text-green-400" : "text-gray-600 dark:text-gray-400"}>
                        One number (0-9)
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Terms and Privacy Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreedToTerms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                required
              />
              <label htmlFor="agreedToTerms" className="text-sm text-gray-600 dark:text-gray-400">
                I agree to the{" "}
                <Link href="/terms" target="_blank" className="text-primary-600 hover:text-primary-700 underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" target="_blank" className="text-primary-600 hover:text-primary-700 underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full group"
              disabled={loading || !agreedToTerms}
            >
              {loading ? "Creating Account..." : "Create Account"}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Signup */}
          <div>
            <Button 
              type="button"
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 border-2"
              onClick={handleGoogleSignup}
              disabled={googleLoading}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              {googleLoading ? "Connecting to Google..." : "Continue with Google"}
            </Button>
          </div>
        </Card>

        {/* Login Link */}
        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-semibold"
          >
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <Loader2 className="w-12 h-12 text-primary-500 animate-spin mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Loading...
          </h1>
        </Card>
      </div>
    }>
      <SignupContent />
    </Suspense>
  );
}

