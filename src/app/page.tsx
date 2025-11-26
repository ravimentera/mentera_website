"use client";

import { Footer } from "@/components/organisms/Footer/Footer";
import { AccessibleAISection } from "@/components/templates/AccessibleAISection/AccessibleAISection";
import { IntegrationsSection } from "@/components/templates/IntegrationsSection/IntegrationsSection";
import { NewHeroSection } from "@/components/templates/NewHeroSection/NewHeroSection";
import { ReimagineWorkSection } from "@/components/templates/ReimagineWorkSection/ReimagineWorkSection";
import { SavingsSection } from "@/components/templates/SavingsSection/SavingsSection";

export default function Home() {
  return (
    <main className="relative">
      <NewHeroSection />
      <AccessibleAISection />
      <IntegrationsSection />
      <ReimagineWorkSection />
      <SavingsSection />
      <Footer />
    </main>
  );
}
