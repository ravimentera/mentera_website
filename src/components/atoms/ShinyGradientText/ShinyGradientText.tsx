"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShinyGradientTextProps {
  children: ReactNode;
  className?: string;
  fontSize?: string;
  gradientFrom?: string;
  gradientTo?: string;
  duration?: number;
  hoverEffect?: boolean;
}

export const ShinyGradientText = ({
  children,
  className = "",
  fontSize,
  gradientFrom = "#111A53",
  gradientTo = "#BD05DD",
  duration = 6,
  hoverEffect = true,
}: ShinyGradientTextProps) => {
  return (
    <motion.div
      className={`relative inline-block leading-8 ${className}`}
      style={fontSize ? { fontSize } : {}}
      whileHover={hoverEffect ? { scale: 1.01 } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* Base gradient text */}
      <span
        className="relative text-[40px] font-semibold"
        style={{
          backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
          aria-hidden="true"
          style={{
            mixBlendMode: "overlay",
          }}
        >
          <motion.div
            className="absolute h-full"
            style={{
              width: "30%",
              background:
                "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
              transform: "skewX(-20deg)",
              top: 0,
            }}
            initial={{ left: "-30%" }}
            animate={{ left: "130%" }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1.5,
              duration,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </span>
    </motion.div>
  );
};
