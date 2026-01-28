"use client";

import { cn } from "@/lib/utils";
import { forwardRef, TextareaHTMLAttributes } from "react";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, label, error, required = false, id, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={textareaId}
          className="font-satoshi font-medium text-sm text-zinc-900"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 text-sm rounded-lg border transition-all duration-200 font-satoshi resize-none",
            "placeholder:text-gray-400 text-zinc-900",
            "focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple",
            error
              ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
              : "border-gray-300 hover:border-gray-400",
            className,
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={`${textareaId}-error`}
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

FormTextarea.displayName = "FormTextarea";
