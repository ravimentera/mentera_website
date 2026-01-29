"use client";

import {
  fadeInLeft,
  fadeInRight,
  transitions,
  viewportConfig,
} from "@/lib/animations";
import { motion } from "framer-motion";
import { memo, useMemo } from "react";

// App logos mapping - all logos from /public/app-logos folder
const appLogos = [
  { name: "Outlook", image: "app-microsoft-outlook.png" },
  { name: "Gmail", image: "app-gmail.png" },
  { name: "Google Drive", image: "app-google-drive.png" },
  { name: "OneDrive", image: "app-onedrive.png" },
  { name: "Dropbox", image: "app-dropbox.png" },
  { name: "Slack", image: "app-slack.png" },
  { name: "Microsoft Teams", image: "app-teams.png" },
  { name: "WhatsApp Business", image: "app-whatsapp-bussiness.png" },
  { name: "Salesforce", image: "app-salesforce.png" },
  { name: "HubSpot", image: "app-hubspot.png" },
  { name: "HighLevel", image: "app-highlevel.png" },
  { name: "Mailchimp", image: "app-mailchimp.png" },
  { name: "SendGrid", image: "app-sendgrid.png" },
  { name: "Twilio", image: "app-twilio.png" },
  { name: "Stripe", image: "app-stripe.png" },
  { name: "Square", image: "app-square.png" },
  { name: "PayPal", image: "app-paypal.png" },
  { name: "QuickBooks", image: "app-quickbooks.png" },
  { name: "Xero", image: "app-xero.png" },
  { name: "DrChrono", image: "app-drchrono.png" },
  { name: "Dentrix", image: "app-dentrix.png" },
  { name: "Denticon", image: "app-denticon.png" },
  { name: "Nextech", image: "app-nextech.png" },
  { name: "PatientNow", image: "app-patientnow.png" },
];

// Mask gradient style - extracted as constant to avoid recreation
const maskGradientStyle = {
  maskImage:
    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
} as const;

export const IntegrationsSection = memo(() => {
  // Split logos into 3 rows
  const rows = useMemo(() => {
    const row1: typeof appLogos = [];
    const row2: typeof appLogos = [];
    const row3: typeof appLogos = [];

    appLogos.forEach((logo, index) => {
      if (index % 3 === 0) {
        row1.push(logo);
      } else if (index % 3 === 1) {
        row2.push(logo);
      } else {
        row3.push(logo);
      }
    });

    return [row1, row2, row3];
  }, []);

  // Duplicate logos for seamless loop - 4 sets to ensure no visible reset
  const duplicatedRows = useMemo(() => {
    return rows.map((row) => [...row, ...row, ...row, ...row]);
  }, [rows]);

  return (
    <section className="relative w-full pb-12 sm:pb-16 md:pb-20 pt-12 sm:pt-20 md:pt-28 bg-transparent px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-8xl mx-auto px-2 sm:px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig.once}
            variants={fadeInLeft}
            transition={transitions.default}
            className="space-y-6 sm:space-y-8 max-w-full lg:max-w-md"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-medium text-zinc-950 text-center sm:text-left">
              Mentera connects with 50+ apps
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-zinc-950 text-center sm:text-left">
              Connect every tool you use today into one platform. Mentera
              becomes the control center for your entire practice.
            </p>
            <p className="text-sm sm:text-base text-gray-400 font-medium text-center sm:text-left">
              If we don't have a current integration, we will build it.
            </p>
          </motion.div>

          {/* Right Side - Animated Logo Rows with Faded Overlays */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig.once}
            variants={fadeInRight}
            transition={transitions.withDelay(0.2)}
            className="relative overflow-hidden"
          >
            <div className="space-y-4">
              {/* Row 1 - Left to Right */}
              <div
                className="relative overflow-hidden py-2"
                style={maskGradientStyle}
              >
                <div className="flex gap-6 animate-scroll-left will-change-transform">
                  {duplicatedRows[0].map((app, index) => (
                    <div
                      key={`row1-${index}`}
                      className="flex-shrink-0 bg-gray-50 rounded-xl p-3 h-[4rem] w-[4rem] flex items-center justify-center border border-gray-200 shadow-md hover:border-purple-300 hover:shadow-lg transition-all"
                    >
                      <img
                        src={`/app-logos/${app.image}`}
                        alt={app.name}
                        className="w-[2.625rem] h-[2.625rem] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 - Right to Left */}
              <div
                className="relative overflow-hidden py-2"
                style={maskGradientStyle}
              >
                <div className="flex gap-8 animate-scroll-right will-change-transform">
                  {duplicatedRows[1].map((app, index) => (
                    <div
                      key={`row2-${index}`}
                      className="flex-shrink-0 bg-gray-50 rounded-xl p-3 h-[4rem] w-[4rem] flex items-center justify-center border border-gray-200 shadow-md hover:border-purple-300 hover:shadow-lg transition-all"
                    >
                      <img
                        src={`/app-logos/${app.image}`}
                        alt={app.name}
                        className="w-[2.625rem] h-[2.625rem] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3 - Left to Right */}
              <div
                className="relative overflow-hidden py-2"
                style={maskGradientStyle}
              >
                <div className="flex gap-6 animate-scroll-left will-change-transform">
                  {duplicatedRows[2].map((app, index) => (
                    <div
                      key={`row3-${index}`}
                      className="flex-shrink-0 bg-gray-50 rounded-xl p-3 h-[4rem] w-[4rem] flex items-center justify-center border border-gray-200 shadow-md hover:border-purple-300 hover:shadow-lg transition-all"
                    >
                      <img
                        src={`/app-logos/${app.image}`}
                        alt={app.name}
                        className="w-[2.625rem] h-[2.625rem] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

IntegrationsSection.displayName = "IntegrationsSection";
