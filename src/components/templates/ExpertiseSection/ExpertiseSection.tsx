"use client";

import { ShinyGradientText } from "@/components/atoms/ShinyGradientText/ShinyGradientText";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useSyncedHeight } from "@/hooks/useSyncedHeight"; // <-- import hook

interface ExpertiseItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  class?: string;
}

const expertiseItems: ExpertiseItem[] = [
  {
    id: 1,
    title: "Personalized Communication & Recommendations",
    description:
      "Personalized next-step recommendations. Know exactly when and how to reach out to each patient - including follow ups, upsell opportunities.",
    imageSrc: "/Personalized_Communication.png",
    // class: "scale-[1.10]",
  },
  {
    id: 2,
    title: "Intelligent Scheduling",
    description:
      "Automatically fill your calendar, managing waitlists, and optimizing provider availability without manual effort.",
    imageSrc: "/Intelligent_Scheduling.png",
    // class: "scale-125",
  },
  {
    id: 3,
    title: "Bespoke Pre & Post Patient Care",
    description:
      "Personalized messages to prepare patients for appointments and essential post-care educational materials in your practitioners voice.",
    imageSrc: "/Pre_Post_Patient _Care.png",
    // class: "scale-125",
  },
];

export const ExpertiseSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<ExpertiseItem>(
    expertiseItems[0]
  );

  const leftRef = useRef<HTMLDivElement>(null);
  const syncedHeight = useSyncedHeight(leftRef);

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 md:py-16 lg:py-24">
      <div className="container mx-auto">
        <h2 className="heading-h2 text-center mb-8 md:mb-12 lg:mb-16 gradient-text-2">
            Use Mentera&apos;s AI Assistant for
        </h2>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-start">
          {/* Left side (cards) / Accordion container */}
          <div
            ref={leftRef}
            className="space-y-6 col-span-12 lg:col-span-6 order-1 w-full"
          >
            {expertiseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="overflow-hidden rounded-xl border"
                style={{
                  borderColor: activeItem.id === item.id ? 'var(--color-primary)' : '#e5e7eb',
                }}
              >
                {/* Clickable Header with Arrow (conditionally flex) */}
                <div
                  onClick={() => setActiveItem(item.id === activeItem.id ? expertiseItems[0] : item)}
                  className={cn(
                    "p-5 transition-colors duration-300 cursor-pointer",
                    "flex items-center justify-between lg:block", // Flex for mobile, block for desktop
                    activeItem.id === item.id
                      ? "bg-primary text-white"
                      : "text-gray-800 hover:bg-gray-100"
                  )}
                >
                  {/* Title and Description Group (for layout) */}
                  <div>
                    <h4
                      className={cn(
                        "heading-h4",
                        "mb-2", // Add margin back for desktop
                        activeItem.id === item.id ? "text-white" : "text-primary"
                      )}
                    >
                      {item.title}
                    </h4>
                    {/* Description (always visible in header block) */}
                    <p
                      className={cn(
                        "text-body-1 hidden lg:block", // Hide on mobile, show on desktop
                        activeItem.id === item.id
                          ? "text-white"
                          : "text-text-secondary"
                      )}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow Icon (Mobile Only) */}
                  <motion.span
                    animate={{ rotate: activeItem.id === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 lg:hidden" // Hide arrow on desktop
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn(activeItem.id === item.id ? "stroke-white" : "stroke-primary")}><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </motion.span>
                </div>

                {/* Accordion Content (Image Only for Mobile) */}
                <AnimatePresence>
                  {activeItem.id === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden lg:hidden bg-gray-50"
                    >
                      {/* Image Container */}
                      <div className="relative w-full h-64 p-5"> {/* Adjusted padding */}
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1023px) 90vw, 1px"
                          quality={100}
                          className={`object-contain [image-rendering:-webkit-optimize-contrast] ${item.class || ''}`}
                          priority={index === 0}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right side (image) - Desktop only */}
          <div
            className={cn(
              "relative col-span-12 lg:col-span-6 order-2 lg:mb-0 justify-center items-center w-full",
              "hidden lg:flex"
            )}
            style={{
              height: syncedHeight ? `${syncedHeight}px` : 'auto',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full px-4 md:px-8"
              >
                <Image
                  src={activeItem.imageSrc}
                  alt={activeItem.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 1px"
                  quality={100}
                  className={`object-contain [image-rendering:-webkit-optimize-contrast] ${activeItem.class || ''}`}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
