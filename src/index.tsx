import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Footer } from "./components/organisms/Footer";
import { AIFeaturesSection } from "./components/templates/AIFeaturesSection";
import { EmpoweringSection } from "./components/templates/EmpoweringSection";
import { FeatureSection } from "./components/templates/FeatureSection";
import { HeroSection } from "./components/templates/HeroSection";
import { TeraAISection } from "./components/templates/TeraAISection";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <main className="relative overflow-x-hidden">
      <HeroSection />
      <FeatureSection />
      <TeraAISection />
      <EmpoweringSection />
      <AIFeaturesSection />
      <Footer />
    </main>
  </StrictMode>
);
