"use client";

import { cn } from "../../lib/utils";
import { HTMLAttributes, forwardRef } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
  variant?: "default" | "outlined" | "elevated" | "gradient";
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, variant = "default", ...props }, ref) => {
    const variants = {
      default: 
        "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm",
      outlined: 
        "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700",
      elevated: 
        "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg",
      gradient: 
        "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700",
    };

    const hoverStyles = hover 
      ? "hover:shadow-xl hover:-translate-y-1 hover:border-[#62B67F] dark:hover:border-[#62B67F]" 
      : "";

    return (
      <div
        ref={ref}
        className={cn(
          "p-6 rounded-2xl transition-all duration-300",
          variants[variant],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// Subcomponentes para melhor organização
export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mb-4", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl font-bold text-gray-900 dark:text-white", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-gray-600 dark:text-gray-400", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("", className)}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mt-6 pt-6 border-t border-gray-200 dark:border-gray-700", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";