"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useTransform, MotionValue } from "framer-motion";
import CircleAnimate from "@/assets/icons/circle.svg";
import { useBreakpoint } from "@/hooks/useBreakpoint";

// Define the structure for text content
interface TextContent {
  id: number;
  title: string;
  description: string;
  position: "left" | "right"; // Keep this for desktop logic, but mobile will combine
}

// Text content data
const textContents: TextContent[] = [
  {
    id: 1,
    title: "Data-Driven Personalization",
    description:
      "Ingest and analyze your practice’s data, transforming it into actionable insights. This personalized approach creates a tailored AI assistant uniquely suited for your practice.",
    position: "left",
  },
  {
    id: 2,
    title: "Continuous Learning & Optimization",
    description:
      "Mentera continuously learns from every patient interaction. By quickly identifying and amplifying effective strategies in real-time, it evolves into your practice’s smartest assistant, continuously enhancing efficiency and patient experiences.",
    position: "right",
  },
  {
    id: 3,
    title: "Intelligent Next Steps",
    description:
      "Using these data signals, we proactively recommend optimal strategies across your back-office operations, including patient communication, scheduling, marketing, and overall management.",
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
  const numItems = textContents.length;
  const sectionDuration = 1 / numItems;
  const startRange = (content.id - 1) * sectionDuration;
  const peakRangeStart = startRange + sectionDuration * 0.35;
  const peakRangeEnd = startRange + sectionDuration * 0.65;
  const endRange = startRange + sectionDuration;
  const opacity = useTransform(
    scrollYProgress,
    [startRange, peakRangeStart, peakRangeEnd, endRange],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [startRange, peakRangeStart, peakRangeEnd, endRange],
    ["60px", "0px", "0px", "-30px"]
  );

  return (
    // Changed from absolute to relative, centered text on mobile
    <motion.div
      style={{ opacity, y }}
      transition={{ duration: 1, ease: "easeOut" }}
      // Make this div relative and control its height to contain the text
      // Center text content for mobile, align left for large screens
      className="absolute flex h-[200px] w-full items-center justify-center lg:justify-start"
    >
      <div className="max-w-md text-center lg:text-left">
        <h2 className="heading-h5 text-black">{content.title}</h2>
        <p className="text-body-1 text-text-secondary">{content.description}</p>
      </div>
    </motion.div>
  );
};

// Accept scrollYProgress from the parent component
const DetailSection = ({
  scrollYProgress,
  mainScrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
  mainScrollYProgress: MotionValue<number>;
}) => {
  // Combine all texts for mobile rendering logic, keep separate for desktop logic
  const leftTexts = textContents.filter((t) => t.position === "left");
  const rightTexts = textContents.filter((t) => t.position === "right");
  const breakpoint = useBreakpoint();
  const endTop = 0;

  const [startTop, setStartTop] = useState<number | null>(null);
  const [imageY, setImageY] = useState("0rem");

  // Wait until breakpoint is available
  useEffect(() => {
    if (!breakpoint) return;

    let value = -25; // Default for lg and up

    if (["xs", "sm"].includes(breakpoint)) {
      value = -15;
    } else if (breakpoint === "md") {
      value = -15;
    }

    setStartTop(value);
    setImageY(`${value}rem`);
  }, [breakpoint]);

  // Animate only when startTop is set
  useEffect(() => {
    if (startTop === null) return;

    const unsubscribe = mainScrollYProgress.onChange((v) => {
      const t = Math.min(Math.max(v * 10, 0), 1);
      const interpolatedTop = startTop + (endTop - startTop) * t;

      setImageY(`${interpolatedTop}rem`);
    });

    return () => unsubscribe();
  }, [mainScrollYProgress, startTop]);

  return (
    // Make the section sticky and relative for absolute positioning context
    <motion.section className="sticky top-0 h-screen flex items-center justify-center">
      {/* Main container: Column layout on mobile, Row on large screens */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full h-full relative">
        {/* Left Column (Visible on LG, part of stacked content on mobile) */}
        {/* Order 1 on all screens, takes full width on mobile, 1/3 on LG */}
        {/* Increased z-index to be above the image on mobile */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start justify-center relative z-10 order-1 lg:order-1 h-auto lg:h-1/2">
          {/* Render left texts */}
          {leftTexts.map((content) => (
            <AnimatedText
              key={content.id}
              content={content}
              scrollYProgress={scrollYProgress}
            />
          ))}
          {/* Spacer for mobile layout to push content up if needed, hidden on lg */}
          <div className="h-24 lg:hidden"></div>
        </div>

        {/* Center Sticky Image Container */}
        {/* Takes full width behind content on mobile (absolute, z-0), specific width and relative on LG (z-auto) */}
        {/* Order 3 on mobile (visually appears behind due to z-index), Order 2 on LG */}
        {/* <div className="absolute -top-120 inset-0 flex justify-center items-center z-0 lg:relative lg:w-auto lg:z-auto order-3 lg:order-2 lg:px-8">
          <Image
            priority
            src={CircleAnimate}
            alt="AI Process Visualization"
            width={450}
            height={450}
            // Adjusted max-width for different screens
            className="max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div> */}

        <div className="absolute inset-0 flex justify-center items-center z-0 lg:relative lg:w-auto lg:z-auto order-3 lg:order-2 lg:px-8">
          {/* Motion div for animating the image position */}
          <motion.div
            // No initial prop needed if state handles initial value and useEffect checks on mount
            animate={{ y: imageY }} // Animate to state value
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
            // Ensure the motion div itself doesn't disrupt layout unduly
            className="flex justify-center items-center"
          >
            <Image
              priority
              src={CircleAnimate}
              alt="AI Process Visualization"
              width={450}
              height={450}
              // Adjusted max-width for different screens
              className="max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </motion.div>
        </div>

        {/* Right Column (Visible on LG, part of stacked content on mobile) */}
        {/* Order 2 on mobile, Order 3 on LG */}
        {/* Increased z-index to be above the image on mobile */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start justify-center relative z-10 order-2 lg:order-3 h-auto lg:h-1/2">
          {/* Render right texts */}
          {rightTexts.map((content) => (
            <AnimatedText
              key={content.id}
              content={content}
              scrollYProgress={scrollYProgress}
            />
          ))}
          {/* Spacer for mobile layout, hidden on lg */}
          <div className="h-24 lg:hidden"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default DetailSection;
