"use client";

import { cn } from "@/lib/utils";
import { fadeInUp, transitions, viewportConfig } from "@/lib/animations";
import { motion } from "framer-motion";
import React, { memo } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  iconClassName?: string;
  delay?: number;
}

export const FeatureCard = memo(({
  title,
  description,
  icon,
  className,
  iconClassName,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig.onceWithMargin}
      variants={fadeInUp}
      transition={transitions.withDelay(delay)}
      className={cn(
        "p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-purple-500/20 to-teal-500/20",
          iconClassName
        )}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 font-lexend text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 font-outfit">{description}</p>
    </motion.div>
  );
});

FeatureCard.displayName = "FeatureCard";
