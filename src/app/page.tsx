import { Footer } from "@/components/organisms/Footer";
import { AIFeaturesSection } from "@/components/templates/AIFeaturesSection";
import { FeatureSection } from "@/components/templates/FeatureSection";
import { HeroSection } from "@/components/templates/HeroSection";
import { TeraAISection } from "@/components/templates/TeraAISection";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <HeroSection />
      <FeatureSection />
      <AIFeaturesSection />
      {/* <EmpoweringSection /> */}
      <TeraAISection />
      <Footer />
    </main>
  );
}
