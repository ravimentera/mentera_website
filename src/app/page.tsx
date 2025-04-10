"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import { Footer } from "@/components/organisms/Footer";
import DetailSection from "@/components/templates/DetailSection/DetailSection";
import { AIFeaturesSection } from "@/components/templates/AIFeaturesSection";
import { ExpertiseSection } from "@/components/templates/ExpertiseSection";
import { FeatureSection } from "@/components/templates/FeatureSection";
import { HeroSection } from "@/components/templates/HeroSection";

export default function Home() {
  // scrollRef and useScroll logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const mainScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"], // Animate from when top hits top to when bottom hits bottom
  });

  const { scrollYProgress: mainScrollYProgress } = useScroll({
    target: mainScrollRef,
    offset: ["start start", "end end"], // Animate from when top hits top to when bottom hits bottom
  });

  return (
    <main className="relative" ref={mainScrollRef}>
      <HeroSection />

      <div ref={scrollRef} className="relative h-[340vh]">
        <DetailSection
          scrollYProgress={scrollYProgress}
          mainScrollYProgress={mainScrollYProgress}
        />
      </div>

      {/* <AIFeaturesSection /> */}
      <ExpertiseSection />
      <FeatureSection />
      {/* <EmpoweringSection /> */}
      {/* <TeraAISection /> */}
      <Footer />
    </main>
  );
}
