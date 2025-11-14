"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "30%",
    description: "less time on paperwork, emails, and status updates",
  },
  {
    value: "15%",
    description: "increase in captured revenue",
  },
  {
    value: "50%",
    description: "fewer missed steps in errors",
  },
  {
    value: "Less than 1",
    description: "minute in follow ups",
  },
];

export const SavingsSection = () => {
  return (
    <section className="relative w-full py-20 bg-transparent">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-h2 text-text-primary max-w-[1240px] mx-auto">
            Save up to 250 hours per user a year
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1240px] mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-2 border-purple-200 rounded-lg p-8 text-center space-y-4 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="heading-h2 text-purple-500">{stat.value}</div>
              <p className="text-body-1 text-text-secondary">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
