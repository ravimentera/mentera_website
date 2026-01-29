"use client";

import { Button } from "@/components/atoms/Button/Button";
import { FormInput } from "@/components/atoms/FormInput/FormInput";
import { FormTextarea } from "@/components/atoms/FormTextarea/FormTextarea";
import { Footer } from "@/components/organisms/Footer/Footer";
import Link from "next/link";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  businessName?: string;
  message?: string;
}

type FormField = keyof FormData;

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  businessName: "",
  message: "",
};

export const ContactSupportPage = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<FormField, boolean>>({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    businessName: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  // Validate a single field
  const validateField = (
    name: FormField,
    value: string,
  ): string | undefined => {
    switch (name) {
      case "firstName":
        if (!value.trim()) return "First name is required";
        if (value.trim().length < 2)
          return "First name must be at least 2 characters";
        return undefined;
      case "lastName":
        if (!value.trim()) return "Last name is required";
        if (value.trim().length < 2)
          return "Last name must be at least 2 characters";
        return undefined;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email address";
        return undefined;
      case "phoneNumber":
        if (!value.trim()) return "Phone number is required";
        if (
          !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
            value.replace(/\s/g, ""),
          )
        ) {
          return "Please enter a valid phone number";
        }
        return undefined;
      case "businessName":
        if (!value.trim()) return "Business name is required";
        return undefined;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        return undefined;
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    (Object.keys(formData) as FormField[]).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    // Mark all fields as touched on form submit
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phoneNumber: true,
      businessName: true,
      message: true,
    });
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let { name, value } = e.target;

    if (name === "phoneNumber") {
      value = value.replace(/[^0-9+\-()\s]/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Re-validate field if it was already touched
    if (touched[name as FormField]) {
      const error = validateField(name as FormField, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const fieldName = name as FormField;

    // Mark field as touched
    setTouched((prev) => ({ ...prev, [fieldName]: true }));

    // Validate field on blur
    const error = validateField(fieldName, value);
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Thank you for contacting us! We'll get back to you shortly.",
        );
        setFormData(initialFormData);
        // Reset touched state on successful submission
        setTouched({
          firstName: false,
          lastName: false,
          email: false,
          phoneNumber: false,
          businessName: false,
          message: false,
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          data.error || "Something went wrong. Please try again.",
        );
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative bg-white">
      {/* Background gradient blobs - hidden on mobile for better contrast */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <div className="absolute -left-32 top-32 w-96 h-96 bg-blog-blob-purple rounded-full opacity-20 blur-huge" />
        <div className="absolute -right-32 top-64 w-96 h-96 bg-blog-blob-green rounded-full opacity-20 blur-huge" />
        <div className="absolute left-1/4 bottom-1/3 w-64 h-64 bg-pink-400/20 rounded-full blur-huge" />
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-8xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Header Content */}
          <div className="flex flex-col justify-start pt-4">
            <h1 className="font-satoshi font-medium text-3xl sm:text-4xl lg:text-4.5xl text-zinc-900 mb-4">
              Contact Support
            </h1>
            <p className="font-satoshi font-medium text-lg text-zinc-900 mb-6">
              Experiencing an issue? We can help!
            </p>
            <p className="font-satoshi font-normal text-base text-text-secondary max-w-md">
              Our support team is ready to assist you with any questions,
              technical issues, or feedback about your experience.
            </p>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name & Last Name Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <FormInput
                  label="First Name"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.firstName}
                  required
                />
                <FormInput
                  label="Last Name"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.lastName}
                  required
                />
              </div>

              {/* Email & Phone Number Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  required
                />
                <FormInput
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.phoneNumber}
                  required
                />
              </div>

              {/* Business Name */}
              <FormInput
                label="Business Name"
                name="businessName"
                placeholder="Enter your business name"
                value={formData.businessName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.businessName}
                required
              />

              {/* Message */}
              <FormTextarea
                label="Message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.message}
                required
                rows={5}
              />

              {/* Privacy Policy Notice */}
              <p className="text-xs text-text-secondary font-satoshi">
                We will use your information to communicate any future events
                and services. For further details please review our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-purple hover:underline"
                >
                  privacy policy
                </Link>
                .
              </p>

              {/* Submit Status Message */}
              {submitStatus !== "idle" && (
                <div
                  className={`p-4 rounded-lg text-sm font-satoshi ${submitStatus === "success"
                      ? "bg-secondary-light text-green-800"
                      : "bg-red-50 text-red-600"
                    }`}
                  role="alert"
                >
                  {submitMessage}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="bg-purple text-white px-8 py-3 rounded-lg font-bold hover:bg-purple/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};
