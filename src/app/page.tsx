import { Footer } from "@/components/organisms/Footer/Footer";
import { LazyLoad } from "@/components/atoms/LazyLoad/LazyLoad";
import { NewHeroSection } from "@/components/templates/NewHeroSection/NewHeroSection";
import dynamic from "next/dynamic";

const AIChatSection = dynamic(
  () =>
    import("@/components/templates/AIChatSection/AIChatSection").then((mod) => ({
      default: mod.AIChatSection,
    })),
  { ssr: false }
);

const AccessibleAISection = dynamic(
  () =>
    import(
      "@/components/templates/AccessibleAISection/AccessibleAISection"
    ).then((mod) => ({ default: mod.AccessibleAISection })),
  { ssr: false }
);

const IntegrationsSection = dynamic(
  () =>
    import(
      "@/components/templates/IntegrationsSection/IntegrationsSection"
    ).then((mod) => ({ default: mod.IntegrationsSection })),
  { ssr: false }
);

const ReimagineWorkSection = dynamic(
  () =>
    import(
      "@/components/templates/ReimagineWorkSection/ReimagineWorkSection"
    ).then((mod) => ({ default: mod.ReimagineWorkSection })),
  { ssr: false }
);

const SavingsSection = dynamic(
  () =>
    import("@/components/templates/SavingsSection/SavingsSection").then(
      (mod) => ({ default: mod.SavingsSection })
    ),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative">
      <NewHeroSection />
      <LazyLoad minHeight="600px">
        <AIChatSection />
      </LazyLoad>
      <LazyLoad>
        <AccessibleAISection />
      </LazyLoad>
      <LazyLoad>
        <IntegrationsSection />
      </LazyLoad>
      <LazyLoad>
        <ReimagineWorkSection />
      </LazyLoad>
      <LazyLoad>
        <SavingsSection />
      </LazyLoad>
      <Footer />
    </main>
  );
}
