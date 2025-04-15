import React, { useRef, useEffect } from "react";
import SvgComponent from "@/components/atoms/SvgAnimations/IntelligentAnimation/IntelligentAnimation";
import { useInView } from "framer-motion";

const IntelligentNextStepsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className="overflow-hidden bg-transparent px-4 sm:px-6 md:px-8 py-12 md:py-16 md:pt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="heading-h2 mb-4 gradient-text-2">
              Intelligent Next Steps
            </h2>
            <p className="heading-h3 text-text-primary">
              Using these data signals, we proactively recommend optimal
              strategies across your back-office operations, including patient
              communication, scheduling, marketing, and overall management.
            </p>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 flex justify-center">
            <div ref={ref} className="flex flex-col items-center">
              <SvgComponent isActive={isInView} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentNextStepsSection;
