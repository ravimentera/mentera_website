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
    imageSrc: "/expert-1.png",
    class: "scale-[1.10]",
  },
  {
    id: 2,
    title: "Intelligent Scheduling",
    description:
      "Automatically fill your calendar, managing waitlists, and optimizing provider availability without manual effort.",
    imageSrc: "/expert-2.png",
    class: "scale-125",
  },
  {
    id: 3,
    title: "Bespoke Pre & Post Patient Care",
    description:
      "Personalized messages to prepare patients for appointments and essential post-care educational materials in your practitioners voice.",
    imageSrc: "/expert-3.png",
    class: "scale-125",
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
        <h2 className="heading-h2 text-center mb-8 md:mb-12 lg:mb-16">
          <ShinyGradientText>
            Use Mentera&apos;s AI Assistant for
          </ShinyGradientText>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left side (cards) */}
          <div
            ref={leftRef}
            className="space-y-6 col-span-12 lg:col-span-6 order-2 lg:order-1"
          >
            {expertiseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div
                  onClick={() => setActiveItem(item)}
                  className={cn(
                    "rounded-xl p-5 transition-all duration-300 cursor-pointer border",
                    activeItem.id === item.id
                      ? "bg-primary text-white shadow-lg border-primary"
                      : "text-gray-800 border border-gray-200 hover:bg-gray-100 hover:border-primary/50"
                  )}
                >
                  <h4
                    className={cn(
                      "heading-h4 mb-2",
                      activeItem.id === item.id ? "text-white" : "text-primary"
                    )}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={cn(
                      "text-body-1",
                      activeItem.id === item.id
                        ? "text-white"
                        : "text-text-secondary"
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side (image) */}
          <div
            className={cn(
              "relative col-span-12 lg:col-span-6 order-1 lg:order-2 mb-12 lg:mb-0 flex justify-center items-center"
            )}
            style={{
              height: syncedHeight ? `${syncedHeight}px` : undefined,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-[520px] px-4 md:px-8 h-full"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={activeItem.imageSrc}
                    alt={activeItem.title}
                    fill
                    className={`object-contain lg:object-contain ${activeItem.class}`}
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
