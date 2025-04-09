"use client";

import React from "react";
import Image from "next/image";
import { motion, useTransform, MotionValue } from "framer-motion";
import CircleAnimate from "@/assets/icons/circle.svg"; // Corrected path

// Define the structure for text content
interface TextContent {
  id: number;
  title: string;
  description: string;
  position: "left" | "right";
}

// Text content data - Reordered to match Left -> Right -> Left
const textContents: TextContent[] = [
  {
    id: 1,
    title: "Data-Driven Personalization",
    description:
      "Ingest and analyze your practice's data, transforming it into actionable insights. This personalized approach creates a tailored AI assistant uniquely suited for your practice.",
    position: "left",
  },
  {
    id: 2, // Changed ID to reflect order
    title: "Intelligent Next Steps",
    description:
      "Using these data signals, we proactively recommend optimal strategies across your back-office operations, including patient communication, scheduling, marketing, and overall management.",
    position: "right",
  },
  {
    id: 3, // Changed ID to reflect order
    title: "Continuous Learning & Optimization",
    description:
      "Mentera continuously learns from every patient interaction. By quickly identifying and amplifying effective strategies in real-time, it evolves into your practice's smartest assistant, continuously enhancing efficiency and patient experiences.",
    position: "left",
  },
];

// Component for individual text block animation
const AnimatedText = ({
  content,
  scrollYProgress,
}: {
  content: TextContent;
  scrollYProgress: MotionValue<number>;
}) => {
  // Define scroll ranges based on ID and total items
  const numItems = textContents.length;
  const sectionDuration = 1 / numItems; // Divide total progress (0 to 1) by number of items
  const startRange = (content.id - 1) * sectionDuration; // Start appearing at the beginning of the item's segment
  const peakRangeStart = startRange + sectionDuration * 0.35; // Fully visible shortly after start
  const peakRangeEnd = startRange + sectionDuration * 0.65; // Start fading out before the next item starts
  const endRange = startRange + sectionDuration; // Fully disappeared when the next item's segment begins

  // Opacity: Fade in -> Stay visible -> Fade out
  const opacity = useTransform(
    scrollYProgress,
    [startRange, peakRangeStart, peakRangeEnd, endRange],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [startRange, peakRangeStart, peakRangeEnd, endRange],
    ["60px", "0px", "0px", "-30px"] // More visible lift
  );

  return (
    <motion.div
      style={{ opacity, y }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute inset-0 flex items-center justify-start"
    >
      <div className="text-left max-w-md">
        <h2 className="heading-h5 text-black">
          {content.title}
        </h2>
        <p className="text-body-1 text-text-secondary">
          {content.description}
        </p>
      </div>
    </motion.div>
  );
};

// Accept scrollYProgress from the parent component
const DetailSection = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  // Filter text content for left and right positions
  const leftTexts = textContents.filter((t) => t.position === "left");
  const rightTexts = textContents.filter((t) => t.position === "right");

  return (
    // Make the section itself sticky within the parent wrapper
    <motion.section className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
      {/* Use the container for padding and centering the overall layout */}
      <div className="container mx-auto px-10 flex items-center justify-between w-full h-full">
        {/* Left Column - Relative positioning needed for absolute children */}
        <div className="w-full lg:w-1/3 flex flex-col justify-end relative h-1/2 pb-16">
          {" "}
          {/* Added relative, adjusted height */}
          {leftTexts.map((content) => (
            <AnimatedText
              key={content.id}
              content={content}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Center Sticky Image - Removed relative positioning */}
        <div className="w-full lg:w-auto flex justify-center items-center px-8">
          <Image
            priority
            src={CircleAnimate}
            alt="AI Process Visualization"
            width={450}
            height={450}
            // className="max-w-sm md:max-w-md lg:max-w-lg" // Removed relative -top-48
            className="max-w-sm md:max-w-md lg:max-w-lg relative" // Adjusted max-width and added relative positioning
          />
        </div>

        {/* Right Column - Relative positioning needed for absolute children */}
        <div className="w-full lg:w-1/3 flex flex-col justify-end relative h-1/2 pb-16">
          {" "}
          {/* Added relative, adjusted height */}
          {rightTexts.map((content) => (
            <AnimatedText
              key={content.id}
              content={content}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default DetailSection;