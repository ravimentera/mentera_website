"use client";

import { Button } from "@/components/atoms/Button/Button";
import { CustomParticleBackground } from "@/components/atoms/CustomParticleBackground";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AccessibleAISection = () => {
  const [activeTab, setActiveTab] = useState<
    "instant" | "faster" | "customers"
  >("instant");

  const tabs: ("instant" | "faster" | "customers")[] = [
    "instant",
    "faster",
    "customers",
  ];

  // Get current tab index for layout alternation
  const currentTabIndex = tabs.indexOf(activeTab);
  const isEvenSlide = currentTabIndex % 2 === 1; // 0-based index, so 1st slide (index 1) is "even"

  // Auto-rotate tabs every 3 seconds
  useEffect(() => {
    // Only start auto-rotation if there are multiple tabs
    if (tabs.length <= 1) return;

    const interval = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = tabs.indexOf(currentTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [tabs]);

  const tabContent = {
    instant: {
      title: "Know what you need",
      subtitle: "Everything in your business is searchable.",
      features: [
        "Find customer info, notes, and documents instantly",
        "Pull history for any job or appointment",
        "Get quick answers without digging",
      ],
      image: "/images/feature-01.png",
      height: "h-[33.5rem]",
    },
    faster: {
      title: "Work Faster",
      subtitle: "Let AI handle the work.",
      features: [
        "Auto-scribe every conversation",
        "Routine tasks created and completed automatically",
        "Smart suggestions that cut steps out of your workflow",
      ],
      image: "/images/feature-02.png",
      height: "h-[33.5rem]",
    },
    customers: {
      title: "Handle more customers",
      subtitle: "Serve more people without adding more work.",
      features: [
        "Automate intake and follow-ups",
        "Keep jobs moving without manual tracking",
        "Reduce bottlenecks so your team stays ahead",
      ],
      image: "/images/feature-03.png",
      height: "h-[28.5rem]",
    },
  };

  return (
    <section className="relative w-full bg-transparent px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="max-w-8xl mx-auto px-2 sm:px-4 md:px-6 lg:px-24 pt-12 sm:pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-full mx-auto text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl leading-tight sm:leading-normal text-zinc-950">
              <p className="mb-0">
                Your emails, documents
                <span className="hidden sm:inline">
                  , schedules, notes, EHR & CRM data
                </span>
                <span className="sm:hidden">
                  , schedules, notes,
                  <br />
                  EHR & CRM data
                </span>
              </p>
              <p className="font-bold">Accessible in one secure AI</p>
            </div>
            <p className="text-base sm:text-lg leading-normal opacity-80 text-zinc-950 mb-6 sm:mb-8 mt-4 sm:mt-6">
              One place to find what you need and trigger tasks.
            </p>
          </div>

          <div className="flex flex-nowrap items-center sm:flex-wrap overflow-x-auto sm:overflow-x-visible justify-start sm:justify-center gap-2 sm:gap-3 md:gap-4 max-w-full mx-auto mb-8 sm:mb-10 md:mb-14">
            <motion.div
              animate={{
                scale: activeTab === "instant" ? 1.05 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-shrink-0 m-2 sm:my-0"
            >
              <Button
                variant={
                  activeTab === "instant" ? "gradient-outline" : "outline-dark"
                }
                size="sm"
                className="rounded-full font-medium transition-all duration-300 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3"
                onClick={() => setActiveTab("instant")}
              >
                Instant Answers
              </Button>
            </motion.div>
            <motion.div
              animate={{
                scale: activeTab === "faster" ? 1.05 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-shrink-0"
            >
              <Button
                variant={
                  activeTab === "faster" ? "gradient-outline" : "outline-dark"
                }
                size="sm"
                className="rounded-full font-medium transition-all duration-300 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3"
                onClick={() => setActiveTab("faster")}
              >
                Work Faster
              </Button>
            </motion.div>
            <motion.div
              animate={{
                scale: activeTab === "customers" ? 1.05 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-shrink-0"
            >
              <Button
                variant={
                  activeTab === "customers"
                    ? "gradient-outline"
                    : "outline-dark"
                }
                size="sm"
                className="rounded-full font-medium transition-all duration-300 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3"
                onClick={() => setActiveTab("customers")}
              >
                Handle More Customers
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Dynamic Content Section */}
      <div className="relative mx-auto max-w-8xl rounded-3xl bg-gradient-to-br from-purple-100/50 via-cyan-50/30 to-pink-100/40 backdrop-blur-sm border border-white/20">
        {/* Different colored particle background for this section */}
        <CustomParticleBackground
          className="absolute inset-0 -z-10 rounded-3xl"
          particles={[
            {
              color: isEvenSlide ? "#24EDFF" : "#C754CF", // cyan-400 : purple-particle
              opacity: isEvenSlide ? 0.8 : 0.3,
              size: isEvenSlide ? 500 : 600,
              blur: isEvenSlide ? 100 : 120,
              position: { top: "0", left: "0" },
              transform: { x: 0, y: 0 },
            },
            {
              color: isEvenSlide ? "#C754CF" : "#24EDFF", // purple-particle : cyan-400
              opacity: isEvenSlide ? 0.3 : 0.8,
              size: isEvenSlide ? 600 : 500,
              blur: isEvenSlide ? 120 : 100,
              position: { top: "0", right: "0" },
              transform: { x: 0, y: 0 },
            },
          ]}
        />

        <div
          className={`max-w-8xl mx-auto relative overflow-hidden transition-all duration-500 ease-in-out ${tabContent[activeTab].height} min-h-[20rem] sm:min-h-[25rem] md:min-h-[28rem] lg:min-h-0`}
        >
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col lg:block"
          >
            {/* Content Section */}
            <motion.div
              initial={{
                opacity: 0,
                x: isEvenSlide ? 100 : -100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`space-y-4 sm:space-y-6 p-6 sm:p-10 md:p-14 ${
                isEvenSlide
                  ? "lg:absolute lg:right-0 lg:top-16 lg:max-w-[37.5rem]"
                  : "lg:max-w-[37.5rem]"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-zinc-700 leading-relaxed">
                {tabContent[activeTab].subtitle}
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {tabContent[activeTab].features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: isEvenSlide ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm sm:text-base md:text-lg text-zinc-700">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className={`z-0 mt-6 sm:mt-8 ${
                isEvenSlide
                  ? "lg:absolute lg:left-16 lg:top-12 lg:max-w-[37.5rem] lg:mt-0"
                  : "lg:absolute lg:right-16 lg:top-12 lg:max-w-[37.5rem] lg:mt-0"
              }`}
            >
              <div className="relative rounded-[2rem] shadow-xl">
                {/* Gradient border */}
                <div className="absolute inset-0">
                  <div className="backdrop-blur-sm rounded-[calc(2rem-4px)] h-full w-full"></div>
                </div>
                <div className="relative z-10">
                  <img
                    src={tabContent[activeTab].image}
                    alt={tabContent[activeTab].title}
                    className="w-full h-auto rounded-[calc(2rem-4px)]"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Bottom gradient fade to white - placed after content to ensure it's on top */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-30 pointer-events-none rounded-b-2xl"></div>
        </div>
      </div>
    </section>
  );
};
