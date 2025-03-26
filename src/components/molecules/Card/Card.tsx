"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

interface CardProps
  extends Omit<HTMLMotionProps<"div">, "className" | "children"> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
  variant?: "default" | "outlined" | "elevated";
  delay?: number;
}

export const Card = ({
  children,
  className,
  hoverEffect = true,
  variant = "default",
  delay = 0,
  ...props
}: CardProps) => {
  const variantStyles = {
    default: "bg-white",
    outlined: "bg-white border border-[#E5E7EB]",
    elevated: "bg-white shadow-lg",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "rounded-xl p-6 transition-all duration-300",
        variantStyles[variant],
        hoverEffect && "hover:shadow-lg hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
