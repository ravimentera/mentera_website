"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
  threshold?: number;
  darkMode?: boolean;
}

export const ScrollSection = ({
  children,
  className,
  id,
  direction = "up",
  delay = 0,
  duration = 0.5,
  staggerChildren = false,
  staggerDelay = 0.1,
  threshold = 0.1,
  darkMode = false,
}: ScrollSectionProps) => {
  // Define animation variants based on direction
  const getVariants = () => {
    // Smaller distance on mobile for subtler animations
    const distance =
      typeof window !== "undefined" && window.innerWidth < 768 ? 30 : 50;

    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren ? staggerDelay : 0,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = getVariants();

  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-16 lg:py-24 overflow-hidden",
        darkMode ? "bg-[#111827] text-white" : "bg-transparent text-[#111827]",
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto">
        {staggerChildren ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: threshold }}
            variants={containerVariants}
          >
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return (
                  <motion.div variants={itemVariants} transition={{ duration }}>
                    {child}
                  </motion.div>
                );
              }
              return child;
            })}
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: threshold }}
            variants={itemVariants}
            transition={{ duration, delay }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};
