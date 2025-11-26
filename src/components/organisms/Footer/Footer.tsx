"use client";

import { EmailCaptureInput } from "@/components/molecules/EmailCaptureInput/EmailCaptureInput";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
      <div className="rounded-2xl sm:rounded-3xl max-w-8xl bg-purple mx-auto px-6 sm:px-10 md:px-14 py-6 sm:py-8 md:py-9">
        {/* Main Heading and Email Input Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 pb-6 sm:pb-7 md:pb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8 sm:mb-10 md:mb-14">
            Business AI that works.
          </h2>
          <div className="flex justify-center">
            <EmailCaptureInput
              placeholder="Enter your email"
              buttonText="Get a Demo"
              variant="dark"
              className="max-w-lg"
            />
          </div>
        </div>

        {/* Middle Section: Compliance Badges and Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8 gap-4 sm:gap-6">
          <img
            src="/logos/mentera-light.svg"
            alt="Mentera logo"
            className="h-9 mb-2 sm:mb-0 sm:h-8 md:h-9 w-auto"
          />
          {/* Compliance Badges */}
          <div className="flex gap-6 md:gap-8 items-center">
            {/* HIPAA Badge */}
            <img
              src="/logos/hippa.svg"
              alt="HIPAA Compliant"
              className="h-7 sm:h-8 md:h-9 aspect-[110/37] w-auto"
            />
            {/* GDPR Badge */}
            <img
              src="/logos/gdpr.svg"
              alt="GDPR Compliant"
              className="h-7 sm:h-8 md:h-9 aspect-[115/36] w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 md:gap-8 items-center flex-wrap justify-center">
            <Link
              href="/privacy-policy"
              className="cursor-pointer text-sm sm:text-base text-white hover:opacity-80 transition-opacity font-normal"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:support@mentera.ai"
              className="cursor-pointer text-sm sm:text-base text-white hover:opacity-80 transition-opacity font-normal"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Bottom Section: Logo, Copyright, and Social Media */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pb-4 sm:pb-6">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-3 md:gap-4">
            <p className="text-white text-xs sm:text-sm font-normal">
              © 2025 Mentera. All rights reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 items-center">
            <Link
              href="https://www.instagram.com/mentera.ai/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/mentera-ai"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href="https://www.crunchbase.com/organization/mentera-62d4"
              aria-label="Crunchbase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6 0H2.4A2.41 2.41 0 0 0 0 2.4v19.2A2.41 2.41 0 0 0 2.4 24h19.2a2.41 2.41 0 0 0 2.4-2.4V2.4A2.41 2.41 0 0 0 21.6 0zM7.045 14.465A2.11 2.11 0 0 0 9.84 13.42h1.66a3.69 3.69 0 1 1 0-1.75H9.84a2.11 2.11 0 1 0-2.795 2.795zm11.345.845a3.55 3.55 0 0 1-1.06.63 3.68 3.68 0 0 1-3.39-.38v.38h-1.51V5.37h1.5v4.11a3.74 3.74 0 0 1 1.8-.63H16a3.67 3.67 0 0 1 2.39 6.46zm-.223-2.766a2.104 2.104 0 1 1-4.207 0 2.104 2.104 0 0 1 4.207 0z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href="https://www.tiktok.com/@mentera_ai"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
