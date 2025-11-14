"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "purple" | "gradient-outline" | "outline-dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  showArrow?: boolean;
}

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  children,
  showArrow = false,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary:
      "bg-[#111A53] text-[#FFFFFF] hover:bg-[#1b2766] active:bg-[#0e1642]",
    secondary:
      "bg-[#FFFFFF] text-[#111A53] hover:bg-[#F5F5F5] active:bg-[#EEEEEE]",
    outline:
      "bg-transparent border-2 border-[#111A53] text-[#111A53] hover:bg-[#111A53]/5",
    purple: "bg-purple text-white hover:bg-purple/90 active:bg-purple/80",
    "gradient-outline": "bg-gradient-to-r from-[rgba(143,3,160,0.1)] to-[rgba(77,40,223,0.1)] border-2 border-[#8f03a0] text-zinc-950 hover:from-[rgba(143,3,160,0.2)] hover:to-[rgba(77,40,223,0.2)] hover:border-[#7a0288] active:from-[rgba(143,3,160,0.3)] active:to-[rgba(77,40,223,0.3)]",
    "outline-dark": "bg-transparent border border-zinc-950 text-zinc-950 hover:bg-zinc-100 hover:border-zinc-700 active:bg-zinc-200",
  };

  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  return (
    <button
      className={cn(
        "relative font-outfit font-medium rounded-lg transition-all duration-300 flex items-center justify-center",
        variantClasses[variant],
        sizeClasses[size],
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
};
