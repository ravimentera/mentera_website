import { DemoPage } from "@/components/templates/DemoPage/DemoPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "See Mentera In Action - Book a Demo",
  description:
    "Curious to discover how Mentera can help your practice? Get in touch with our team. In 15 minutes, we'll show you where Mentera's AI can save your team time and recover lost revenue.",
  openGraph: {
    title: "See Mentera In Action - Book a Demo",
    description:
      "Curious to discover how Mentera can help your practice? Get in touch with our team. In 15 minutes, we'll show you where Mentera's AI can save your team time and recover lost revenue.",
  },
  alternates: {
    canonical: "https://mentera.ai/demo",
  },
};

export default function Page() {
  return <DemoPage />;
}
