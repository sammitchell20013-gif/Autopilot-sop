"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Edit,
  Trash2,
  Share2,
  MoreVertical,
  CheckSquare,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { getSOP, deleteSOP } from "@/lib/supabase/sops";
import { useAuth } from "@/hooks/useAuth";
import CreateTaskModal from "@/components/app/create-task-modal";

export default function SOPViewerPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { user } = useAuth();
  const [sop, setSOP] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  useEffect(() => {
    loadSOP();
  }, [params.id]);

  const loadSOP = async () => {
    setLoading(true);
    const data = await getSOP(params.id);
    setSOP(data);
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this SOP?")) return;
    
    setDeleting(true);
    const result = await deleteSOP(params.id);
    
    if (result.success) {
      router.push("/app/sops");
    } else {
      alert("Failed to delete SOP");
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading SOP...</p>
        </div>
      </div>
    );
  }

  if (!sop) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            SOP Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This SOP doesn't exist or has been deleted.
          </p>
          <Link href="/app/sops">
            <Button variant="primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to SOPs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link href="/app/sops">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to SOPs
          </Button>
        </Link>

        <div className="flex items-start justify-between">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
            >
              {sop.title}
            </motion.h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {sop.description || "No description provided"}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary">{sop.folder}</Badge>
              {sop.tags.map((tag: string) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDelete}
              disabled={deleting}
              className="text-red-600 hover:text-red-700 hover:border-red-600"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        <Card className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Total Steps
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {sop.steps?.length || 0}
          </p>
        </Card>
        <Card className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Created
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {new Date(sop.created_at).toLocaleDateString()}
          </p>
        </Card>
        <Card className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Last Updated
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {new Date(sop.updated_at).toLocaleDateString()}
          </p>
        </Card>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Steps
          </h2>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setShowTaskModal(true)}
          >
            <CheckSquare className="w-4 h-4 mr-2" />
            Create Task
          </Button>
        </div>

        {sop.steps && sop.steps.length > 0 ? (
          <div className="space-y-4">
            {sop.steps.map((step: any, index: number) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card hover className="relative">
                  <div className="flex items-start gap-4">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">
                          {step.order || index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                        {step.description}
                      </p>

                      {step.imageUrl && (
                        <div className="mt-4">
                          <img
                            src={step.imageUrl}
                            alt={step.title}
                            className="rounded-lg max-w-full h-auto"
                          />
                        </div>
                      )}

                      {step.substeps && step.substeps.length > 0 && (
                        <div className="mt-4">
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Sub-steps:
                          </p>
                          <ul className="list-disc list-inside space-y-1">
                            {step.substeps.map((substep: string, i: number) => (
                              <li
                                key={i}
                                className="text-sm text-gray-600 dark:text-gray-400"
                              >
                                {substep}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <button className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              No steps added yet
            </p>
          </Card>
        )}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex gap-3"
      >
        <Link href={`/app/sops/${params.id}/edit`} className="flex-1">
          <Button variant="primary" className="w-full">
            <Edit className="w-4 h-4 mr-2" />
            Edit SOP
          </Button>
        </Link>
        <Button variant="outline" onClick={() => setShowTaskModal(true)}>
          <CheckSquare className="w-4 h-4 mr-2" />
          Create Task
        </Button>
      </motion.div>

      {/* Task Creation Modal */}
      <CreateTaskModal
        isOpen={showTaskModal}
        onClose={() => setShowTaskModal(false)}
        sopId={sop.id}
        sopTitle={sop.title}
        onSuccess={() => {
          alert("Task created successfully! Check the Tasks page to view it.");
        }}
      />
    </div>
  );
}
