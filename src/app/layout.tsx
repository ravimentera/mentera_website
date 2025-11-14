import { ParticleBackground } from "@/components/atoms/ParticleBackground/ParticleBackground";
import { Navigation } from "@/components/organisms/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentera",
  description:
    "Streamline your med spa operations with AI-powered patient care, automated follow-ups, and intelligent scheduling. Join the future of medical aesthetics.",
  keywords:
    "med spa software, AI healthcare, patient management, medical aesthetics, practice management, AI assistant, medical spa, clinic management",
  authors: [{ name: "Mentera.ai" }],
  creator: "Mentera.ai",
  publisher: "Mentera.ai",
  robots: "index, follow",
  metadataBase: new URL("https://mentera.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mentera.ai",
    siteName: "Mentera.ai",
    title: "Mentera - AI-Powered Med Spa Management Platform",
    description:
      "Transform your med spa operations with AI-powered patient care and automation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mentera.ai Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentera - AI-Powered Med Spa Management Platform",
    description:
      "Transform your med spa operations with AI-powered patient care and automation.",
    images: ["/og-image.jpg"],
    creator: "@mentera_ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Mentera.ai",
              description: "AI-Powered Med Spa Management Platform",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased tw-bg-white text-gray-900 bg-transparent overflow-x-hidden font-satoshi">
        {/* Particle Background */}
        <ParticleBackground />

        <Navigation />

        {/* Main Content */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
