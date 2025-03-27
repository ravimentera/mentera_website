"use client";

import { ShinyGradientText } from "@/components/atoms/ShinyGradientText/ShinyGradientText";
import { motion } from "framer-motion";

export const TeraAISection = () => {
  return (
    <section className="w-full max-w-[1344px] mx-auto px-[150px] py-[104px] my-12 bg-[#6ef1bb20] backdrop-blur-sm border border-[#6ef1bb40] rounded-lg shadow-sm">
      <motion.div
        className="flex flex-col w-full max-w-[706px] items-start gap-[34px]"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="w-full gradient-text font-lexend font-semibold text-5xl leading-[52px]">
          <ShinyGradientText>Meet Tera AI Assistant</ShinyGradientText>
        </h2>
        <p className="max-w-[574px] font-outfit font-normal text-text-primary text-2xl leading-[31.9px]">
          Our Med Spa Copilot&nbsp;&nbsp;Tera AI simplifies patient care and med
          spa operations, effortlessly assisting you with pre- and post-care
          follow-ups, personalized patient recommendations, streamlined
          pre-charting, and seamless scheduling.
        </p>
      </motion.div>
    </section>
  );
};
