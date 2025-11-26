import { Variants, Transition } from "framer-motion";

/**
 * Common animation variants for reusable motion components
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

/**
 * Common transition configurations
 */
export const transitions = {
  default: { duration: 0.6 } as Transition,
  fast: { duration: 0.3 } as Transition,
  slow: { duration: 0.8 } as Transition,
  spring: { type: "spring", stiffness: 200 } as Transition,
  withDelay: (delay: number) => ({ duration: 0.6, delay } as Transition),
  staggered: (index: number, baseDelay = 0.1) =>
    ({ duration: 0.6, delay: index * baseDelay } as Transition),
} as const;

/**
 * Common viewport configurations
 */
export const viewportConfig = {
  once: { once: true } as const,
  onceWithMargin: { once: true, margin: "-50px" } as const,
  amount: (amount: number) => ({ once: true, amount } as const),
} as const;

/**
 * Common animation props for motion components
 */
export const motionProps = {
  fadeInUp: {
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportConfig.once,
    variants: fadeInUp,
    transition: transitions.default,
  },
  fadeInLeft: {
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportConfig.once,
    variants: fadeInLeft,
    transition: transitions.default,
  },
  fadeInRight: {
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportConfig.once,
    variants: fadeInRight,
    transition: transitions.default,
  },
  fadeIn: {
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportConfig.once,
    variants: fadeIn,
    transition: transitions.default,
  },
} as const;

