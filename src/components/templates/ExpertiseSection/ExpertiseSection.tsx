"use client";

import { ShinyGradientText } from "@/components/atoms/ShinyGradientText/ShinyGradientText";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for classnames

interface ExpertiseItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string; // We'll use this later if different images are needed
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
    imageSrc: "/experties.png", // Use the same image for now
  },
  {
    id: 3,
    title: "Bespoke Pre & Post Patient Care",
    description:
      "Personalized messages to prepare patients for appointments and essential post-care educational materials in your practitioners voice.",
    imageSrc: "/experties.png", // Use the same image for now
  },
];

export const ExpertiseSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<ExpertiseItem>(
    expertiseItems[0]
  );

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 md:py-16 lg:py-24">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
          <ShinyGradientText>Use Mentera's AI Assistant for</ShinyGradientText>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Left Side - Clickable Items */}
          <div className="space-y-4 md:space-y-6 col-span-12 lg:col-span-6 order-2 lg:order-1">
            {expertiseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveItem(item)}
                className={cn(
                  "rounded-lg p-4 md:p-6 transition-all duration-300 cursor-pointer border",
                  activeItem.id === item.id
                    ? "bg-[#111A53] text-white shadow-lg border-[#111A53]" // Active item style - no hover change needed here
                    : "text-gray-800 border-transparent hover:bg-[#E8E0FF] hover:border-[#C5AFFF]" // Inactive item style + hover effect only for inactive
                )}
              >
                <h3
                  className={cn(
                    "text-lg sm:text-xl md:text-2xl font-bold mb-2 transition-colors duration-300", // Added transition
                    activeItem.id === item.id
                      ? "text-white"
                      : "text-[#111A53] group-hover:text-[#111A53]" // Keep color on hover for inactive
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "text-sm md:text-base transition-colors duration-300", // Added transition
                    activeItem.id === item.id
                      ? "text-white" // Description color for active
                      : "text-[#1D1D1D] group-hover:text-black" // Change to black on hover for inactive
                  )}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative col-span-12 lg:col-span-6 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0 min-h-[300px] md:min-h-[400px]" // Added min-height
          >
            <motion.div
              key={activeItem.id} // Add key to trigger animation on change
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex justify-center items-center"
            >
              <Image
                src={activeItem.imageSrc} // Use image source from active item
                alt={activeItem.title}
                width={550} // Adjusted size slightly
                height={400} // Adjusted size slightly
                className="max-w-full h-auto object-contain rounded-lg shadow-md" // Added rounded corners and shadow
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
