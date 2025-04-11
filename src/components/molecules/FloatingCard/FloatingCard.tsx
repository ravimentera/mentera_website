// src/components/molecules/FloatingCard/FloatingCard.tsx

import { motion, MotionProps } from "framer-motion";
import React from "react";

interface FloatingCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  animationProps?: MotionProps | any;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  icon,
  title,
  subtitle,
  children,
  className = "",
  animationProps = {},
}) => {
  return (
    <motion.div
      className={`absolute w-fit p-3 sm:p-4 bg-white/80 border border-gray-200 rounded-2xl shadow-sm backdrop-blur-md flex flex-col gap-2 ${className}`}
      {...animationProps}
    >
      <div
        className={`flex gap-3 ${subtitle ? "items-start" : "items-center"}`}
      >
        {/* Icon Bubble */}
        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          {icon}
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <h3
            className="text-sm font-medium text-primary leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h3>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
      </div>

      {/* Additional Content */}
      {children && <div className="pt-1">{children}</div>}
    </motion.div>
  );
};
