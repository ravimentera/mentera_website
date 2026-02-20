import { DemoPage } from "@/components/templates/DemoPage/DemoPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo - See Mentera AI in Action",
  description:
    "Schedule a personalized demo of Mentera's AI assistant for private medical practices. See how we automate workflows, boost efficiency, and deliver measurable ROI.",
  openGraph: {
    title: "Book a Demo - See Mentera AI in Action",
    description:
      "Schedule a personalized demo of Mentera's AI assistant for private medical practices. See how we automate workflows, boost efficiency, and deliver measurable ROI.",
  },
  alternates: {
    canonical: "https://mentera.ai/demo",
  },
};

export default function Page() {
  return <DemoPage />;
}
