"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Mail, UserPlus, Trash2, Shield, Crown, User as UserIcon, CheckCircle, Clock, XCircle } from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Badge from "@/components/ui/badge";
import Modal from "@/components/ui/modal";
import { useAuth } from "@/hooks/useAuth";
import { inviteTeamMember, getTeamMembers, removeTeamMember } from "@/lib/supabase/team";

export default function TeamPage() {
  const { user } = useAuth();
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("member");
  const [inviting, setInviting] = useState(false);
  const [inviteError, setInviteError] = useState("");
  const [inviteSuccess, setInviteSuccess] = useState("");
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Load team members
  useEffect(() => {
    loadTeamMembers();
  }, [user]);

  const loadTeamMembers = async () => {
    setLoading(true);
    const { data } = await getTeamMembers();
    
    // Add current user as owner
    const members = [
      {
        id: "owner",
        email: user?.email || "",
        name: user?.user_metadata?.full_name || "You",
        role: "owner",
        status: "active",
        invited_at: user?.created_at || new Date().toISOString(),
      },
      ...data,
    ];
    
    setTeamMembers(members);
    setLoading(false);
  };

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    setInviting(true);
    setInviteError("");
    setInviteSuccess("");

    const result = await inviteTeamMember(inviteEmail, inviteRole);

    if (result.success) {
      setInviteSuccess(result.message || "Invitation sent!");
      setInviteEmail("");
      setInviteRole("member");
      setTimeout(() => {
        setShowInviteModal(false);
        setInviteSuccess("");
        loadTeamMembers(); // Refresh list
      }, 2000);
    } else {
      setInviteError(result.error || "Failed to send invitation");
    }
    
    setInviting(false);
  };

  const handleRemoveMember = async (memberId: string) => {
    if (!confirm("Are you sure you want to remove this team member?")) return;
    
    const result = await removeTeamMember(memberId);
    
    if (result.success) {
      loadTeamMembers();
    } else {
      alert(result.error || "Failed to remove member");
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Team
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your team members and their permissions
          </p>
        </motion.div>

        <Button
          variant="primary"
          onClick={() => setShowInviteModal(true)}
        >
          <UserPlus className="mr-2 w-5 h-5" />
          Invite Member
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Total Members
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {teamMembers.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-primary-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Active Members
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {teamMembers.filter(m => m.status === 'active' || m.role === 'owner').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Pending Invites
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {teamMembers.filter(m => m.status === 'pending').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Team Members List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Team Members
          </h2>

          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {(member.name || member.email).charAt(0).toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {member.name || member.email.split('@')[0]}
                      </p>
                      {member.role === 'owner' && (
                        <Badge variant="warning">
                          <Crown className="w-3 h-3 mr-1" />
                          Owner
                        </Badge>
                      )}
                      {member.role === 'admin' && (
                        <Badge variant="primary">
                          <Shield className="w-3 h-3 mr-1" />
                          Admin
                        </Badge>
                      )}
                      {member.role === 'member' && (
                        <Badge variant="default">
                          <UserIcon className="w-3 h-3 mr-1" />
                          Member
                        </Badge>
                      )}
                      {member.status === 'pending' && (
                        <Badge variant="outline" className="text-orange-600 border-orange-600">
                          <Clock className="w-3 h-3 mr-1" />
                          Pending
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {member.email}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {member.accepted_at 
                        ? `Joined ${new Date(member.accepted_at).toLocaleDateString()}`
                        : `Invited ${new Date(member.invited_at).toLocaleDateString()}`
                      }
                    </p>
                  </div>
                </div>

                {member.role !== 'owner' && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:border-red-600"
                    onClick={() => member.id !== 'owner' && handleRemoveMember(member.id)}
                    disabled={member.id === 'owner'}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Roles Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Role Permissions
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Owner</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Full access to all features, billing, and team management
              </p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Admin</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Can manage SOPs, tasks, and invite members
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <UserIcon className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Member</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Can view SOPs and complete assigned tasks
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Invite Modal */}
      <Modal
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        title="Invite Team Member"
      >
        <form onSubmit={handleInvite} className="space-y-5">
          {inviteError && (
            <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg text-sm">
              {inviteError}
            </div>
          )}
          {inviteSuccess && (
            <div className="p-3 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-sm flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              {inviteSuccess}
            </div>
          )}
          <div>
            <Input
              label="Email Address"
              type="email"
              placeholder="colleague@company.com"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              required
              icon={<Mail className="w-5 h-5" />}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Role
            </label>
            <select
              value={inviteRole}
              onChange={(e) => setInviteRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="member">Member</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              They will receive an email invitation to join your team
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
              disabled={inviting}
            >
              {inviting ? "Sending..." : "Send Invitation"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowInviteModal(false)}
              disabled={inviting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
