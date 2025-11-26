"use client";

import { Footer } from "@/components/organisms/Footer/Footer";
import { motion } from "framer-motion";

const integrations = [
  {
    name: "DrChrono",
    description:
      "All-in-one cloud-based EHR, practice management, and medical billing platform.",
    image: "/app-logos/app-drchrono.png",
  },
  {
    name: "Athena Health",
    description: "Cloud-based EHR and practice management system.",
    image: "/app-logos/app-athenahealth.png",
  },
  {
    name: "Boulevard",
    description:
      "Client experience platform for wellness and personal care businesses.",
    image: "/app-logos/app-boulevard.png",
  },
  {
    name: "Nextech",
    description: "Specialty-specific EHR and practice management solution.",
    image: "/app-logos/app-nextech.png",
  },
  {
    name: "Jane App",
    description:
      "Practice management software for health and wellness professionals.",
    image: "/app-logos/app-janeapp.png",
  },
  {
    name: "Twilio",
    description:
      "Cloud-based platform for SMS, voice, and patient communication APIs.",
    image: "/app-logos/app-twilio.png",
  },
  {
    name: "SendGrid",
    description:
      "Email delivery service for transactional and marketing messages.",
    image: "/app-logos/app-sendgrid.png",
  },
  {
    name: "Mailchimp",
    description:
      "All-in-one marketing automation platform for email campaigns.",
    image: "/app-logos/app-mailchimp.png",
  },
  {
    name: "Stripe",
    description: "Platform for online payments and financial services.",
    image: "/app-logos/app-stripe.png",
  },
  {
    name: "Square",
    description:
      "Payment processing and business management tools for small businesses.",
    image: "/app-logos/app-square.png",
  },
  {
    name: "Clover",
    description:
      "Point-of-sale and payment platform for physical and online commerce.",
    image: "/app-logos/app-clover.png",
  },
  {
    name: "Slack",
    description: "Messaging platform for team collaboration and productivity.",
    image: "/app-logos/app-slack.png",
  },
  {
    name: "Google",
    description:
      "Suite of tools for productivity, scheduling, and cloud-based workflows.",
    image: "/app-logos/app-google.png",
  },
  {
    name: "Microsoft",
    description:
      "Tools for communication, scheduling, and document collaboration.",
    image: "/app-logos/app-microsoft.png",
  },
  {
    name: "Calendly",
    description:
      "Online appointment scheduling software for individuals and teams.",
    image: "/app-logos/app-calendly.png",
  },
];

export const IntegrationsPage = () => {
  return (
    <main className="relative bg-white min-h-screen pt-14 sm:pt-16 md:pt-20 lg:pt-24 font-satoshi">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-blog-hero-gradient" />
      </div>

      <div className="absolute inset-0 opacity-60 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full opacity-40 bg-blog-blob-purple blur-huge top-[20%] left-[10%]" />
        <div className="absolute w-96 h-96 rounded-full opacity-40 bg-blog-blob-green blur-huge top-[40%] right-[15%]" />
        <div className="absolute w-96 h-96 rounded-full opacity-20 bg-blog-blob-green blur-[200px] bottom-[10%] left-[25%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-zinc-900  mb-6 leading-tight">
            Boost your workflow and connect
            <br className="hidden md:block" /> your favorite tools
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto">
            Mentera plugs into your healthcare tools, so no long set up
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start h-full"
            >
              <div className="mb-6 w-12 h-12 relative flex-shrink-0">
                <img
                  src={integration.image}
                  alt={integration.name}
                  className="w-full h-full object-contain object-left rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.classList.add(
                      "bg-gray-200",
                      "rounded-lg"
                    );
                  }}
                />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-3">
                {integration.name}
              </h3>
              <p className="text-base text-text-primary leading-relaxed">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};
