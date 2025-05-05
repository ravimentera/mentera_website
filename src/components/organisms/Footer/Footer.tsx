"use client";

import { EmailCaptureInput } from "@/components/molecules/EmailCaptureInput/EmailCaptureInput";
import Link from "next/link";

export const Footer = () => {
  const handleEmailSubmit = (email: string) => {
    console.log("Footer email submitted:", email);
  };

  return (
    <footer className="px-0 sm:p-6 md:p-12">
      <div className="w-full bg-[#111A53] py-10 sm:py-12 md:py-16 rounded-none sm:rounded-3xl md:rounded-[36px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {/* CTA Section */}
          <div className="mb-10 sm:mb-12 md:mb-16 text-center flex flex-col items-center gap-12">
            <h2 className="heading-h2 mb-6 md:mb-8 text-white">
              Be among the first practices to experience{" "}
              <br className="hidden sm:block" />
              the future of patient care.
            </h2>

            <div className="flex flex-col gap-4 lg:w-[618px]">
              <EmailCaptureInput
                placeholder="Enter your email"
                buttonText="Join the beta waitlist"
                variant="dark"
                className="w-full"
              />
            </div>
          </div>

          {/* Logo and Links Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
            <div className="mb-6 md:mb-0">
              <Link href="/">
                <div className="flex items-center gap-3">
                  <svg
                    width="38"
                    height="40"
                    viewBox="0 0 51 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.9432 43.8746C34.0621 43.8746 43.8864 34.053 43.8864 21.9373C43.8864 9.82168 34.0621 0 21.9432 0C9.82431 0 0 9.82168 0 21.9373C0 34.053 9.82431 43.8746 21.9432 43.8746Z"
                      fill="url(#paint0_linear_248_108)"
                    />
                    <path
                      d="M28.8714 53.9438C40.9903 53.9438 50.8146 44.1222 50.8146 32.0065C50.8146 19.8909 40.9903 10.0692 28.8714 10.0692C16.7525 10.0692 6.92822 19.8909 6.92822 32.0065C6.92822 44.1222 16.7525 53.9438 28.8714 53.9438Z"
                      fill="url(#paint1_linear_248_108)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_248_108"
                        x1="43.7705"
                        y1="19.642"
                        x2="0.13041"
                        y2="24.2839"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFFFFF" stopOpacity="0" />
                        <stop offset="0.94" stopColor="#8F03A0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_248_108"
                        x1="50.6975"
                        y1="29.7099"
                        x2="7.05739"
                        y2="34.3518"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#6EF1BB" />
                        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-[#FFFFFF] text-xl sm:text-2xl">
                    Mentera
                  </span>
                </div>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link
                href="#"
                className="text-body-1 text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy-policy"
                className="text-body-1 text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-body-1 text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors"
              >
                Terms & Condition
              </Link>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px w-full bg-[#FFFFFF]/10 mb-6 md:mb-8"></div>

          {/* Copyright and Social Media */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-body-1 text-white text-xs mb-4 md:mb-0 text-center md:text-left">
              © 2025 Mentera Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/mentera.ai/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors duration-300"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="currentColor"
                    fillOpacity="0.6"
                  />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/mentera-ai" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors duration-300"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    fill="currentColor"
                    fillOpacity="0.6"
                  />
                </svg>
              </Link>
              <Link href="https://www.crunchbase.com/organization/mentera-62d4" aria-label="Crunchbase" target="_blank" rel="noopener noreferrer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors duration-300"
                >
                  <path
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM15.9 9.64c0-.27-.32-.43-.58-.29l-4.03 2.32c-.2.12-.3.35-.28.58l.23 4.65c.01.29.32.43.58.29l4.03-2.32c.2-.12.3-.35.28-.58l-.23-4.65zm-5.52 3.43c-.07-.01-.14-.05-.18-.11-.05-.06-.07-.13-.06-.2.01-.07.05-.14.11-.18.06-.05.13-.06.2-.06.07.01.13.05.18.11.05.06.07.13.06.2-.01.07-.05.14-.11.18-.06.05-.13.07-.2.06zm.01-2.07c-.06-.01-.14-.05-.18-.11-.05-.06-.07-.13-.06-.2.01-.07.05-.14.11-.18.06-.05.13-.07.2-.06.07.01.13.05.18.11.05.06.07.13.06.2-.01.07-.05.14-.11.18-.06.05-.13.07-.2.06zm1.08 2.13c.45-.26 1.02-.1 1.28.35.26.45.1 1.02-.35 1.28-.45.26-1.02.1-1.28-.35s-.1-1.02.35-1.28zm1.09-1.87c.39-.23.89-.09 1.13.3.23.39.09.89-.3 1.12-.39.23-.89.09-1.13-.3-.23-.39-.09-.89.3-1.12zm1.19-1.36c.44-.25 1-.1 1.26.34.25.44.1 1-.34 1.26-.44.25-1 .1-1.26-.34-.26-.44-.1-1 .34-1.26z"
                    fill="currentColor"
                    fillOpacity="0.6"
                  />
                </svg>
              </Link>
              <Link href="https://www.tiktok.com/@mentera_ai" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors duration-300"
                >
                  <path
                    d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                    fill="currentColor"
                    fillOpacity="0.6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
