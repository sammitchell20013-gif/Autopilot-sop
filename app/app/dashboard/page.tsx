"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  TrendingUp,
  Users,
  CheckCircle,
  Clock,
  Star,
  Plus,
  ArrowRight,
  Activity,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { formatRelativeTime } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useSOPs } from "@/hooks/useSOPs";
import { getUserTasks } from "@/lib/supabase/tasks";

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const { sops, loading: sopsLoading } = useSOPs();
  const [tasks, setTasks] = useState<any[]>([]);
  const [tasksLoading, setTasksLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setTasksLoading(true);
    const data = await getUserTasks();
    setTasks(data);
    setTasksLoading(false);
  };
  
  const recentSOPs = sops.slice(0, 5);
  const upcomingTasks = tasks
    .filter(task => task.status === 'pending')
    .sort((a, b) => {
      if (!a.due_date) return 1;
      if (!b.due_date) return -1;
      return new Date(a.due_date).getTime() - new Date(b.due_date).getTime();
    })
    .slice(0, 3);

  // Show loading state
  if (authLoading || sopsLoading || tasksLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Calculate stats using real data
  const completedTasks = tasks.filter(t => t.status === 'completed').length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const stats = [
    {
      icon: FileText,
      label: "Total SOPs",
      value: sops.length,
      change: sops.length > 0 ? "Active" : "Get started",
      color: "from-blue-500 to-primary-600",
    },
    {
      icon: CheckCircle,
      label: "Completed Tasks",
      value: completedTasks,
      change: `${tasks.filter(t => t.status === 'pending').length} pending`,
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Users,
      label: "Team Members",
      value: 1,
      change: "You",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Activity,
      label: "Completion Rate",
      value: `${completionRate}%`,
      change: totalTasks > 0 ? `${totalTasks} total` : "No tasks yet",
      color: "from-orange-500 to-red-600",
    },
  ];

  // Get user's first name for greeting
  const firstName = user?.user_metadata?.full_name?.split(' ')[0] || 'there';

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {firstName} 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here's what's happening with your SOPs today
          </p>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card hover className="relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 rounded-full -mr-12 -mt-12`}></div>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <Badge variant="default" className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Recent SOPs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <CardTitle>Recent SOPs</CardTitle>
                  <CardDescription>Your recently updated procedures</CardDescription>
                </div>
                <Link href="/app/sops">
                  <Button variant="ghost" size="sm" className="group">
                    View All
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              {recentSOPs.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    You haven't created any SOPs yet
                  </p>
                  <Link href="/app/sops/create">
                    <Button variant="primary">
                      <Plus className="mr-2 w-5 h-5" />
                      Create Your First SOP
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentSOPs.map((sop) => (
                    <Link key={sop.id} href={`/app/sops/${sop.id}`}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all cursor-pointer"
                      >
                        <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-gray-900 dark:text-white truncate text-sm sm:text-base">
                                {sop.title}
                              </h4>
                              {sop.is_favorite && (
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                              {sop.description || 'No description'}
                            </p>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
                              <Badge variant="primary" className="text-xs">{sop.folder}</Badge>
                              <span className="text-xs text-gray-500">
                                {sop.steps?.length || 0} steps
                              </span>
                              <span className="text-xs text-gray-500">
                                Updated {formatRelativeTime(sop.updated_at)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions & Tasks */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Get started quickly</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/app/sops/create">
                    <Button variant="primary" className="w-full justify-start group">
                      <Plus className="mr-2 w-5 h-5" />
                      Create New SOP
                      <ArrowRight className="ml-auto w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/app/generate">
                    <Button variant="outline" className="w-full justify-start group">
                      <Plus className="mr-2 w-5 h-5" />
                      Generate from Video
                      <ArrowRight className="ml-auto w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/app/sops">
                    <Button variant="outline" className="w-full justify-start group">
                      <FileText className="mr-2 w-5 h-5" />
                      Browse SOPs
                      <ArrowRight className="ml-auto w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/app/team">
                    <Button variant="outline" className="w-full justify-start group">
                      <Users className="mr-2 w-5 h-5" />
                      Invite Team
                      <ArrowRight className="ml-auto w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Tasks</CardTitle>
                    <CardDescription>Tasks due soon</CardDescription>
                  </div>
                  <Link href="/app/tasks">
                    <Button variant="ghost" size="sm" className="group">
                      View All
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingTasks.length === 0 ? (
                    <div className="text-center py-6">
                      <CheckCircle className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-500 mb-3">
                        No upcoming tasks
                      </p>
                      <p className="text-xs text-gray-400">
                        Create tasks from your SOPs to get started!
                      </p>
                    </div>
                  ) : (
                    upcomingTasks.map((task) => (
                      <Link key={task.id} href="/app/tasks">
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                          <h5 className="font-medium text-gray-900 dark:text-white text-sm mb-2">
                            {task.title}
                          </h5>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {task.due_date && (
                                <>
                                  <Clock className="w-3 h-3 text-gray-500" />
                                  <span className="text-xs text-gray-600 dark:text-gray-400">
                                    Due {new Date(task.due_date).toLocaleDateString()}
                                  </span>
                                </>
                              )}
                              {!task.due_date && (
                                <span className="text-xs text-gray-600 dark:text-gray-400">
                                  No due date
                                </span>
                              )}
                            </div>
                            <Badge 
                              variant={
                                task.priority === 'high' ? 'danger' : 
                                task.priority === 'medium' ? 'warning' : 
                                'default'
                              }
                            >
                              {task.priority}
                            </Badge>
                          </div>
                          {task.assigned_to_email && (
                            <p className="text-xs text-gray-500 mt-2">
                              Assigned to: {task.assigned_to_email}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
