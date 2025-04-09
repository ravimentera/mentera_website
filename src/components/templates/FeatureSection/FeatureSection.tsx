"use client";

import { GradientText } from "@/components/atoms/GradientText";
import { ScrollSection } from "@/components/templates/ScrollSection";

const features = [
  {
    title: "AI-Powered Patient Communication",
    description:
      "Automate follow-ups and reminders while maintaining a personal touch with contextually aware messaging.",
    icon: (
      <svg
        className="w-6 h-6 text-purple-600"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .55.45 1 1 1h.5c.25 0 .5-.1.7-.29L13.9 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H13.2l-3.8 3.3V16H4V4h16v12z" />
      </svg>
    ),
  },
  {
    title: "Smart Scheduling Optimization",
    description:
      "Maximize your calendar with intelligent scheduling that considers treatment time, staff availability, and patient preferences.",
    icon: (
      <svg
        className="w-6 h-6 text-purple-600"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
      </svg>
    ),
  },
  {
    title: "Treatment Insights Dashboard",
    description:
      "Gain valuable insights into treatment efficacy, patient satisfaction, and business performance at a glance.",
    icon: (
      <svg
        className="w-6 h-6 text-purple-600"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z" />
      </svg>
    ),
  },
  {
    title: "Automated Documentation",
    description:
      "Generate accurate treatment notes and documentation automatically, saving you hours of administrative work.",
    icon: (
      <svg
        className="w-6 h-6 text-purple-600"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
      </svg>
    ),
  },
];

export const FeatureSection = () => {
  return (
    <ScrollSection
      id="features"
      staggerChildren={true}
      staggerDelay={0.15}
      className="px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-24"
    >
      <div className="flex flex-col items-center max-w-4xl mx-auto mb-10 md:mb-16">
        <h2 className="heading-h2 text-center mb-4 sm:mb-6 gradient-text-2">
          Built for practitioners, <br className="hidden sm:block" />
          by practitioners and AI experts.
        </h2>
        <p className="heading-h3 text-text-primary text-center">
          We&apos;ve interviewed hundreds of practitioners and med spa owners to deeply understand their day-to-day challenges. Together with AI experts, we’ve created a purpose-built solution focused on delivering real value, eliminating unnecessary tasks, and empowering you to do what you do best - care for your patients.
        </p>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-8 md:mt-12">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="bg-white/40 rounded-xl p-6 md:p-8 border border-gray-100 hover:border-purple-100 shadow-sm hover:shadow transition-all duration-300"
          >
            <div className="flex items-start mb-4">
              <div className="bg-purple-100 rounded-lg p-3 mr-4">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#111827]">
                {feature.title}
              </h3>
            </div>
            <p className="text-[#4B5563] text-sm md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div> */}
    </ScrollSection>
  );
};
