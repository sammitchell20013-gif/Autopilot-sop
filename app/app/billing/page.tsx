"use client";

import { motion } from "framer-motion";
import { CreditCard, Sparkles, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Link from "next/link";

export default function BillingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <Card className="p-12">
          <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CreditCard className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Billing Coming Soon
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            We're still building the platform! For now, enjoy creating SOPs without any payment.
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">All features are FREE during beta</span>
          </div>
          
          <Link href="/app/dashboard">
            <Button variant="primary" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Dashboard
            </Button>
          </Link>
        </Card>
      </motion.div>
    </div>
  );
}
