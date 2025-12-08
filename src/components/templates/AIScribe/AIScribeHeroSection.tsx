"use client";

import { Button } from "@/components/atoms/Button/Button";
import { HubSpotFormDialog } from "@/components/molecules/HubSpotFormDialog/HubSpotFormDialog";
import { fadeInRight, fadeInUp, transitions } from "@/lib/animations";
import { motion } from "framer-motion";
import { useState } from "react";

export const AIScribeHeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-purple-variant to-transparent rounded-full blur-huge" />
        <div className="absolute top-40 right-20 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-secondary to-transparent rounded-full blur-huge" />
        <div className="absolute bottom-20 left-1/3 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-br from-secondary to-transparent rounded-full blur-huge opacity-50" />
        <div className="absolute bottom-40 right-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-purple-variant to-transparent rounded-full blur-huge opacity-30" />
      </div>

      {/* Content */}
      <div className="max-w-8xl relative z-10 w-full mx-auto px-6 sm:px-6 md:px-12 lg:px-24 lg:pr-0 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={transitions.default}
            className="lg:col-span-5 max-w-lg mx-auto lg:mx-0 text-left"
          >
            <div className="flex flex-col items-start gap-0">
              <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-start text-[32px] sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-bold">
                <span className="text-zinc-950">The</span>
                <span className="bg-gradient-to-r from-purple-variant to-purple bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
                  AI Scribe
                </span>
              </div>
              <p className="text-[32px] sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-bold text-zinc-950">
                for every clinician
              </p>
            </div>

            <p className="text-[15px] sm:text-lg md:text-xl lg:text-2xl leading-[1.6] text-zinc-950 mt-6 sm:mt-6 mb-7 sm:mb-8">
              Mentera captures your patient encounters in real time and quickly
              generates high-quality clinical notes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-start justify-start">
              <Button
                variant="purple"
                size="md"
                showArrow
                className="rounded-full font-bold px-7 py-3 text-[15px] sm:w-auto"
                onClick={() => setIsDialogOpen(true)}
              >
                Get a Demo
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            transition={{ ...transitions.default, delay: 0.2 }}
            className="relative w-full flex items-center justify-center lg:col-span-7 mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-2xl lg:max-w-none mx-auto">
              {/* Mobile Image */}
              <img
                src="/images/ai-scribe/m-hero.png"
                alt="AI Scribe Interface"
                className="w-full h-auto lg:hidden"
              />
              {/* Desktop Image */}
              <img
                src="/images/ai-scribe/hero.png"
                alt="AI Scribe Interface"
                className="w-full h-auto hidden lg:block"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* HubSpot Form Dialog */}
      <HubSpotFormDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </section>
  );
};
