// src/components/molecules/FloatingCard/FloatingCard.tsx
import { motion, MotionProps } from "framer-motion";
import React from "react";

interface FloatingCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string; // For positioning and additional styles
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
      className={`absolute w-fit p-4 backdrop-blur-md rounded-xl shadow-lg flex flex-col space-y-2 ${className}`}
      {...animationProps} // Spread animation props here
    >
      <div
        className={`flex space-x-4 ${
          subtitle ? "items-start" : "items-center"
        }`}
      >
        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          {/* Placeholder Icon Area */}
          {icon || <div className="w-5 h-5 bg-blue-300 rounded"></div>}
        </div>
        <div className="flex-grow">
          <h3
            className="text-sm font-semibold text-gray-800 leading-3"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h3>
          {subtitle && <p className="text-xs text-gray-700 mt-3">{subtitle}</p>}
        </div>
      </div>
      {children && <div className="pt-2">{children}</div>}
    </motion.div>
  );
};
