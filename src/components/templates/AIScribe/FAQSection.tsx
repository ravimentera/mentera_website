"use client";

import { fadeInUp, transitions } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does it work?",
      answer:
        "Mentera's AI scribe listens to your patient conversation and automatically generates detailed medical documentation. Any details that you want to appear in your notes should be verbalized during or after your patient encounter. Our notes are professionally written, insurance-friendly, and organized in a structured SOAP format.",
    },
    {
      question: "Is Mentera HIPAA-compliant?",
      answer:
        "Yes! Our company is both HIPAA 🇺🇸 and PIPEDA 🇨🇦 compliant. We encrypt your data in transit and at rest, enforce strict access controls, train all staff on compliance, and monitor our systems 24/7.",
    },
    {
      question: "Will it integrate with my EHR?",
      answer:
        "There's actually no need for EHR integration on our end. Once our notes are generated, they can be easily copied over into your EHR within seconds. It's quick, easy, and seamless!",
    },
    {
      question: "Can my notes be customized?",
      answer:
        "Absolutely. Mentera gives you full control to refine and customize your notes. Whether you want to use specific abbreviations, adjust the tone or style, make the content more concise or detailed, or restructure the layout, our tools make it simple to personalize your documentation.",
    },
    {
      question: "Is there any limit to the length of a conversation?",
      answer:
        "Nope! Talk as long as you need. Many clinicians run 60–90+ minute sessions, and our AI scribe handles them with ease while maintaining high-quality note output.",
    },
    {
      question: "Does it work with dictation?",
      answer:
        "Yes! You can dictate thoughts directly to Mentera and we'll organize those thoughts into clear, structured documentation, including SOAP notes, recaps, and more.",
    },
  ];

  return (
    <section className="relative w-full p-0 sm:p-12">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 md:px-12 lg:px-0">
        <div className="bg-[#3428DF0F] rounded-[2rem] lg:rounded-4xl p-6 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Title */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={transitions.default}
              className="lg:col-span-3 pt-4"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-950 sticky top-24">
                FAQs
              </h2>
            </motion.div>

            {/* Right Column - FAQ Accordion */}
            <div className="lg:col-span-9">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ ...transitions.default, delay: index * 0.05 }}
                    className="overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? -1 : index)
                      }
                      className="w-full flex items-center justify-between py-6 sm:p-6 text-left transition-colors"
                    >
                      <h3 className="text-lg md:text-xl font-medium text-zinc-950 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        {openIndex === index ? (
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M5 12h14" />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <p className="text-base text-zinc-950/80 font-normal leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Divider - show for all except last item */}
                  {index < faqs.length - 1 && (
                    <div className="border-b border-gray-[#E3E3E3]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
