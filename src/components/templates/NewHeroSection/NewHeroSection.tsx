"use client";

import { Button } from "@/components/atoms/Button/Button";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export const NewHeroSection = () => {
  // const handleEmailSubmit = (email: string) => {
  //   console.log("Email submitted:", email);
  // };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="max-w-8xl relative z-10 w-full mx-auto px-24 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content - Exact Figma styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-120"
          >
            <div className="flex flex-col">
              <p className="text-5xl -mb-4 leading-normal font-bold text-zinc-950">
                Your entire business,
              </p>
              <div className="flex gap-3 items-start text-5xl leading-normal font-bold">
                <span
                  className="bg-gradient-to-r from-purple-500 to-purple bg-clip-text text-transparent"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  one search
                </span>
                <span className="text-zinc-950">away</span>
              </div>
            </div>
            <p className="text-xl leading-[1.3] text-zinc-950 mt-4 mb-8">
              Give your employee an{" "}
              <span className="font-bold">AI Assistant</span> that puts your
              company's knowledge to work.
            </p>
            <div className="flex flex-col">
              <div className="flex gap-4 items-start">
                <div className="border border-purple flex-1 pl-6 rounded-full flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-base text-gray-800 placeholder:text-gray-500 outline-none"
                  />
                  <Button
                    variant="purple"
                    size="md"
                    className="text-base rounded-full font-bold whitespace-nowrap"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Spline 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full flex items-center justify-center"
          >
            <div
              className="relative w-[400px] h-[400px] flex items-center justify-center bg-transparent"
              style={{ background: "transparent", mixBlendMode: "darken" }}
            >
              <Spline
                scene="https://prod.spline.design/q98AYeHmGtZTwMWy/scene.splinecode"
                className="w-full h-full"
                style={{
                  background: "transparent",
                  mixBlendMode: "darken",
                  pointerEvents: "none",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
