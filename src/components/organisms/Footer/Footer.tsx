"use client";

import { HubSpotFormDialog } from "@/components/molecules/HubSpotFormDialog/HubSpotFormDialog";
import Link from "next/link";
import { useState } from "react";

export const Footer = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <footer className="p-6 md:p-8 lg:p-12 relative overflow-hidden">
      <div className="rounded-2xl sm:rounded-3xl max-w-8xl bg-purple mx-auto px-6 sm:px-10 md:px-14 py-6 sm:py-8 md:py-9">
        {/* Main Heading and CTA Button Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 pb-6 sm:pb-7 md:pb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8 sm:mb-10 md:mb-14">
            Business AI that works.
          </h2>
          <div className="flex justify-center">
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-white text-purple px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-colors inline-flex items-center gap-2"
            >
              Get a Demo
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* HubSpot Form Dialog */}
        <HubSpotFormDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />

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
            <Link
              href="/contact-support"
              className="cursor-pointer text-sm sm:text-base text-white hover:opacity-80 transition-opacity font-normal"
            >
              Contact Support
            </Link>
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
                width="28"
                height="28"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0286 2C14.1536 2.003 14.7246 2.009 15.2176 2.023L15.4116 2.03C15.6356 2.038 15.8566 2.048 16.1236 2.06C17.1876 2.11 17.9136 2.278 18.5506 2.525C19.2106 2.779 19.7666 3.123 20.3226 3.678C20.8313 4.17773 21.2248 4.78247 21.4756 5.45C21.7226 6.087 21.8906 6.813 21.9406 7.878C21.9526 8.144 21.9626 8.365 21.9706 8.59L21.9766 8.784C21.9916 9.276 21.9976 9.847 21.9996 10.972L22.0006 11.718V13.028C22.003 13.7574 21.9953 14.4868 21.9776 15.216L21.9716 15.41C21.9636 15.635 21.9536 15.856 21.9416 16.122C21.8916 17.187 21.7216 17.912 21.4756 18.55C21.2248 19.2175 20.8313 19.8223 20.3226 20.322C19.8228 20.8307 19.2181 21.2242 18.5506 21.475C17.9136 21.722 17.1876 21.89 16.1236 21.94L15.4116 21.97L15.2176 21.976C14.7246 21.99 14.1536 21.997 13.0286 21.999L12.2826 22H10.9736C10.2438 22.0026 9.51409 21.9949 8.78457 21.977L8.59057 21.971C8.35318 21.962 8.11584 21.9517 7.87857 21.94C6.81457 21.89 6.08857 21.722 5.45057 21.475C4.7834 21.2241 4.17901 20.8306 3.67957 20.322C3.17051 19.8224 2.77668 19.2176 2.52557 18.55C2.27857 17.913 2.11057 17.187 2.06057 16.122L2.03057 15.41L2.02557 15.216C2.00713 14.4868 1.9988 13.7574 2.00057 13.028V10.972C1.9978 10.2426 2.00514 9.5132 2.02257 8.784L2.02957 8.59C2.03757 8.365 2.04757 8.144 2.05957 7.878C2.10957 6.813 2.27757 6.088 2.52457 5.45C2.77626 4.7822 3.17079 4.17744 3.68057 3.678C4.17972 3.16955 4.78376 2.77607 5.45057 2.525C6.08857 2.278 6.81357 2.11 7.87857 2.06C8.14457 2.048 8.36657 2.038 8.59057 2.03L8.78457 2.024C9.51376 2.00623 10.2432 1.99857 10.9726 2.001L13.0286 2ZM12.0006 7C10.6745 7 9.40272 7.52678 8.46503 8.46447C7.52735 9.40215 7.00057 10.6739 7.00057 12C7.00057 13.3261 7.52735 14.5979 8.46503 15.5355C9.40272 16.4732 10.6745 17 12.0006 17C13.3267 17 14.5984 16.4732 15.5361 15.5355C16.4738 14.5979 17.0006 13.3261 17.0006 12C17.0006 10.6739 16.4738 9.40215 15.5361 8.46447C14.5984 7.52678 13.3267 7 12.0006 7ZM12.0006 9C12.3945 8.99993 12.7847 9.07747 13.1487 9.22817C13.5127 9.37887 13.8434 9.5998 14.122 9.87833C14.4007 10.1569 14.6217 10.4875 14.7725 10.8515C14.9233 11.2154 15.001 11.6055 15.0011 11.9995C15.0011 12.3935 14.9236 12.7836 14.7729 13.1476C14.6222 13.5116 14.4013 13.8423 14.1227 14.121C13.8442 14.3996 13.5135 14.6206 13.1496 14.7714C12.7856 14.9223 12.3955 14.9999 12.0016 15C11.2059 15 10.4429 14.6839 9.88025 14.1213C9.31764 13.5587 9.00157 12.7956 9.00157 12C9.00157 11.2044 9.31764 10.4413 9.88025 9.87868C10.4429 9.31607 11.2059 9 12.0016 9M17.2516 5.5C16.92 5.5 16.6021 5.6317 16.3677 5.86612C16.1333 6.10054 16.0016 6.41848 16.0016 6.75C16.0016 7.08152 16.1333 7.39946 16.3677 7.63388C16.6021 7.8683 16.92 8 17.2516 8C17.5831 8 17.901 7.8683 18.1355 7.63388C18.3699 7.39946 18.5016 7.08152 18.5016 6.75C18.5016 6.41848 18.3699 6.10054 18.1355 5.86612C17.901 5.6317 17.5831 5.5 17.2516 5.5Z"
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
