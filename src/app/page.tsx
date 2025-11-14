"use client";

// OLD IMPLEMENTATION - COMMENTED OUT FOR NEW DESIGN
// import { useEffect, useRef } from "react";
// import { useScroll } from "framer-motion";
// import DetailSection from "@/components/templates/DetailSection/DetailSection";
// import { AIFeaturesSection } from "@/components/templates/AIFeaturesSection";
// import { ExpertiseSection } from "@/components/templates/ExpertiseSection";
// import { FeatureSection } from "@/components/templates/FeatureSection";
// import { HeroSection } from "@/components/templates/HeroSection";
// import IntelligentNextStepsSection from '@/components/templates/IntelligentNextStepsSection/IntelligentNextStepsSection';

// NEW DESIGN IMPLEMENTATION
import { AccessibleAISection } from "@/components/templates/AccessibleAISection/AccessibleAISection";
import { IntegrationsSection } from "@/components/templates/IntegrationsSection/IntegrationsSection";
import { NewHeroSection } from "@/components/templates/NewHeroSection/NewHeroSection";
import { ReimagineWorkSection } from "@/components/templates/ReimagineWorkSection/ReimagineWorkSection";
import { SavingsSection } from "@/components/templates/SavingsSection/SavingsSection";

export default function Home() {
  // OLD SCROLL LOGIC - COMMENTED OUT
  // const scrollRef = useRef<HTMLDivElement>(null);
  // const mainScrollRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: scrollRef,
  //   offset: ["start start", "end end"],
  // });
  // const { scrollYProgress: mainScrollYProgress } = useScroll({
  //   target: mainScrollRef,
  //   offset: ["start start", "end end"],
  // });

  return (
    <main className="relative">
      {/* NEW DESIGN SECTIONS */}
      <NewHeroSection />
      <AccessibleAISection />
      <ReimagineWorkSection />
      <IntegrationsSection />
      <SavingsSection />
      {/* <ContactCTASection /> */}
      {/* <Footer /> */}

      {/* OLD SECTIONS - COMMENTED OUT */}
      {/* <HeroSection /> */}
      {/* <div ref={scrollRef} className="relative h-[340vh] xs:h-[220vh]">
        <DetailSection
          scrollYProgress={scrollYProgress}
          mainScrollYProgress={mainScrollYProgress}
        />
      </div> */}
      {/* <IntelligentNextStepsSection /> */}
      {/* <AIFeaturesSection /> */}
      {/* <ExpertiseSection /> */}
      {/* <FeatureSection /> */}
      {/* <EmpoweringSection /> */}
      {/* <TeraAISection /> */}
    </main>
  );
}
