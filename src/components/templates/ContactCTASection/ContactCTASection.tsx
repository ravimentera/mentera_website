"use client";

import { motion } from "framer-motion";

export const ContactCTASection = () => {
  const handleEmailSubmit = (email: string) => {
    console.log("Email submitted:", email);
  };

  return (
    <section className="relative w-full py-20 bg-transparent">
      <div className="max-w-8xl mx-auto px-[48px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#4d28df] rounded-[35px] px-[216px] py-[36px] flex flex-col gap-[52px] items-center justify-center"
        >
          <h2 className="text-[48px] leading-[52px] text-center text-white font-medium">
            Business AI that works.
          </h2>
          <div className="relative flex gap-4 w-[484px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-white flex-1 h-[48px] px-6 py-5 rounded-[100px] bg-transparent text-[16px] leading-[20px] text-white placeholder:text-white/90 outline-none"
            />
            <button className="absolute right-0 bg-white text-[#4d28df] px-6 py-5 rounded-[100px] text-[16px] leading-[20px] font-medium hover:bg-white/90 transition-colors flex items-center gap-2">
              Get a Demo
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#4d28df]"
              >
                <path
                  d="M13.75 6.75L19.25 12L13.75 17.25"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 12H4.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
