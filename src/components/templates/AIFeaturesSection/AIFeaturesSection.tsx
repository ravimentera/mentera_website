"use client";

import { ShinyGradientText } from "@/components/atoms/ShinyGradientText/ShinyGradientText";
import { motion } from "framer-motion";
import Image from "next/image";

export const AIFeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Personalized Treatment Plans",
      description: "AI-driven recommendations tailored to your needs.",
      image: "/ai-feature-1.png",
    },
    {
      id: 2,
      title: "Real-Time Skin Analysis",
      description: "Instant insights into your skin's health.",
      image: "/ai-feature-2.png",
    },
    {
      id: 3,
      title: "AI-Powered Recommendations",
      description: "Smart suggestions for optimal beauty routines.",
      image: "/ai-feature-3.png",
    },
    {
      id: 4,
      title: "24/7 Virtual Consultations",
      description: "Access expert advice anytime, anywhere.",
      image: "/ai-feature-4.png",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-24">
      <div className="mx-auto px-4 sm:px-8 md:px-12">
        <h2 className="heading-h2 text-center mb-8 md:mb-12 lg:mb-16">
          <ShinyGradientText>Cutting-edge AI Features</ShinyGradientText>
        </h2>
        <div className="flex flex-col gap-5 md:gap-7">
          {/* Top Row - Stacked on mobile, grid on tablet/desktop */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-7 lg:gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[20px] md:rounded-[28px] p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-lg border-2 bg-[#ffffff4c] border-[#111A53] overflow-hidden flex flex-col h-auto md:h-[512px] md:col-span-8"
            >
              <div>
                <h3 className="text-[#2d2d8c] text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                  {features[0].title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                  {features[0].description}
                </p>
              </div>

              <div className="mt-4 md:mt-6 flex-grow flex items-center justify-center">
                <div className="flex justify-center items-center w-full mx-auto">
                  <Image
                    src={features[0].image}
                    alt={features[0].title}
                    width={700}
                    height={600}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#ffffff4c] rounded-[20px] md:rounded-[28px] p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-lg border-2 border-[#BD05DD] overflow-hidden flex flex-col h-auto md:h-[512px] md:col-span-4 pb-6 md:pb-0"
            >
              <div>
                <h3 className="text-[#2d2d8c] text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                  {features[1].title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                  {features[1].description}
                </p>
              </div>

              <div className="mt-4 md:mt-6 flex-grow flex items-center justify-center">
                <div className="w-full max-w-sm mx-auto">
                  <Image
                    src={features[1].image}
                    alt={features[1].title}
                    width={500}
                    height={400}
                    className="object-contain rounded-lg h-auto md:h-[430px]"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row - Stacked on mobile, grid on tablet/desktop */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-7 lg:gap-8">
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#ffffff4c] rounded-[20px] md:rounded-[28px] p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-lg border-2 border-[#BD05DD] overflow-hidden flex flex-col h-auto md:h-[512px] md:col-span-4 pb-6 md:pb-0"
            >
              <div>
                <h3 className="text-[#2d2d8c] text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                  {features[2].title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                  {features[2].description}
                </p>
              </div>

              <div className="mt-4 md:mt-6 flex-grow flex items-center justify-center">
                <div className="w-full max-w-sm mx-auto">
                  <Image
                    src={features[2].image}
                    alt={features[2].title}
                    width={500}
                    height={400}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#ffffff4c] rounded-[20px] md:rounded-[28px] p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-lg border-2 border-[#111A53] overflow-hidden flex flex-col h-auto md:h-[512px] md:col-span-8"
            >
              <div>
                <h3 className="text-[#2d2d8c] text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                  {features[3].title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                  {features[3].description}
                </p>
              </div>

              <div className="mt-4 md:mt-6 flex-grow flex items-center justify-center">
                <div className="w-full flex justify-center items-center mx-auto">
                  <Image
                    src={features[3].image}
                    alt={features[3].title}
                    width={500}
                    height={400}
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
