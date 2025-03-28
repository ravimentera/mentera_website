"use client";

import { ShinyGradientText } from "@/components/atoms/ShinyGradientText/ShinyGradientText";
import { EmailCaptureInput } from "@/components/molecules/EmailCaptureInput/EmailCaptureInput";
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

  const handleEmailSubmit = (email: string) => {
    console.log("Email submitted:", email);
    // Add your email submission logic here
  };

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
    <section className="relative w-full min-h-screen bg-transparent overflow-hidden">
      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 pt-32 md:pt-48 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] flex flex-col justify-center items-center"
        >
          <h1 className="text-4xl flex flex-col justify-center items-center sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-[-0.02em] font-medium text-[#111827] mb-4 sm:mb-8">
            <ShinyGradientText>Spend less time on admin, </ShinyGradientText>
            <ShinyGradientText>more on patient care.</ShinyGradientText>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center text-[#374151] leading-relaxed mb-8 sm:mb-12 max-w-[660px]">
              You shouldn't have to choose between growing your medspa and keeping your sanity.
              Mentera handles your overwhelming tasks, freeing you to deliver experiences your clients love.
          </p>

          <div className="space-y-4">
            <p className="text-[#6B7280]">
              Be among the first practices to experience the future of patient
              care.
            </p>

            <EmailCaptureInput onSubmit={handleEmailSubmit} />
          </div>
        </motion.div>
      </div>

      {/* Remove background gradient divs since they're now in the ParticleBackground component */}
    </section>
  );
};
