"use client";

import { cn } from "@/lib/utils";
import React, { memo, useMemo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "purple" | "gradient-outline" | "outline-dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  showArrow?: boolean;
}

// Moved outside component to avoid recreation
const variantClasses = {
  primary:
    "bg-primary text-white hover:bg-primary/90 active:bg-primary/80",
  secondary:
    "bg-white text-primary hover:bg-gray-50 active:bg-gray-100",
  outline:
    "bg-transparent border-2 border-primary text-primary hover:bg-primary/5",
  purple: "bg-purple text-white hover:bg-purple/90 active:bg-purple/80",
  "gradient-outline": "bg-gradient-to-r from-purple-500/10 to-purple/10 border-2 border-purple-500 text-zinc-950 hover:from-purple-500/20 hover:to-purple/20 hover:border-purple-600 active:from-purple-500/30 active:to-purple/30",
  "outline-dark": "bg-transparent border border-zinc-950 text-zinc-950 hover:bg-zinc-100 hover:border-zinc-700 active:bg-zinc-200",
} as const;

const sizeClasses = {
  sm: "py-2 px-4 text-sm",
  md: "py-3 px-6 text-base",
  lg: "py-4 px-8 text-lg",
} as const;

export const Button = memo(({
  className,
  variant = "primary",
  size = "md",
  children,
  showArrow = false,
  ...props
}: ButtonProps) => {
  const variantClass = useMemo(() => variantClasses[variant], [variant]);
  const sizeClass = useMemo(() => sizeClasses[size], [size]);

  return (
    <button
      className={cn(
        "relative font-outfit font-medium rounded-lg transition-all duration-300 flex items-center justify-center",
        variantClass,
        sizeClass,
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {showArrow && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1"
          >
            <path
              d="M13.75 6.75L19.25 12L13.75 17.25"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 12H4.75"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </button>
  );
});

Button.displayName = "Button";
