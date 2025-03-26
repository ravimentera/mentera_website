"use client";

import { Button } from "@/components/atoms/Button/Button";
import { Input } from "@/components/atoms/Input/Input";
import { Navigation } from "@/components/organisms/Navigation";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  // Mouse position for interactive background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothed mouse values
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  // Transform mouse position to gradient position with limited movement range
  const gradient1X = useTransform(smoothMouseX, [-500, 500], ["-10%", "10%"]);
  const gradient1Y = useTransform(smoothMouseY, [-500, 500], ["-10%", "10%"]);
  const gradient2X = useTransform(smoothMouseX, [-500, 500], ["10%", "-10%"]);
  const gradient2Y = useTransform(smoothMouseY, [-500, 500], ["10%", "-10%"]);

  // Additional gradient transformations
  const gradient3X = useTransform(smoothMouseX, [-500, 500], ["5%", "-5%"]);
  const gradient3Y = useTransform(smoothMouseY, [-500, 500], ["5%", "-5%"]);
  const gradient4X = useTransform(smoothMouseX, [-500, 500], ["-5%", "5%"]);
  const gradient4Y = useTransform(smoothMouseY, [-500, 500], ["-5%", "5%"]);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse coordinates relative to the center of the screen
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="flex flex-col max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 pt-32 md:pt-48 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px]"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-[-0.02em] font-lexend font-medium text-[#111827] mb-4 sm:mb-8">
            <motion.span
              className="inline-block relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Spend less time on admin,{" "}
            </motion.span>
            <motion.span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-500 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              more on patient care.
              {/* Shiny effect overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out transform -skew-x-12" />
            </motion.span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#374151] font-outfit leading-relaxed mb-8 sm:mb-12 max-w-[660px]">
            Automate patient follow-ups, streamline reminders, and quickly
            access detailed patient insights—all in one easy-to-use platform
            built for med spas.
          </p>

          <div className="space-y-4">
            <p className="text-[#6B7280] font-outfit">
              Be among the first practices to experience the future of patient
              care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                className="w-full sm:w-[360px] text-lg"
                placeholder="Enter your email"
              />
              <Button className="px-10 text-lg" showArrow={true}>
                Join the beta waitlist
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Gradients - With enhanced default animations and mouse reactivity */}
      {mounted && (
        <>
          {/* Primary top-right concentrated circle */}
          <motion.div
            className="absolute top-[10%] right-[15%] w-[300px] h-[300px] bg-gradient-to-bl from-purple-500/40 via-purple-400/20 to-transparent rounded-full blur-[25px]"
            style={{
              x: gradient1X,
              y: gradient1Y,
            }}
            animate={{
              scale: [1, 1.1, 0.95, 1.05, 1],
              x: [0, 15, -10, 5, 0],
              y: [0, -10, 15, -5, 0],
              opacity: [0.8, 1, 0.9, 0.95, 0.8],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.3,
              opacity: 1,
              filter: "blur(15px)",
              transition: { duration: 0.2 },
            }}
          />

          {/* Secondary smaller right-side circle */}
          <motion.div
            className="absolute top-[40%] right-[20%] w-[200px] h-[200px] bg-gradient-to-tr from-teal-500/30 via-teal-400/20 to-transparent rounded-full blur-[20px]"
            style={{
              x: gradient2X,
              y: gradient2Y,
            }}
            animate={{
              scale: [1, 0.9, 1.15, 1.05, 1],
              x: [0, -20, 10, -5, 0],
              y: [0, 10, -15, 5, 0],
              opacity: [0.7, 0.9, 0.8, 1, 0.7],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 1.5,
            }}
            whileHover={{
              scale: 1.25,
              opacity: 1,
              filter: "blur(10px)",
              transition: { duration: 0.2 },
            }}
          />

          {/* Subtle background larger gradient for overall color wash */}
          <motion.div
            className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/15 via-teal-400/10 to-transparent rounded-full blur-[80px]"
            style={{
              x: gradient3X,
              y: gradient3Y,
            }}
            animate={{
              scale: [1, 1.03, 0.98, 1.02, 1],
              x: [0, 30, -20, 10, 0],
              y: [0, -25, 15, -5, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />

          {/* Bottom-left subtle gradient */}
          <motion.div
            className="absolute bottom-[-5%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/15 to-transparent rounded-full blur-[70px]"
            style={{
              x: gradient4X,
              y: gradient4Y,
            }}
            animate={{
              scale: [1, 1.04, 0.97, 1.03, 1],
              x: [0, -35, 15, -5, 0],
              y: [0, 20, -10, 5, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </>
      )}
    </section>
  );
};
