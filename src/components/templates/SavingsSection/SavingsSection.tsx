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
    <section className="relative w-full py-20">
      <div className="max-w-8xl mx-auto px-24">
        <div className="max-w-8xl mx-auto items-center flex justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-120 mr-20"
          >
            <h2 className="text-4.5xl font-medium text-zinc-950 mb-8">
              Saves up to 250 hours per user a year
            </h2>
            <p className="text-xl text-zinc-950">
              Tellus id tellus lectus leo elit posuere nunc velit tempor. Urna
              elit et et amet morbi vitae neque. Feugiat ut amet in nunc
              rhoncus. Sem pretium leo vitae ornare.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#8F03A00A] rounded-2xl p-8 border border-purple-500 shadow-sm"
              >
                <div className="text-4.5xl font-bold text-purple-500 mb-3">
                  {stat.value}
                </div>
                <p className="text-lg text-zinc-950">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
