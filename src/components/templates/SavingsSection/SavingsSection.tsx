"use client";

import { fadeInUp, transitions, viewportConfig } from "@/lib/animations";
import { motion, useInView } from "framer-motion";
import { memo, useEffect, useMemo, useRef, useState } from "react";

// Moved outside component to avoid recreation on each render
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
] as const;

const useAnimatedNumber = (
  targetValue: string,
  duration: number = 2000
): { displayValue: string; ref: React.RefObject<HTMLDivElement> } => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    // Handle "Less than 1" case
    if (targetValue === "Less than 1") {
      setDisplayValue("Less than 1");
      return;
    }

    // Extract numeric value and suffix
    const numericMatch = targetValue.match(/(\d+(?:\.\d+)?)/);
    if (!numericMatch) {
      setDisplayValue(targetValue);
      return;
    }

    const targetNum = parseFloat(numericMatch[1]);
    const suffix = targetValue.replace(numericMatch[0], ""); // Get % or other suffix

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (targetNum - startValue) * easeOutQuart;

      // Format the number (remove decimals if it's a whole number)
      const formattedValue =
        targetNum % 1 === 0
          ? Math.floor(currentValue).toString()
          : currentValue.toFixed(1);

      setDisplayValue(formattedValue + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetValue, duration]);

  return { displayValue, ref };
};

const AnimatedStatValue = memo(({
  value,
  delay = 0,
}: {
  value: string;
  delay?: number;
}) => {
  const { displayValue, ref } = useAnimatedNumber(value);

  return (
    <div ref={ref} className="text-4.5xl font-bold text-purple-500 mb-3">
      {displayValue}
    </div>
  );
});

AnimatedStatValue.displayName = "AnimatedStatValue";

export const SavingsSection = memo(() => {
  return (
    <section className="relative w-full py-20">
      <div className="max-w-8xl mx-auto px-24">
        <div className="max-w-8xl mx-auto items-center flex justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig.once}
            variants={fadeInUp}
            transition={transitions.default}
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
                key={`stat-${stat.value}-${index}`}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig.once}
                variants={fadeInUp}
                transition={transitions.staggered(index, 0.1)}
                className="bg-purple-500/4 rounded-2xl p-8 border border-purple-500 shadow-sm"
              >
                <AnimatedStatValue value={stat.value} delay={index * 0.1} />
                <p className="text-lg text-zinc-950">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

SavingsSection.displayName = "SavingsSection";
