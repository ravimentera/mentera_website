"use client";

import { Footer } from "@/components/organisms/Footer/Footer";
import { AIScribeHeroSection } from "@/components/templates/AIScribe/AIScribeHeroSection";
import { BenefitsSection } from "@/components/templates/AIScribe/BenefitsSection";
import { FAQSection } from "@/components/templates/AIScribe/FAQSection";
import { HowItWorksSection } from "@/components/templates/AIScribe/HowItWorksSection";
import { TryForFreeSection } from "@/components/templates/AIScribe/TryForFreeSection";

export default function AIScribePage() {
  return (
    <main className="relative">
      <AIScribeHeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TryForFreeSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

