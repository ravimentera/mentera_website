"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  iconClassName?: string;
  delay?: number;
}

export const FeatureCard = ({
  title,
  description,
  icon,
  className,
  iconClassName,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "p-6 rounded-2xl border border-[#E5E7EB] bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
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
      <h3 className="text-xl font-bold mb-2 font-lexend text-[#111827]">
        {title}
      </h3>
      <p className="text-[#4B5563] font-outfit">{description}</p>
    </motion.div>
  );
};
