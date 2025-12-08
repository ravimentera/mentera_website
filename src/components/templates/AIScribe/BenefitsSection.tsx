"use client";

import { fadeInUp, transitions } from "@/lib/animations";
import { motion } from "framer-motion";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: "/images/ai-scribe/icon-01.png",
      title: "Automatically create accurate, compliant clinical notes",
    },
    {
      icon: "/images/ai-scribe/icon-02.png",
      title: "Save up to 2 hours daily on typing clinical notes",
    },
    {
      icon: "/images/ai-scribe/icon-03.png",
      title: "Less time charting means more quality patient care",
    },
    {
      icon: "/images/ai-scribe/icon-04.png",
      title: "Fully customizable to meet your clinical needs",
    },
    {
      icon: "/images/ai-scribe/icon-05.png",
      title: "Enhances note quality without adding extra time",
    },
    {
      icon: "/images/ai-scribe/icon-06.png",
      title: "Accurately interprets healthcare jargon",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={transitions.default}
          className="text-center mb-0 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-950 mb-0 md:mb-4">
            Why choose AI scribe for clinical documentation?
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ ...transitions.default, delay: index * 0.1 }}
              className="p-6 md:p-8 flex flex-col items-center text-center"
            >
              <img
                src={benefit.icon}
                alt=""
                className="h-24 md:h-36 object-contain"
              />
              <h3 className="text-base md:text-lg font-medium text-zinc-950 leading-relaxed">
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
