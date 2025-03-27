import { Footer } from "@/components/organisms/Footer";
import { AIFeaturesSection } from "@/components/templates/AIFeaturesSection";
import { ExpertiseSection } from "@/components/templates/ExpertiseSection";
import { FeatureSection } from "@/components/templates/FeatureSection";
import { HeroSection } from "@/components/templates/HeroSection";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden will-change-transform">
      <HeroSection />
      <FeatureSection />
      <ExpertiseSection />
      <AIFeaturesSection />
      {/* <EmpoweringSection /> */}
      {/* <TeraAISection /> */}
      <Footer />
    </main>
  );
}
