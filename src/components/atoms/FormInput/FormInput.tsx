"use client";

import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, required = false, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="font-satoshi font-medium text-sm text-zinc-900"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 text-sm rounded-lg border transition-all duration-200 font-satoshi",
            "placeholder:text-gray-400 text-zinc-900",
            "focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple",
            error
              ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
              : "border-gray-300 hover:border-gray-400",
            className,
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            className="text-red-500 text-xs font-satoshi mt-0.5"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";
