import { IntegrationsPage } from "@/components/templates/IntegrationsPage/IntegrationsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations - Connect Your Favorite Tools",
  description:
    "Mentera plugs into your healthcare tools like DrChrono, Athena Health, and more. Boost your workflow with seamless integrations.",
  openGraph: {
    title: "Integrations - Connect Your Favorite Tools | Mentera",
    description:
      "Mentera plugs into your healthcare tools like DrChrono, Athena Health, and more. Boost your workflow with seamless integrations.",
  },
  alternates: {
    canonical: "https://mentera.ai/integrations",
  },
};

export default function Page() {
  return <IntegrationsPage />;
}
