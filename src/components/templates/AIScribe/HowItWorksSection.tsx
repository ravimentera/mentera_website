"use client";

import { Button } from "@/components/atoms/Button/Button";
import { HubSpotFormDialog } from "@/components/molecules/HubSpotFormDialog/HubSpotFormDialog";
import { fadeInUp, transitions } from "@/lib/animations";
import { motion } from "framer-motion";
import { useState } from "react";

// Steps configuration
const STEPS = [
  {
    step: 1,
    title: "Select template",
    description: "Start with a template or create a new one from scratch.",
    image: "/images/ai-scribe/s1.png",
    mobileImage: "/images/ai-scribe/m-s1.png",
    imageAlt: "Select Template",
    colSpan: 3, // 60% of row 1
    imageHeight: "!h-52 lg:!h-68",
  },
  {
    step: 2,
    title: "Record",
    description:
      "Start capturing your patient encounter with just one click. Mentera listens and transcribes in real-time.",
    image: "/images/ai-scribe/s2.png",
    mobileImage: "/images/ai-scribe/m-s2.png",
    imageAlt: "Record",
    colSpan: 2, // 40% of row 1
    customPadding: "p-8 pb-0", // Remove bottom padding
    imageHeight: "!h-80",
  },
  {
    step: 3,
    title: "Review",
    description:
      "Mentera instantly creates a structured, professional note in your preferred format.",
    image: "/images/ai-scribe/s3.png",
    mobileImage: "/images/ai-scribe/m-s3.png",
    imageAlt: "Review",
    colSpan: 2, // 40% of row 2
  },
  {
    step: 4,
    title: "Append Notes",
    description:
      "Easily edit your notes and upload treatment media to enhance clinical documentation.",
    image: "/images/ai-scribe/s4.png",
    mobileImage: "/images/ai-scribe/m-s4.png",
    imageAlt: "Append Notes",
    colSpan: 3, // 60% of row 2
    imageHeight: "!h-80",
  },
  {
    step: 5,
    title: "Push to EHR/PMS*",
    description: "Copy notes or directly push to your system.",
    image: "/images/ai-scribe/s5.png",
    mobileImage: "/images/ai-scribe/m-s5.png",
    imageAlt: "Push to EHR",
    colSpan: 3, // 60% of row 3
    imageHeight: "!h-12 lg:!h-48",
  },
];

export const HowItWorksSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Group steps into rows of 2
  const rows = [
    STEPS.slice(0, 2), // Row 1: Steps 1-2
    STEPS.slice(2, 4), // Row 2: Steps 3-4
    [STEPS[4]], // Row 3: Step 5 only (CTA will be added separately)
  ];

  return (
    <section className="relative w-full py-16 ">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={transitions.default}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-medium text-zinc-950 mb-4">
            How it works
          </h2>
          <p className="text-lg sm:text-xl text-zinc-950 opacity-80 max-w-2xl mx-auto">
            Save hours of charting with just a few clicks
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="space-y-7">
          {/* Rows 1 & 2: Steps 1-4 */}
          {rows.slice(0, 2).map((rowSteps, rowIndex) => (
            <div key={rowIndex} className="grid lg:grid-cols-5 gap-7">
              {rowSteps.map((stepConfig, stepIndex) => (
                <motion.div
                  key={stepConfig.step}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{
                    ...transitions.default,
                    delay: 0.1 * (rowIndex * 2 + stepIndex + 1),
                  }}
                  className={`lg:col-span-${stepConfig.colSpan
                    } bg-[#3428DF0F] rounded-3xl ${stepConfig.customPadding || "p-6 md:p-10"
                    } flex flex-col`}
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-variant/10 to-purple/10 rounded-full px-4 py-2 mb-4">
                      <span className="text-zinc-950 font-medium text-sm">
                        Step {stepConfig.step}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-3">
                      {stepConfig.title}
                    </h3>
                    <p className="text-base md:text-lg text-zinc-950 opacity-70">
                      {stepConfig.description}
                    </p>
                  </div>

                  {/* Step Image */}
                  <div className="mt-auto">
                    {/* Mobile Image */}
                    <img
                      src={stepConfig.mobileImage}
                      alt={stepConfig.imageAlt}
                      className={`w-full h-auto object-contain rounded-xl lg:hidden ${stepConfig.imageHeight}`}
                    />
                    {/* Desktop Image */}
                    <img
                      src={stepConfig.image}
                      alt={stepConfig.imageAlt}
                      className={`w-full h-auto object-contain rounded-xl hidden lg:block ${stepConfig.imageHeight}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}

          {/* Row 3: Step 5 & CTA */}
          <div className="grid lg:grid-cols-5 gap-7">
            {/* Step 5 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ ...transitions.default, delay: 0.5 }}
              className={`lg:col-span-${STEPS[4].colSpan
                } bg-[#3428DF0F] rounded-3xl ${STEPS[4].customPadding || "p-6 md:p-10"
                } flex flex-col`}
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-variant/10 to-purple/10 rounded-full px-4 py-2 mb-4">
                  <span className="text-zinc-950 font-medium text-sm">
                    Step {STEPS[4].step}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-3">
                  {STEPS[4].title}
                </h3>
                <p className="text-base md:text-lg text-zinc-950 opacity-70">
                  {STEPS[4].description}
                </p>
              </div>

              {/* Step Image */}
              <div className="my-12">
                {/* Mobile Image */}
                <img
                  src={STEPS[4].mobileImage}
                  alt={STEPS[4].imageAlt}
                  className={`w-full object-contain rounded-xl lg:hidden !h-96`}
                />
                {/* Desktop Image */}
                <img
                  src={STEPS[4].image}
                  alt={STEPS[4].imageAlt}
                  className={`w-full object-contain rounded-xl hidden lg:block ${STEPS[4].imageHeight}`}
                />
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ ...transitions.default, delay: 0.6 }}
              className="lg:col-span-2 bg-[#3428DF0F] rounded-3xl p-6 py-16 md:p-10 md:py-10 flex flex-col justify-center items-start text-left"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-zinc-950 mb-8">
                Ready to take the next step?
              </h3>
              <p className="text-base md:text-lg text-zinc-950 opacity-70 mb-8 max-w-md">
                Book a demo to see how Mentera's AI Scribe can streamline your
                workflow and enhance patient care.
              </p>
              <Button
                variant="purple"
                size="md"
                showArrow
                className="rounded-full font-bold"
                onClick={() => setIsDialogOpen(true)}
              >
                Get a Demo
              </Button>
            </motion.div>
          </div>
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
