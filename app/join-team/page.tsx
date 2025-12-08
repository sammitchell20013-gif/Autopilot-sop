"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import Card from "@/components/ui/card";

// Force dynamic rendering since this page depends on URL parameters
export const dynamic = 'force-dynamic';

function JoinTeamContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Get invite parameters
    const inviteId = searchParams.get('invite');
    const email = searchParams.get('email');

    if (!inviteId) {
      // No invite ID, redirect to login
      router.push('/login?error=Invalid invitation link');
      return;
    }

    // Redirect to signup with invite parameters
    // User will sign up/login, and we'll auto-accept the invite after authentication
    const params = new URLSearchParams({
      invite: inviteId,
      ...(email && { email }),
    });
    
    router.push(`/signup?${params.toString()}`);
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        <Loader2 className="w-12 h-12 text-primary-500 animate-spin mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Redirecting...
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Taking you to sign up and join the team
        </p>
      </Card>
    </div>
  );
}

export default function JoinTeamPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <Loader2 className="w-12 h-12 text-primary-500 animate-spin mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Loading...
          </h1>
        </Card>
      </div>
    }>
      <JoinTeamContent />
    </Suspense>
  );
}
