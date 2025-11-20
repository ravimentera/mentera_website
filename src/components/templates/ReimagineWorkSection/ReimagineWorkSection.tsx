"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="url(#gradient1)"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BD05DD" />
            <stop offset="100%" stopColor="#4D28DF" />
          </linearGradient>
        </defs>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    title: "Find & understand",
    subtitle: "information",
    items: [
      "Search information, docs, and people",
      "Explore insights, research, and discoveries",
      "Onboard to new jobs and projects",
    ],
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="url(#gradient2)"
      >
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BD05DD" />
            <stop offset="100%" stopColor="#4D28DF" />
          </linearGradient>
        </defs>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Create & summarize",
    subtitle: "content",
    items: [
      "Create content, updates and deliverables",
      "Summarize docs, threads and meetings",
      "Analyze for insights and answers",
    ],
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="url(#gradient3)"
      >
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BD05DD" />
            <stop offset="100%" stopColor="#4D28DF" />
          </linearGradient>
        </defs>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Automate",
    subtitle: "your work",
    items: [
      "Communicate with automatic responses",
      "Automate repetitive tasks and workflows",
      "Orchestrate departmental processes",
    ],
  },
];

export const ReimagineWorkSection = () => {
  const getBoldText = (text: string) => {
    const words = text.split(" ");
    const firstWord = words[0];
    const rest = words.slice(1).join(" ");
    return (
      <div className="text-zinc-950 text-base">
        <span className="font-bold">{firstWord}</span> {rest}
      </div>
    );
  };

  return (
    <section className="relative w-full py-20">
      <div className="max-w-8xl mx-auto px-24 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-18"
        >
          <span className="text-4.5xl font-medium text-zinc-950 max-w-[28rem] mx-auto">
            Reimagine your everyday work with AI
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center space-y-6"
            >
              <div className="flex justify-center">
                <div className="w-18 h-18 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-950">
                  {feature.title}
                </h3>
                <h3 className="text-2xl font-medium text-zinc-950">
                  {feature.subtitle}
                </h3>
              </div>
              <div className="bg-[#3428DF05] rounded-2xl p-5">
                <ul className="space-y-4 text-left">
                  {feature.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-body-1 text-text-secondary"
                    >
                      <svg
                        className="w-6 h-6 text-zinc-950 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{getBoldText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
