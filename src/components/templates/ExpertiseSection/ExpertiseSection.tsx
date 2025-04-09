"use client";

import { ShinyGradientText } from "@/components/atoms/ShinyGradientText/ShinyGradientText";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ExpertiseItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const expertiseItems: ExpertiseItem[] = [
  {
    id: 1,
    title: "Personalized Communication & Recommendations",
    description:
      "Personalized next-step recommendations. Know exactly when and how to reach out to each patient - including follow ups, upsell opportunities.",
    imageSrc: "/experties.png",
  },
  {
    id: 2,
    title: "Intelligent Scheduling",
    description:
      "Automatically fill your calendar, managing waitlists, and optimizing provider availability without manual effort.",
    imageSrc: "/experties.png",
  },
  {
    id: 3,
    title: "Bespoke Pre & Post Patient Care",
    description:
      "Personalized messages to prepare patients for appointments and essential post-care educational materials in your practitioners voice.",
    imageSrc: "/experties.png",
  },
];

export const ExpertiseSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<ExpertiseItem>(expertiseItems[0]);

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 md:py-16 lg:py-24">
      <div className="container mx-auto">
        <h2 className="heading-h2 text-center mb-8 md:mb-12 lg:mb-16">
          <ShinyGradientText>Use Mentera&apos;s AI Assistant for</ShinyGradientText>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Left Side - Items */}
          <div className="space-y-4 md:space-y-6 col-span-12 lg:col-span-6 order-2 lg:order-1">
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
                    "rounded-lg p-4 md:p-6 transition-all duration-300 cursor-pointer border",
                    activeItem.id === item.id
                      ? "bg-primary text-white shadow-lg border-primary"
                      : "text-gray-800 border-transparent hover:bg-[#E8E0FF] hover:border-[#C5AFFF]"
                  )}
                >
                  <h4
                    className={cn(
                      "heading-h4 mb-2 transition-colors duration-300",
                      activeItem.id === item.id ? "text-white" : "text-primary"
                    )}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={cn(
                      "text-body-1 transition-colors duration-300",
                      activeItem.id === item.id ? "text-white" : "text-text-primary"
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Image */}
          {/* Increased bottom margin on mobile (mb-12) and kept no margin on large screens (lg:mb-0) */}
          <div className="relative col-span-12 lg:col-span-6 flex justify-center items-center order-1 lg:order-2 mb-12 lg:mb-0 min-h-[300px] md:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full flex justify-center items-center absolute"
              >
                <Image
                  src={activeItem.imageSrc}
                  alt={activeItem.title}
                  width={550}
                  height={400}
                  className="max-w-full h-auto object-contain rounded-lg shadow-md"
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
