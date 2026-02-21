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
  practiceName: string;
  websiteUrl: string;
  phoneNumber: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  practiceName?: string;
  websiteUrl?: string;
  phoneNumber?: string;
  message?: string;
}

type FormField = keyof FormData;

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  practiceName: "",
  websiteUrl: "",
  phoneNumber: "",
  message: "",
};

const HUBSPOT_PORTAL_ID = "244277082";
const HUBSPOT_FORM_ID = "d5d0eebd-bacf-4ab5-b1b9-8211b19435d5";

export const DemoPage = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<FormField, boolean>>({
    firstName: false,
    lastName: false,
    email: false,
    practiceName: false,
    websiteUrl: false,
    phoneNumber: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

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
      case "practiceName":
        if (!value.trim()) return "Practice name is required";
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
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      practiceName: true,
      websiteUrl: true,
      phoneNumber: true,
      message: true,
    });
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let { name, value } = e.target;

    if (name === "phoneNumber") {
      value = value.replace(/[^0-9+\-() \s]/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

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

    setTouched((prev) => ({ ...prev, [fieldName]: true }));

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
      // Submit to HubSpot Forms API
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [
              { name: "firstname", value: formData.firstName },
              { name: "lastname", value: formData.lastName },
              { name: "email", value: formData.email },
              { name: "company", value: formData.practiceName },
              { name: "website", value: formData.websiteUrl },
              { name: "phone", value: formData.phoneNumber },
              { name: "message", value: formData.message },
            ],
            context: {
              pageUri: window.location.href,
              pageName: "Book a Demo",
            },
          }),
        },
      );

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Thank you! We'll be in touch shortly to schedule your demo.",
        );
        setFormData(initialFormData);
        setTouched({
          firstName: false,
          lastName: false,
          email: false,
          practiceName: false,
          websiteUrl: false,
          phoneNumber: false,
          message: false,
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative bg-white">
      {/* Background gradient blobs */}
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
            <h1 className="font-satoshi font-medium text-3xl sm:text-4xl lg:text-4.5xl text-zinc-900 mb-6">
              See Mentera In Action
            </h1>
            <p className="font-satoshi font-normal text-base text-text-secondary max-w-lg mb-10">
              Curious to discover how Mentera can help your practice? Get in
              touch with our team to learn more.
            </p>

            <div className="space-y-6 max-w-lg">
              <div>
                <p className="font-satoshi font-bold text-base text-zinc-900 mb-2">
                  What to expect on the call:
                </p>
                <p className="font-satoshi font-normal text-base text-text-secondary">
                  In 15 minutes, we&apos;ll walk through how your practice
                  currently handles scheduling, patient communication, and
                  follow-ups, then show you exactly where Mentera&apos;s AI can
                  save your team time and recover lost revenue.
                </p>
              </div>

              <p className="font-satoshi font-normal text-base text-text-secondary">
                No pressure, no generic demo. Just a focused conversation about
                your practice.
              </p>

              <p className="font-satoshi font-semibold text-base text-purple">
                Trusted by dental, med spa, and wellness practices across the
                U.S.
              </p>
            </div>
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

              {/* Email */}
              <FormInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your business email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.email}
                required
              />

              {/* Practice Name */}
              <FormInput
                label="Practice Name"
                name="practiceName"
                placeholder="Enter your practice name"
                value={formData.practiceName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.practiceName}
                required
              />

              {/* Website URL */}
              <FormInput
                label="Website URL"
                name="websiteUrl"
                type="url"
                placeholder="www.yourpractice.com"
                value={formData.websiteUrl}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.websiteUrl}
              />

              {/* Phone Number */}
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

              {/* Message */}
              <FormTextarea
                label="Leave Us a Note"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.message}
                rows={4}
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
                  className={`p-4 rounded-lg text-sm font-satoshi ${
                    submitStatus === "success"
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
