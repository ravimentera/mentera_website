"use client";

import { Button } from "@/components/atoms/Button/Button";
import { motion } from "framer-motion";

export const NewHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="max-w-8xl relative z-10 w-full mx-auto px-24 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content - Exact Figma styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-120"
          >
            <div className="flex flex-col">
              <p className="text-5xl -mb-4 leading-normal font-bold text-zinc-950">
                Your entire business,
              </p>
              <div className="flex gap-3 items-start text-5xl leading-normal font-bold">
                <span className="bg-gradient-to-r from-purple-500 to-purple bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
                  one search
                </span>
                <span className="text-zinc-950">away</span>
              </div>
            </div>
            <p className="text-xl leading-[1.3] text-zinc-950 mt-4 mb-8">
              Give your employee an{" "}
              <span className="font-bold">AI Assistant</span> that puts your
              company's knowledge to work.
            </p>
            <div className="flex flex-col">
              <div className="flex gap-4 items-start">
                <div className="border border-purple flex-1 pl-6 rounded-full flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-base text-gray-800 placeholder:text-gray-500 outline-none"
                  />
                  <Button
                    variant="purple"
                    size="md"
                    className="text-base rounded-full font-bold whitespace-nowrap"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hero Image with Rings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full flex items-center justify-center"
          >
            <div className="relative w-[31.25rem] h-[31.25rem] flex items-center justify-center overflow-visible">
              {/* Outer Ring - 500x500 - Rotates Clockwise */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 40,
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
                  className="absolute w-[60px] h-[60px] -top-8 left-1/2 -translate-x-1/2"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 40,
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
                  className="absolute w-[60px] h-[60px] top-1/2 -right-8 -translate-y-1/2"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-white rounded-xl p-2 border border-gray-200 shadow-md">
                    <img
                      src="/app-logos/app-salesforce.png"
                      alt="Salesforce"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute w-[60px] h-[60px] -bottom-8 left-1/2 -translate-x-1/2"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-white rounded-xl p-2 border border-gray-200 shadow-md">
                    <img
                      src="/app-logos/app-salesforce.png"
                      alt="Salesforce"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute w-[60px] h-[60px] top-1/2 -left-8 -translate-y-1/2"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-white rounded-xl p-2 border border-gray-200 shadow-md">
                    <img
                      src="/app-logos/app-dropbox.png"
                      alt="Dropbox"
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
                  duration: 30,
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
                  className="absolute w-[60px] h-[60px] top-12 left-1/2 -translate-x-1/2"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
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
                  className="absolute w-[60px] h-[60px] bottom-52 left-12"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
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
                  className="absolute w-[60px] h-[60px] bottom-52 right-12"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
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

              {/* Hero Image */}
              <img
                src="/images/orb.gif"
                alt="Hero Section"
                className="relative z-10 w-64 h-64"
              />

              {/* Ask anything to Tera - Search bar on the orb */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute top-[48%] left-[32%] -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-1 py-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white text-sm font-medium whitespace-nowrap">
                    Ask anything to Tera
                  </span>
                </div>
              </motion.div>

              {/* Tera Assistant Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-18 -left-12 z-20 w-[22.5rem]"
              >
                <div
                  className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(139,92,246,0.3)] p-6 border-[3px] border-transparent bg-clip-padding"
                  style={{
                    background:
                      "linear-gradient(white, white) padding-box, linear-gradient(to right, rgb(220, 168, 224), rgb(77, 40, 223)) border-box",
                  }}
                >
                  {/* Header */}
                  <div className="inline-flex items-center gap-2 mb-5 bg-purple-100 rounded-full px-3 py-2">
                    <img
                      src="/icons/sparkle.svg"
                      alt="Sparkle"
                      className="w-5 h-5"
                    />
                    <span className="text-purple-600 font-semibold text-sm">
                      Tera Assistant
                    </span>
                  </div>

                  {/* Question */}
                  <h3 className="text-zinc-950 font-bold text-lg mb-4 leading-snug">
                    Which patients missed their follow-ups this week?
                  </h3>

                  {/* List */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-zinc-900 flex-shrink-0 mt-0.5"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-zinc-900 text-sm leading-relaxed">
                        3 missed follow-ups identified in Patient Portal
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-zinc-900 flex-shrink-0 mt-0.5"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-zinc-900 text-sm leading-relaxed">
                        SMS reminders pending via Twilio
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-zinc-900 flex-shrink-0 mt-0.5"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-zinc-900 text-sm leading-relaxed">
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
    </section>
  );
};
