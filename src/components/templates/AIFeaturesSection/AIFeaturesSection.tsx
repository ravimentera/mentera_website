"use client";

import { motion } from "framer-motion";

export const AIFeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Personalized Treatment Plans",
      description: "AI-driven recommendations tailored to your needs.",
      mockupImage: "/mockups/personalized-treatment.png",
    },
    {
      id: 2,
      title: "Real-Time Skin Analysis",
      description: "Instant insights into your skin's health.",
      mockupImage: "/mockups/skin-analysis.png",
      skinHealthImage: "/women-doing-spa.png",
    },
    {
      id: 3,
      title: "AI-Powered Recommendations",
      description: "Smart suggestions for optimal beauty routines.",
      mockupImage: "/mockups/smart-suggestions.png",
    },
    {
      id: 4,
      title: "24/7 Virtual Consultations",
      description: "Access expert advice anytime, anywhere.",
      mockupImage: "/mockups/virtual-consultations.png",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[56px] leading-[1.2] mb-16"
          style={{
            background: "linear-gradient(90deg, #111A53 0%, #BD05DD 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "var(--font-lexend)",
            fontWeight: 600,
          }}
        >
          Cutting-edge AI Features
        </motion.h2>

        <div className="grid grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F9FAFB] rounded-lg p-8"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-[#111827] text-2xl font-lexend font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#4B5563] font-outfit text-lg mb-8">
                  {feature.description}
                </p>

                <div className="relative mt-auto bg-white rounded-lg p-4 shadow-sm">
                  {feature.id === 1 && (
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-[#F3F4F6] rounded-full flex items-center justify-center">
                        <img
                          src="/icons/ai-analysis.svg"
                          alt=""
                          className="w-5 h-5"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-[#E5E7EB] rounded w-3/4 mb-2" />
                        <div className="h-4 bg-[#E5E7EB] rounded w-1/2" />
                      </div>
                    </div>
                  )}

                  {feature.id === 2 && (
                    <div className="flex gap-4 items-center">
                      <img
                        src={feature.skinHealthImage}
                        alt=""
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="text-[#111827] font-lexend font-semibold mb-2">
                          Skin Health
                        </h4>
                        <div className="h-2 bg-[#E5E7EB] rounded w-full" />
                      </div>
                    </div>
                  )}

                  {feature.id === 3 && (
                    <div>
                      <h4 className="text-[#111827] font-lexend font-semibold mb-4">
                        Smart Suggestions
                      </h4>
                      <div className="space-y-3">
                        <div className="h-4 bg-[#E5E7EB] rounded w-full" />
                        <div className="h-4 bg-[#E5E7EB] rounded w-3/4" />
                      </div>
                    </div>
                  )}

                  {feature.id === 4 && (
                    <div>
                      <div className="bg-[#111A53] text-white px-4 py-2 rounded-md inline-block mb-4">
                        Virtual Consultations
                      </div>
                      <div className="h-32 bg-[#F3F4F6] rounded-lg" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
