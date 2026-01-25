/**
 * Logout Button Component
 * Simple button to log out the user
 */

"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/supabase/auth";
import Button from "@/components/ui/button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const result = await signOut();
    if (result.success) {
      router.push("/");
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={handleLogout}
      className="flex items-center gap-2"
    >
      <LogOut className="w-4 h-4" />
      <span>Logout</span>
    </Button>
  );
}

