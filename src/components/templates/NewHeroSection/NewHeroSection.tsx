"use client";

import { Button } from "@/components/atoms/Button/Button";
import { HubSpotFormDialog } from "@/components/molecules/HubSpotFormDialog/HubSpotFormDialog";
import { useScreenSize } from "@/hooks/useScreenSize";
import { motion } from "framer-motion";
import { useState } from "react";

export const NewHeroSection = () => {
  const { isMobile } = useScreenSize();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-visible sm:overflow-hidden mb-0">
      {/* Content */}
      <div className="max-w-8xl h-full relative z-10 w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-24 pb-0 sm:pb-20 py-20 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center p-0 sm:p-6 max-w-screen h-full ">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-full lg:max-w-120 text-center sm:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl -mb-1 md:mb-1 leading-tight sm:leading-normal font-bold text-zinc-950">
              <span className="bg-gradient-to-r from-purple-500 to-purple bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
                AI Assistant
              </span>{" "}
              for Private Medical Practices
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-[1.3] text-zinc-950 mt-4 sm:mt-5 md:mt-6 mb-6 sm:mb-7 md:mb-8">
              Give your employee an{" "}
              <span className="font-bold">AI Assistant</span> that puts your
              company's knowledge to work.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start justify-center sm:justify-start">
              <Button
                variant="purple"
                size="md"
                showArrow
                className="rounded-full font-bold"
                onClick={() => setIsDialogOpen(true)}
              >
                Get a Demo
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Hero Image with Rings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full flex items-start sm:items-center justify-center mt-8 lg:mt-0 max-w-screen overflow-hidden sm:overflow-visible sm:h-auto h-[56vh] p-5 sm:p-0"
          >
            <div className="relative w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[28rem] lg:max-w-[31.25rem] aspect-square flex items-center justify-center overflow-visible flex-wrap ">
              {/* Outer Ring - 500x500 - Rotates Clockwise */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible"
                  viewBox="-40 -40 580 580"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="ringGradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="rgb(168, 85, 247)"
                        stopOpacity="0.3"
                      />
                      <stop
                        offset="100%"
                        stopColor="rgb(236, 72, 153)"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="250"
                    cy="250"
                    r="280"
                    fill="none"
                    stroke="url(#ringGradient1)"
                    strokeWidth="2"
                  />
                </svg>

                {/* 4 Icons on Outer Ring - positioned with CSS */}
                <motion.div
                  className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] -top-6 sm:-top-7 md:-top-8 left-1/2 -translate-x-1/2"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-white rounded-xl p-2 border border-gray-200 shadow-md">
                    <img
                      src="/app-logos/app-drchrono.png"
                      alt="DrChrono"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] top-1/2 -right-6 sm:-right-7 md:-right-8 -translate-y-1/2"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-white rounded-xl p-2 border border-gray-200 shadow-md">
                    <img
                      src="/app-logos/app-gmail.png"
                      alt="Gmail"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] -bottom-6 sm:-bottom-7 md:-bottom-8 left-1/2 -translate-x-1/2"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-white rounded-xl p-2 border border-gray-200 shadow-md">
                    <img
                      src="/app-logos/app-hubspot.png"
                      alt="HubSpot"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] top-1/2 -left-6 sm:-left-7 md:-left-8 -translate-y-1/2"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-white rounded-xl p-2 border border-gray-200 shadow-md">
                    <img
                      src="/app-logos/app-athenahealth.png"
                      alt="Athenahealth"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Inner Ring - 400x400 - Rotates Counter-Clockwise */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible"
                  viewBox="-40 -40 580 580"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="ringGradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="rgb(168, 85, 247)"
                        stopOpacity="0.4"
                      />
                      <stop
                        offset="100%"
                        stopColor="rgb(236, 72, 153)"
                        stopOpacity="0.4"
                      />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="250"
                    cy="250"
                    r="200"
                    fill="none"
                    stroke="url(#ringGradient2)"
                    strokeWidth="2"
                  />
                </svg>

                {/* 3 Icons on Inner Ring - positioned with CSS - 120° intervals */}
                {/* Top icon at 270° (top of circle) */}
                <motion.div
                  className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] top-8 sm:top-10 md:top-12 left-1/2 -translate-x-1/2"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "center" }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-white rounded-xl p-2 border border-gray-200 shadow-md">
                    <img
                      src="/app-logos/app-teams.png"
                      alt="Microsoft Teams"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                {/* Bottom-left icon at 150° */}
                <motion.div
                  className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] bottom-32 sm:bottom-40 md:bottom-52 left-6 sm:left-8 md:left-12"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "center" }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-white rounded-xl p-2 border border-gray-200 shadow-md">
                    <img
                      src="/app-logos/app-google-drive.png"
                      alt="Google Drive"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                {/* Bottom-right icon at 30° */}
                <motion.div
                  className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] bottom-32 sm:bottom-40 md:bottom-52 right-6 sm:right-8 md:right-12"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "center" }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-white rounded-xl p-2 border border-gray-200 shadow-md">
                    <img
                      src="/app-logos/app-slack.png"
                      alt="Slack"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero Video */}
              <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64">
                <div className="w-full h-full relative rounded-full overflow-hidden">
                  <video
                    src="/videos/orb.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-full"
                    aria-label="Hero Section"
                  />
                  {isMobile && (
                    <>
                      {/* Fading overlay to blend edges with background */}
                      <div
                        className="absolute inset-0 pointer-events-none rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle, transparent 55%, rgba(255,255,255,0.05) 70%, rgba(255,255,255,0.12) 80%, rgba(255,255,255,0.25) 90%, rgba(255,255,255,0.4) 97%, rgba(255,255,255,0.6) 100%)",
                        }}
                      />
                      {/* Mask to ensure clean edges */}
                      <div
                        className="absolute inset-0 pointer-events-none rounded-full"
                        style={{
                          WebkitMaskImage:
                            "radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.75) 80%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0.2) 97%, rgba(0,0,0,0) 100%)",
                          maskImage:
                            "radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.75) 80%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0.2) 97%, rgba(0,0,0,0) 100%)",
                        }}
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Ask anything to Tera - Search bar on the orb */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute sm:top-[48%] top-36 left-24 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:left-[33.5%] z-20"
              >
                <div className="flex items-center gap-1 sm:gap-2 bg-black/20 backdrop-blur-md rounded-full px-1 py-1">
                  <svg
                    width="16"
                    height="16"
                    className="sm:w-5 sm:h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
                    Ask anything to Tera
                  </span>
                </div>
              </motion.div>

              {/* Tera Assistant Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-24 sm:-bottom-16 md:-bottom-18 -left-[20px] -translate-x-1/2 sm:translate-x-0 sm:-left-12 z-20 w-[calc(100%-2rem)] sm:w-[18rem] md:w-[20rem] lg:w-[22.5rem] max-w-[22.5rem]"
              >
                <div
                  className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(139,92,246,0.3)] p-4 sm:p-5 md:p-6 border-[2px] sm:border-[3px] border-transparent bg-clip-padding"
                  style={{
                    background:
                      "linear-gradient(white, white) padding-box, linear-gradient(to right, rgb(220, 168, 224), rgb(77, 40, 223)) border-box",
                  }}
                >
                  {/* Header */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-5 bg-purple-100 rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2">
                    <img
                      src="/icons/sparkle.svg"
                      alt="Sparkle"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <span className="text-purple-600 font-semibold text-xs sm:text-sm">
                      Tera Assistant
                    </span>
                  </div>

                  {/* Question */}
                  <h3 className="text-zinc-950 font-bold text-base sm:text-lg mb-3 sm:mb-4 leading-snug">
                    Which patients missed their follow-ups this week?
                  </h3>

                  {/* List */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-zinc-900 flex-shrink-0 mt-0.5 sm:w-[18px] sm:h-[18px]"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-zinc-900 text-xs sm:text-sm leading-relaxed">
                        3 missed follow-ups identified in Patient Portal
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-zinc-900 flex-shrink-0 mt-0.5 sm:w-[18px] sm:h-[18px]"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-zinc-900 text-xs sm:text-sm leading-relaxed">
                        SMS reminders pending via Twilio
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-zinc-900 flex-shrink-0 mt-0.5 sm:w-[18px] sm:h-[18px]"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-zinc-900 text-xs sm:text-sm leading-relaxed">
                        Follow-up logs synced with Salesforce
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* HubSpot Form Dialog */}
      <HubSpotFormDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </section>
  );
};
