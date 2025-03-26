"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  enableShine?: boolean;
}

export const GradientText = ({
  children,
  className,
  gradientFrom = "from-purple-600",
  gradientTo = "to-teal-500",
  enableShine = true,
}: GradientTextProps) => {
  return (
    <motion.span
      className={cn(
        "relative inline-block bg-clip-text text-transparent",
        `bg-gradient-to-r ${gradientFrom} ${gradientTo}`,
        "group", // For hover effects on children
        className
      )}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {children}

      {/* Shiny effect */}
      {enableShine && (
        <span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                    opacity-0 group-hover:opacity-100 group-hover:translate-x-full 
                    transition-all duration-1000 ease-in-out transform -skew-x-12
                    pointer-events-none"
        />
      )}
    </motion.span>
  );
};
