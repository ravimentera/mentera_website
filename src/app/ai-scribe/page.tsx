import { Metadata } from "next";
import { AIScribeContent } from "./AIScribeContent";

export const metadata: Metadata = {
  title: "AI Scribe for Medical Practices | Mentera",
  description:
    "Mentera's AI Scribe listens to patient encounters and generates SOAP notes in real time. HIPAA compliant. Works with DrChrono, Athenahealth, Nextech, and 50+ EHRs. Try free.",
  openGraph: {
    title: "AI Scribe for Medical Practices | Mentera",
    description:
      "Mentera's AI Scribe listens to patient encounters and generates SOAP notes in real time. HIPAA compliant. Try free.",
  },
  alternates: {
    canonical: "https://mentera.ai/ai-scribe",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Mentera's AI Scribe work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mentera's AI scribe listens to your patient conversation and automatically generates detailed medical documentation. Our notes are professionally written, insurance-friendly, and organized in a structured SOAP format.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mentera HIPAA-compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mentera is fully HIPAA compliant. All patient data is encrypted in transit and at rest. We sign BAAs with all customers.",
      },
    },
    {
      "@type": "Question",
      name: "Will Mentera integrate with my EHR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mentera integrates with 50+ EHR systems including DrChrono, Athenahealth, Nextech, Dentrix, PatientNow, ezyVet, and many more.",
      },
    },
    {
      "@type": "Question",
      name: "Can my clinical notes be customized?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Notes can be customized to match your preferred format, specialty-specific templates, and documentation requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a limit to the length of a conversation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Mentera's AI Scribe can handle conversations of any length, from quick follow-ups to extended consultations.",
      },
    },
    {
      "@type": "Question",
      name: "Does Mentera's AI Scribe work with dictation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can use dictation mode to speak your notes directly, and the AI Scribe will generate structured documentation from your dictation.",
      },
    },
  ],
};

export default function AIScribePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AIScribeContent />
    </>
  );
}
