

import { cn } from "../../lib/utils";
import { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "success" | "warning" | "info" | "outline";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700",
    success: "bg-[#62B67F]/10 dark:bg-[#62B67F]/20 text-[#044217] dark:text-[#62B67F] border border-[#62B67F]/20 dark:border-[#62B67F]/30",
    warning: "bg-amber-100 dark:bg-amber-900/20 text-amber-900 dark:text-amber-400 border border-amber-200 dark:border-amber-800",
    info: "bg-blue-100 dark:bg-blue-900/20 text-blue-900 dark:text-blue-400 border border-blue-200 dark:border-blue-800",
    outline: "bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#62B67F] dark:hover:border-[#62B67F]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}