"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import Card from "@/components/ui/card";

// Force dynamic rendering since this page depends on URL parameters
export const dynamic = 'force-dynamic';

function JoinTeamContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processing your invitation...');

  useEffect(() => {
    const handleJoinTeam = async () => {
      try {
        const code = searchParams.get('code');
        const email = searchParams.get('email');
        const inviteId = searchParams.get('invite');

        if (!code) {
          setStatus('error');
          setMessage('Invalid invitation link. Missing authentication code.');
          return;
        }

        if (!inviteId) {
          setStatus('error');
          setMessage('Invalid invitation link. Missing invite ID.');
          return;
        }

        // Call API route to handle code exchange and team invitation
        const params = new URLSearchParams({
          code,
          ...(email && { email }),
          invite: inviteId,
        });

        const response = await fetch(`/api/join-team?${params.toString()}`);
        const data = await response.json();

        if (!response.ok || !data.success) {
          setStatus('error');
          setMessage(data.error || 'Failed to join team. Please try again.');
          return;
        }

        // Success!
        setStatus('success');
        setMessage(data.message || 'Successfully joined the team! Redirecting to dashboard...');
        
        setTimeout(() => {
          router.push('/app/dashboard');
        }, 2000);

      } catch (error: any) {
        console.error('Error joining team:', error);
        setStatus('error');
        setMessage(`An error occurred: ${error.message || 'Unknown error'}`);
      }
    };

    handleJoinTeam();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        {status === 'loading' && (
          <>
            <Loader2 className="w-12 h-12 text-primary-500 animate-spin mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Joining Team...
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {message}
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome to the Team!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {message}
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Error
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {message}
            </p>
            <button
              onClick={() => router.push('/login')}
              className="text-primary-500 hover:text-primary-600 font-medium"
            >
              Go to Login
            </button>
          </>
        )}
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

