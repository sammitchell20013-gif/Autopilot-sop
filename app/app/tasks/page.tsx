"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckSquare,
  Clock,
  User,
  Calendar,
  Filter,
  Search,
  Plus,
  CheckCircle2,
  Circle,
  AlertCircle,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import Input from "@/components/ui/input";
import { getUserTasks, completeTask, deleteTask } from "@/lib/supabase/tasks";
import { useAuth } from "@/hooks/useAuth";
import { formatRelativeTime } from "@/lib/utils";

export default function TasksPage() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterPriority, setFilterPriority] = useState<string>("all");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    const data = await getUserTasks();
    setTasks(data);
    setLoading(false);
  };

  const handleComplete = async (taskId: string) => {
    const result = await completeTask(taskId);
    if (result.success) {
      loadTasks();
    }
  };

  const handleDelete = async (taskId: string) => {
    if (!confirm("Are you sure you want to delete this task?")) return;
    
    const result = await deleteTask(taskId);
    if (result.success) {
      loadTasks();
    }
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || task.status === filterStatus;
    const matchesPriority = filterPriority === "all" || task.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Group tasks by status
  const pendingTasks = filteredTasks.filter((t) => t.status === "pending");
  const completedTasks = filteredTasks.filter((t) => t.status === "completed");

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Tasks
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and track your SOP execution tasks
          </p>
        </motion.div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Card>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search className="w-5 h-5" />}
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="all">All Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </Card>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Total Tasks
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {tasks.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-primary-600 rounded-lg flex items-center justify-center">
                <CheckSquare className="w-6 h-6 text-white" />
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
                  Pending
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {pendingTasks.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Completed
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {completedTasks.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Tasks List */}
      {filteredTasks.length === 0 ? (
        <Card className="text-center py-12">
          <CheckSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No tasks found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {searchQuery || filterStatus !== "all" || filterPriority !== "all"
              ? "Try adjusting your filters"
              : "Create a task from a SOP to get started"}
          </p>
          <Link href="/app/sops">
            <Button variant="primary">
              <Plus className="mr-2 w-5 h-5" />
              Go to SOPs
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
            >
              <Card hover className="group">
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => handleComplete(task.id)}
                    className="flex-shrink-0 mt-1"
                    disabled={task.status === "completed"}
                  >
                    {task.status === "completed" ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-400 hover:text-primary-600 transition-colors" />
                    )}
                  </button>

                  {/* Task Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        task.status === "completed"
                          ? "line-through text-gray-500 dark:text-gray-600"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {task.title}
                    </h3>

                    {task.notes && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {task.notes}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <Badge
                        variant={
                          task.priority === "high"
                            ? "danger"
                            : task.priority === "medium"
                            ? "warning"
                            : "default"
                        }
                      >
                        {task.priority}
                      </Badge>

                      {task.due_date && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            Due {new Date(task.due_date).toLocaleDateString()}
                          </span>
                        </div>
                      )}

                      {task.assigned_to_email && (
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{task.assigned_to_email}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Created {formatRelativeTime(task.created_at)}</span>
                      </div>

                      {task.status === "completed" && task.completed_at && (
                        <div className="flex items-center gap-1 text-green-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>
                            Completed {formatRelativeTime(task.completed_at)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
