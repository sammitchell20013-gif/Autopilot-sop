import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;
}

/**
 * Badge component for tags and status indicators
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
      primary: "bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300",
      secondary: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
      success: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      warning: "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
      danger: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
    };
    
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;

