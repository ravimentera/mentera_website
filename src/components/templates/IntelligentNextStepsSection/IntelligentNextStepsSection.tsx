import React from 'react';
import Image from 'next/image';
import Intelligent from "@/assets/icons/Intelligent.svg";

const IntelligentNextStepsSection: React.FC = () => {
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
            {/* Placeholder Image */}
            <Image
              src={Intelligent}// Using existing placeholder
              alt="Intelligent"
              width={500} // Adjust width as needed
              height={250} // Adjust height as needed
              className="rounded-lg"
            />
            {/* In the future, replace with the actual complex image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentNextStepsSection;
