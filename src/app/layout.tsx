import { ParticleBackground } from "@/components/atoms/ParticleBackground/ParticleBackground";
import { Navigation } from "@/components/organisms/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "./globals.css";
import "@crayonai/react-ui/styles/index.css";

export const metadata: Metadata = {
  title: {
    default: "Mentera - AI Assistant for Private Practices",
    template: "%s | Mentera.ai",
  },
  description:
    "Streamline your practices operations with an AI Assistant that puts your company's knowledge to work. From AI-powered follow ups, scribe, and front desk.",
  keywords: [
    "med spa software",
    "AI healthcare",
    "patient management",
    "medical aesthetics",
    "practice management",
    "AI assistant",
    "medical spa",
    "clinic management",
    "healthcare automation",
    "med spa CRM",
    "patient scheduling software",
    "medical practice software",
    "aesthetic practice management",
    "AI medical assistant",
    "healthcare AI",
    "med spa technology",
    "patient care automation",
    "medical appointment scheduling",
    "EHR integration",
    "HIPAA compliant software",
  ],
  authors: [{ name: "Mentera.ai", url: "https://mentera.ai" }],
  creator: "Mentera.ai",
  publisher: "Mentera.ai",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://mentera.ai"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mentera.ai",
    siteName: "Mentera.ai",
    title: "Mentera - AI Assistant for Private Practices",
    description:
      "Streamline your practices operations with an AI Assistant that puts your company's knowledge to work. From AI-powered follow ups, scribe, and front desk.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mentera.ai Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentera - AI Assistant for Private Practices",
    description:
      "Streamline your practices operations with an AI Assistant that puts your company's knowledge to work. From AI-powered follow ups, scribe, and front desk.",
    images: ["/og-image.png"],
    creator: "@mentera_ai",
    site: "@mentera_ai",
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "Healthcare Technology",
  classification: "Business Software",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Mentera",
    "format-detection": "telephone=no",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#4d28df",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KF73KMBK');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="manifest" href="/manifest.json" />
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Mentera.ai RSS Feed"
          href="/feed.xml"
        />
        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://mentera.ai/#organization",
                  name: "Mentera.ai",
                  url: "https://mentera.ai",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://mentera.ai/flogo.svg",
                    width: 200,
                    height: 60,
                  },
                  sameAs: [
                    "https://twitter.com/mentera_ai",
                    "https://www.linkedin.com/company/mentera-ai",
                    "https://www.facebook.com/mentera.ai",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "Customer Service",
                    email: "support@mentera.ai",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mentera.ai/#website",
                  url: "https://mentera.ai",
                  name: "Mentera.ai",
                  description:
                    "Streamline your practices operations with an AI Assistant that puts your company's knowledge to work. From AI-powered follow ups, scribe, and front desk.",
                  publisher: {
                    "@id": "https://mentera.ai/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://mentera.ai/search?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://mentera.ai/#software",
                  name: "Mentera.ai",
                  applicationCategory: "HealthApplication",
                  operatingSystem: "Web",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    ratingCount: "150",
                  },
                  featureList: [
                    "AI-powered patient care",
                    "Automated follow-ups",
                    "Intelligent scheduling",
                    "EHR integration",
                    "CRM functionality",
                    "HIPAA compliant",
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col antialiased tw-bg-white text-gray-900 bg-transparent overflow-x-hidden font-satoshi">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KF73KMBK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
