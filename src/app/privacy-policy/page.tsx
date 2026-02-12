import { Metadata } from "next";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Mentera",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "https://mentera.ai/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyContent />;
}
