"use client";

import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "dark";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    return (
      <input
        type={type || "text"}
        className={cn(
          "w-full px-6 py-3 text-base rounded-md font-outfit transition-all duration-300 ease-out focus:outline-none focus:ring-offset-0",
          variant === "default"
            ? "border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"
            : "border-2 border-white/10 text-white placeholder:text-white/60 bg-white/5 focus:border-white/20 focus:ring-2 focus:ring-white/10",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
