"use client";

import { ShinyGradientText } from "@/components/atoms/ShinyGradientText/ShinyGradientText";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full py-12 md:py-16 lg:py-24 bg-transparent">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
            <ShinyGradientText>
              Unleash Your Expertise, Let AI Handle the Rest
            </ShinyGradientText>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            <div className="space-y-6 md:space-y-8 col-span-12 lg:col-span-7 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#ffffff63] border-2 border-[#BD05DD] backdrop-blur-sm rounded-lg p-4 md:p-5 transition-all duration-300 hover:shadow-lg relative group overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-2 md:mb-4">
                    <ShinyGradientText>
                      Effortless Scheduling & Management
                    </ShinyGradientText>
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">
                    Say goodbye to admin overload—our AI-powered assistant
                    handles appointments, staff schedules, and customer
                    inquiries so you can focus on delivering exceptional
                    treatments.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#ffffff63] border-2 border-[#BD05DD] backdrop-blur-sm rounded-lg p-4 md:p-5 transition-all duration-300 hover:shadow-lg relative group overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-2 md:mb-4">
                    <ShinyGradientText>
                      Automated Marketing & Sales Growth
                    </ShinyGradientText>
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">
                    Our intelligent platform runs targeted promotions, engages
                    clients, and boosts bookings—all while you do what you love
                    most.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#ffffff63] border-2 border-[#BD05DD] backdrop-blur-sm rounded-lg p-4 md:p-5 transition-all duration-300 hover:shadow-lg relative group overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-2 md:mb-4">
                    <ShinyGradientText>
                      AI-Powered Support & Personalization
                    </ShinyGradientText>
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">
                    Provide personalized customer interactions 24/7 with
                    AI-driven communication, ensuring every client feels valued.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative col-span-12 lg:col-span-5 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <Image
                src="/experties.png"
                alt="Expertise Section"
                width={500}
                height={500}
                className="max-w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
