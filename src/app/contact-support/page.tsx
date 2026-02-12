import { ContactSupportPage } from "@/components/templates/ContactSupportPage/ContactSupportPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Support - Get Help with Mentera",
  description:
    "Need assistance? Contact Mentera's friendly support team. We're here to help you resolve any issues with your AI-powered healthcare assistant.",
  openGraph: {
    title: "Contact Support - Get Help with Mentera",
    description:
      "Need assistance? Contact Mentera's friendly support team. We're here to help you resolve any issues with your AI-powered healthcare assistant.",
  },
  alternates: {
    canonical: "https://mentera.ai/contact-support",
  },
};

export default function Page() {
  return <ContactSupportPage />;
}
