/**
 * Logout Button Component
 * Simple button to log out the user
 */

"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/supabase/auth";
import { supabase } from "@/lib/supabase/client";
import Button from "@/components/ui/button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Sign out from Supabase
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Logout error:', error);
        return;
      }

      // Clear any cached data
      if (typeof window !== 'undefined') {
        // Clear localStorage
        localStorage.clear();
        // Clear sessionStorage
        sessionStorage.clear();
      }

      // Force a full page reload to clear all state
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={handleLogout}
      className="flex items-center gap-2 w-full"
    >
      <LogOut className="w-4 h-4" />
      <span>Logout</span>
    </Button>
  );
}

