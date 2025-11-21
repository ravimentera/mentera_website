"use client";

import { cn } from "@/lib/utils";
import { fadeInUp, transitions, viewportConfig } from "@/lib/animations";
import { HTMLMotionProps, motion } from "framer-motion";
import React, { memo, useMemo } from "react";

interface CardProps
  extends Omit<HTMLMotionProps<"div">, "className" | "children"> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
  variant?: "default" | "outlined" | "elevated";
  delay?: number;
}

const variantStyles = {
  default: "bg-white",
  outlined: "bg-white border border-gray-200",
  elevated: "bg-white shadow-lg",
} as const;

export const Card = memo(({
  children,
  className,
  hoverEffect = true,
  variant = "default",
  delay = 0,
  ...props
}: CardProps) => {
  const variantClass = useMemo(() => variantStyles[variant], [variant]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig.onceWithMargin}
      variants={fadeInUp}
      transition={transitions.withDelay(delay)}
      className={cn(
        "rounded-xl p-6 transition-all duration-300",
        variantClass,
        hoverEffect && "hover:shadow-lg hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = "Card";
