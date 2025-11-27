"use client";

import { useState } from "react";
import { X, CheckSquare, Calendar, User, AlertCircle } from "lucide-react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Modal from "@/components/ui/modal";
import { createTask } from "@/lib/supabase/tasks";

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  sopId?: string;
  sopTitle?: string;
  onSuccess?: () => void;
}

export default function CreateTaskModal({
  isOpen,
  onClose,
  sopId,
  sopTitle,
  onSuccess,
}: CreateTaskModalProps) {
  const [title, setTitle] = useState(sopTitle ? `Execute: ${sopTitle}` : "");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError("Please enter a task title");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await createTask({
        sop_id: sopId,
        title: title.trim(),
        assigned_to_email: assignedTo.trim() || undefined,
        due_date: dueDate || undefined,
        priority: priority,
        notes: notes.trim() || undefined,
      });

      if (result.success) {
        // Reset form
        setTitle("");
        setAssignedTo("");
        setDueDate("");
        setPriority("medium");
        setNotes("");
        
        // Call success callback
        if (onSuccess) onSuccess();
        
        // Close modal
        onClose();
      } else {
        setError(result.error || "Failed to create task");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setError("");
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Create Task">
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        {sopTitle && (
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Creating task from SOP: <strong>{sopTitle}</strong>
            </p>
          </div>
        )}

        {/* Task Title */}
        <div>
          <Input
            label="Task Title"
            placeholder="e.g., Complete customer onboarding process"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            icon={<CheckSquare className="w-5 h-5" />}
          />
        </div>

        {/* Assign To */}
        <div>
          <Input
            label="Assign To (Optional)"
            placeholder="team-member@company.com"
            type="email"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            icon={<User className="w-5 h-5" />}
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Leave blank to assign to yourself
          </p>
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Due Date (Optional)
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Priority */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Notes (Optional)
          </label>
          <Textarea
            placeholder="Additional instructions or context..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <Button
            type="submit"
            variant="primary"
            className="flex-1"
            disabled={loading}
          >
            {loading ? "Creating Task..." : "Create Task"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={loading}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}

