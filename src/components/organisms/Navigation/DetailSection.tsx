import React from "react";
import Image from "next/image";
import CircleAnimate from "@/assets/icons/circle.svg";

const DetailSection = () => {
  return (
    <section className="py-16 md:py-3">
      {" "}
      {/* Removed background gradient */}
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16">
          {" "}
          {/* Changed items-center to items-start */}
          {/* Left Column Text Blocks */}
          <div className="w-full lg:w-1/3 flex flex-col gap-10 order-1 lg:order-1">
            {" "}
            {/* Left column */}
            <div className="text-left">
              <h2 className="text-xl md:text-base font-bold mb-1 text-gray-900">
                {" "}
                {/* Adjusted styles */}
                Data-Driven Personalization
              </h2>
              <p className="text-black font-normal text-sm md:text-base">
                {" "}
                {/* Adjusted styles */}
                Ingest and analyze your practice's data, transforming it into
                actionable insights. This personalized approach creates a
                tailored AI assistant uniquely suited for your practice.
              </p>
            </div>
            <div className="text-left">
              <h2 className="text-xl md:text-base font-bold mb-1 text-gray-900">
                {" "}
                {/* Adjusted styles */}
                Continuous Learning & Optimization
              </h2>
              <p className="text-black font-normal text-sm md:text-base">
                {" "}
                {/* Adjusted styles */}
                Mentera continuously learns from every patient interaction. By
                quickly identifying and amplifying effective strategies in
                real-time, it evolves into your practice's smartest assistant,
                continuously enhancing efficiency and patient experiences.
              </p>
            </div>
          </div>
          {/* Center Image */}
          <div className="w-full lg:w-auto flex justify-center items-center order-2 lg:order-2 px-8">
            {" "}
            {/* Center image, adjust width */}
            <Image
              priority
              src={CircleAnimate}
              alt="AI Process Visualization"
              width={450} // Increased size
              height={450} // Increased size
              className="max-w-sm md:max-w-md lg:max-w-lg relative -top-48" // Adjusted max-width and added relative positioning
            />
          </div>
          {/* Right Column Text Block */}
          <div className="w-full lg:w-1/3 flex items-start order-3 lg:order-3">
            {" "}
            {/* Right column */}
            <div className="text-left">
              <h2 className="text-xl md:text-base font-bold mb-1 text-gray-900">
                {" "}
                {/* Adjusted styles */}
                Intelligent Next Steps
              </h2>
              <p className="text-black font-normal text-sm md:text-base">
                {" "}
                {/* Adjusted styles */}
                Using these data signals, we proactively recommend optimal
                strategies across your back-office operations, including patient
                communication, scheduling, marketing, and overall management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
