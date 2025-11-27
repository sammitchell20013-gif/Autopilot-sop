"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  Video,
  CheckSquare,
  Users,
  Settings,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Shield,
  Scale,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import LogoutButton from "./logout-button";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/app/dashboard" },
  { icon: FileText, label: "SOPs", href: "/app/sops" },
  { icon: Video, label: "Generate", href: "/app/generate" },
  { icon: CheckSquare, label: "Tasks", href: "/app/tasks" },
  { icon: Users, label: "Team", href: "/app/team" },
  { icon: Settings, label: "Settings", href: "/app/settings" },
  { icon: CreditCard, label: "Billing", href: "/app/billing" },
];

const legalItems = [
  { icon: Scale, label: "Terms of Service", href: "/terms" },
  { icon: Shield, label: "Privacy Policy", href: "/privacy" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useAuth();

  return (
    <>
      {/* Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 80 : 280 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col z-30"
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center px-6 border-b border-gray-200 dark:border-gray-800">
          <Link href="/app/dashboard" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Autopilot SOP" 
              className={cn(
                "w-auto transition-all duration-300",
                collapsed ? "h-8" : "h-10"
              )}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all cursor-pointer",
                    isActive
                      ? "bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 flex-shrink-0", collapsed && "mx-auto")} />
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </motion.div>
              </Link>
            );
          })}

          {/* Legal Section */}
          {!collapsed && (
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-4 mb-2">
                LEGAL
              </p>
            </div>
          )}
          
          {legalItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} target="_blank">
                <motion.div
                  whileHover={{ x: 4 }}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all cursor-pointer",
                    isActive
                      ? "bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 flex-shrink-0", collapsed && "mx-auto")} />
                  {!collapsed && <span className="text-sm">{item.label}</span>}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          {!collapsed ? (
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={user?.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  {user?.user_metadata?.full_name || 'User'}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                  {user?.email || 'email@example.com'}
                </p>
              </div>
            </div>
          ) : (
            <img
              src={user?.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
              alt="User"
              className="w-10 h-10 rounded-full mx-auto mb-3"
            />
          )}
          
          <LogoutButton />
        </div>

        {/* Collapse Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </motion.aside>
    </>
  );
}
