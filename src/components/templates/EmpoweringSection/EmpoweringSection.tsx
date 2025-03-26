"use client";

import { motion } from "framer-motion";

export const EmpoweringSection = () => {
  const features = [
    {
      id: 1,
      title: "Personalized Patient Care",
      description:
        "AI-powered insights help you deliver tailored treatments and follow-ups for optimal results.",
      icon: "/icons/personalized-care.svg",
    },
    {
      id: 2,
      title: "Streamlined Operations",
      description:
        "Automate routine tasks and simplify scheduling to focus more on what matters most.",
      icon: "/icons/operations.svg",
    },
    {
      id: 3,
      title: "Enhanced Communication",
      description:
        "Keep patients engaged with automated follow-ups and timely reminders.",
      icon: "/icons/communication.svg",
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-[56px] leading-[1.2] font-lexend font-semibold mb-8 gradient-text">
              Empowering Med Spas with AI Innovation
            </h2>
            <p className="text-[#374151] text-xl font-outfit leading-relaxed mb-12">
              Transform your practice with our comprehensive platform designed
              specifically for med spas. Experience the power of AI-driven
              insights and automation.
            </p>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center flex-shrink-0">
                    <img src={feature.icon} alt="" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#111827] text-xl font-lexend font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#4B5563] font-outfit">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
