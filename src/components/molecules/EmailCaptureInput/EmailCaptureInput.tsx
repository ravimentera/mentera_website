"use client";

import React, { useRef, useState } from "react";

interface EmailCaptureInputProps {
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
  className?: string;
  inputHeight?: string;
  buttonHeight?: string;
  variant?: "light" | "dark";
}

export const EmailCaptureInput: React.FC<EmailCaptureInputProps> = ({
  placeholder = "Enter your email",
  buttonText = "Join the beta waitlist",
  onSubmit,
  className = "",
  inputHeight = "h-12",
  buttonHeight = "h-12",
  variant = "light",
}: EmailCaptureInputProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    try {
      const response = await fetch("/api/pipedrive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        if (onSubmit) {
          onSubmit(email);
        }
        // Reset the form
        formRef.current?.reset();
        // After 2 seconds, reset the success state to allow new submissions
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      } else {
        setError(result.error || "Failed to submit email");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles =
    variant === "light"
      ? "bg-transparent placeholder-[#717172] text-gray-900 border-[#111A53] focus:ring-primary/20"
      : "bg-transparent placeholder-white/50 text-white border-white focus:ring-white/20";

  const buttonStyles =
    variant === "light"
      ? "bg-[#111A53] hover:bg-[#1c2b85] text-white"
      : "bg-white hover:bg-gray-100 text-purple";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`relative max-w-xl w-full ${className}`}
    >
      <input
        type="email"
        name="email"
        placeholder={placeholder}
        className={`w-full ${inputHeight} px-4 sm:px-6 pr-[125px] sm:pr-[170px] rounded-full ${inputStyles} text-base sm:text-lg focus:outline-none focus:ring-2 border`}
        required
        disabled={isSubmitting}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`absolute right-0 top-0 ${buttonHeight} px-3 sm:px-8 text-sm sm:text-base ${buttonStyles} rounded-full flex items-center gap-1 sm:gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <span className="whitespace-nowrap">
          {isSubmitting ? "Submitting..." : success ? "Success!" : buttonText}
        </span>
        {!isSubmitting && !success && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block"
          >
            <path
              d="M1 8H15M15 8L8 1M15 8L8 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {error && (
        <p
          className={`mt-2 text-sm ${
            variant === "light" ? "text-red-500" : "text-red-300"
          }`}
        >
          {error}
        </p>
      )}
    </form>
  );
};
