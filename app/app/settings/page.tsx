"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Mail, Building, Save, Key } from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import { supabase } from "@/lib/supabase/client";
import Badge from "@/components/ui/badge";
import Link from "next/link";
import Modal from "@/components/ui/modal";

export default function SettingsPage() {
  const { user } = useAuth();
  const { subscription, loading: subLoading } = useSubscription();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState("");

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (user) {
      setFullName(user.user_metadata?.full_name || "");
      setCompany(user.user_metadata?.company || "");
    }
  }, [user]);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          full_name: fullName,
          company: company,
        },
      });

      if (updateError) {
        setError(updateError.message);
      } else {
        setSuccess("Profile updated successfully!");
        setTimeout(() => setSuccess(""), 3000);
      }
    } catch (err: any) {
      setError(err.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!user?.email) {
      setError("No email found");
      return;
    }

    setResetLoading(true);
    setResetSuccess("");
    setError("");

    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(
        user.email,
        {
          redirectTo: `${window.location.origin}/auth/reset-password`,
        }
      );

      if (resetError) {
        setError(resetError.message);
      } else {
        // Redirect to confirmation page
        window.location.href = "/password-reset-sent";
      }
    } catch (err: any) {
      setError(err.message || "Failed to send reset email");
    } finally {
      setResetLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user || deleteConfirm !== "DELETE") {
      return;
    }

    setDeleteLoading(true);
    setError("");

    try {
      // Delete user's data from database
      const { error: deleteDataError } = await supabase
        .from('profiles')
        .delete()
        .eq('id', user.id);

      if (deleteDataError) throw deleteDataError;

      // Delete user account
      const { error: deleteUserError } = await supabase.auth.admin.deleteUser(user.id);
      
      if (deleteUserError) throw deleteUserError;

      // Sign out
      await supabase.auth.signOut();
      
      // Redirect to home
      window.location.href = "/";
    } catch (err: any) {
      setError(err.message || "Failed to delete account");
      setDeleteLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Manage your account settings and preferences
        </p>
      </motion.div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Profile Information
            </h2>

            {(success || resetSuccess) && (
              <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-sm text-green-600 dark:text-green-400">
                  {success || resetSuccess}
                </p>
              </div>
            )}

            {error && (
              <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="space-y-5">
              <Input
                label="Email"
                type="email"
                value={user?.email || ""}
                disabled
                icon={<Mail className="w-5 h-5" />}
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-3">
                Email cannot be changed
              </p>

              <Input
                label="Full Name"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                icon={<User className="w-5 h-5" />}
              />

              <Input
                label="Company"
                placeholder="Acme Inc."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                icon={<Building className="w-5 h-5" />}
              />

              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="w-full sm:w-auto"
              >
                {loading ? (
                  "Saving..."
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Account Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Account
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white mb-1">
                    Subscription Plan
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant={subscription?.plan === 'free' ? 'default' : 'primary'}>
                      {subscription?.plan ? subscription.plan.charAt(0).toUpperCase() + subscription.plan.slice(1) : 'Free'}
                    </Badge>
                    {subscription?.plan !== 'free' && (
                      <span className="text-xs text-green-600 dark:text-green-400">✓ Active</span>
                    )}
                  </div>
                  {subscription?.ends_at && subscription?.plan !== 'free' && (
                    <p className="text-xs text-gray-500 mt-1">
                      Renews: {new Date(subscription.ends_at).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <Link href="/app/billing">
                  <Button variant="outline" size="sm">
                    {subscription?.plan === 'free' ? 'Upgrade' : 'Manage'}
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Password
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We'll send a reset link to {user?.email}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePasswordReset}
                  disabled={resetLoading}
                >
                  <Key className="w-4 h-4 mr-2" />
                  {resetLoading ? "Sending..." : "Reset Password"}
                </Button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Account Created
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {user?.created_at
                      ? new Date(user.created_at).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-red-200 dark:border-red-800">
            <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-6">
              Danger Zone
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Delete Account
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Permanently delete your account and all data
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:text-red-700 hover:border-red-600"
                  onClick={() => setShowDeleteModal(true)}
                >
                  Delete Account
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <Modal
          isOpen={showDeleteModal}
          title="Delete Account"
          description="This action cannot be undone. All your SOPs, tasks, and data will be permanently deleted."
          onClose={() => {
            setShowDeleteModal(false);
            setDeleteConfirm("");
            setError("");
          }}
        >
          <div className="space-y-4 mt-4">
            {error && (
              <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg text-sm">
                {error}
              </div>
            )}
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Type <strong>DELETE</strong> to confirm:
              </p>
              <Input
                type="text"
                value={deleteConfirm}
                onChange={(e) => setDeleteConfirm(e.target.value)}
                placeholder="Type DELETE"
                autoFocus
              />
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <Button
              variant="outline"
              onClick={() => {
                setShowDeleteModal(false);
                setDeleteConfirm("");
                setError("");
              }}
              disabled={deleteLoading}
            >
              Cancel
            </Button>
            <Button
              variant="outline"
              className="text-red-600 hover:text-red-700 border-red-600 hover:border-red-700"
              onClick={handleDeleteAccount}
              disabled={deleteLoading || deleteConfirm !== "DELETE"}
            >
              {deleteLoading ? "Deleting..." : "Delete Account"}
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
