"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, X, Save, ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Badge from "@/components/ui/badge";
import { getSOP, updateSOP } from "@/lib/supabase/sops";

interface Step {
  id: string;
  order: number;
  title: string;
  description: string;
}

export default function EditSOPPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [folder, setFolder] = useState("General");
  const [customFolder, setCustomFolder] = useState("");
  const [showCustomFolder, setShowCustomFolder] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [steps, setSteps] = useState<Step[]>([]);

  useEffect(() => {
    loadSOP();
  }, [params.id]);

  const loadSOP = async () => {
    setLoading(true);
    const sop = await getSOP(params.id);
    
    if (sop) {
      setTitle(sop.title);
      setDescription(sop.description || "");
      setFolder(sop.folder);
      setTags(sop.tags || []);
      setSteps(sop.steps || [{ id: "1", order: 1, title: "", description: "" }]);
    }
    
    setLoading(false);
  };

  const addStep = () => {
    const newStep: Step = {
      id: Date.now().toString(),
      order: steps.length + 1,
      title: "",
      description: "",
    };
    setSteps([...steps, newStep]);
  };

  const removeStep = (id: string) => {
    if (steps.length === 1) return;
    setSteps(steps.filter((step) => step.id !== id));
  };

  const updateStep = (id: string, field: "title" | "description", value: string) => {
    setSteps(
      steps.map((step) =>
        step.id === id ? { ...step, [field]: value } : step
      )
    );
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError("Please enter a title");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const validSteps = steps
        .filter((step) => step.title.trim())
        .map((step, index) => ({
          id: step.id,
          order: index + 1,
          title: step.title,
          description: step.description,
        }));

      // Use custom folder if specified
      const finalFolder = showCustomFolder && customFolder.trim() 
        ? customFolder.trim() 
        : folder;

      const result = await updateSOP(params.id, {
        title: title.trim(),
        description: description.trim(),
        folder: finalFolder,
        tags: tags,
        steps: validSteps,
      });

      if (result.success) {
        router.push(`/app/sops/${params.id}`);
      } else {
        setError(result.error || "Failed to update SOP");
        setSaving(false);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
      setSaving(false);
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

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href={`/app/sops/${params.id}`}>
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Edit SOP
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Update your standard operating procedure
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                label="SOP Title"
                placeholder="e.g., How to Process Customer Refunds"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                icon={<FileText className="w-5 h-5" />}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <Textarea
                placeholder="Brief description of what this SOP covers..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Folder
              </label>
              {showCustomFolder ? (
                <div className="space-y-2">
                  <Input
                    placeholder="Enter custom folder name..."
                    value={customFolder}
                    onChange={(e) => setCustomFolder(e.target.value)}
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setShowCustomFolder(false);
                        setCustomFolder("");
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="button"
                      variant="primary"
                      size="sm"
                      onClick={() => {
                        if (customFolder.trim()) {
                          setFolder(customFolder.trim());
                          setShowCustomFolder(false);
                        }
                      }}
                    >
                      Save Folder
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <select
                    value={folder}
                    onChange={(e) => {
                      if (e.target.value === "custom") {
                        setShowCustomFolder(true);
                      } else {
                        setFolder(e.target.value);
                      }
                    }}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="General">General</option>
                    <option value="Customer Service">Customer Service</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Operations">Operations</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Technical">Technical</option>
                    <option value="custom">➕ Create Custom Folder...</option>
                  </select>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Currently in: <strong>{folder}</strong>
                  </p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tags
              </label>
              <div className="flex gap-2 mb-2">
                <Input
                  placeholder="Add a tag..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTag();
                    }
                  }}
                />
                <Button type="button" variant="outline" onClick={addTag}>
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="default"
                    className="flex items-center gap-1"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-1 hover:text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Steps
                </label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addStep}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Step
                </Button>
              </div>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        Step {index + 1}
                      </span>
                      {steps.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeStep(step.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Input
                        placeholder="Step title..."
                        value={step.title}
                        onChange={(e) =>
                          updateStep(step.id, "title", e.target.value)
                        }
                      />
                      <Textarea
                        placeholder="Step details and instructions..."
                        value={step.description}
                        onChange={(e) =>
                          updateStep(step.id, "description", e.target.value)
                        }
                        rows={2}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                variant="primary"
                className="flex-1"
                disabled={saving}
              >
                {saving ? (
                  "Saving Changes..."
                ) : (
                  <>
                    <Save className="w-5 h-5 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
              <Link href={`/app/sops/${params.id}`}>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}

