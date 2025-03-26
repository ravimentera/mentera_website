"use client";

import { Button } from "@/components/atoms/Button/Button";
import { Input } from "@/components/atoms/Input/Input";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#111A53] py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* CTA Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-lexend font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#6EF1BB] to-[#AA72FF]">
            Be among the first practices to
            <br className="hidden md:block" /> experience the future of patient
            care.
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
            <Input
              variant="dark"
              className="w-full md:flex-1 text-lg"
              placeholder="Enter your email"
            />
            <Button variant="secondary" showArrow={true}>
              Join the beta waitlist
            </Button>
          </div>
        </div>

        {/* Logo and Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <div className="flex items-center gap-3">
                <svg
                  width="42"
                  height="44"
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
                <span className="text-[#FFFFFF] text-2xl font-lexend">
                  Mentera
                </span>
              </div>
            </Link>
          </div>

          <div className="flex gap-4 md:gap-8">
            <Link
              href="#"
              className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors text-sm md:text-base font-outfit"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors text-sm md:text-base font-outfit"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors text-sm md:text-base font-outfit"
            >
              Terms & Condition
            </Link>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-[#FFFFFF]/10 mb-8"></div>

        {/* Copyright and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#FFFFFF]/60 text-sm font-outfit mb-4 md:mb-0">
            © 2025 Mentera Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Instagram">
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
            <Link href="#" aria-label="Facebook">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors duration-300"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z"
                  fill="currentColor"
                  fillOpacity="0.6"
                />
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors duration-300"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="currentColor"
                  fillOpacity="0.6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
