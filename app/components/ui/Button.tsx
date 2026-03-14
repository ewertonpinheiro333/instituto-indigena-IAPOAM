"use client";

import { cn } from "../../lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    const variants = {
      primary:
        "bg-gradient-to-r from-[#044217] to-[#62B67F] text-white hover:shadow-lg hover:scale-105 active:scale-100",
      secondary:
        "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-[#62B67F] dark:hover:border-[#62B67F] hover:shadow-md",
      outline:
        "bg-transparent border-2 border-[#044217] dark:border-[#62B67F] text-[#044217] dark:text-[#62B67F] hover:bg-[#044217] hover:text-white dark:hover:bg-[#62B67F] dark:hover:text-white",
      ghost:
        "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
      danger:
        "bg-red-600 dark:bg-red-700 text-white hover:bg-red-700 dark:hover:bg-red-800 hover:shadow-lg",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-lg",
      md: "px-6 py-3 text-base rounded-xl",
      lg: "px-8 py-4 text-lg rounded-xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none inline-flex items-center justify-center",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";