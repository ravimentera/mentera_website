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
            ? "border-2 border-[#E5E7EB] text-[#111827] placeholder:text-[#9CA3AF] bg-[#FFFFFF] focus:border-[#111A53] focus:ring-2 focus:ring-[#111A53]/10"
            : "border-2 border-[#FFFFFF]/10 text-[#FFFFFF] placeholder:text-[#FFFFFF]/60 bg-[#FFFFFF]/5 focus:border-[#FFFFFF]/20 focus:ring-2 focus:ring-[#FFFFFF]/10",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
