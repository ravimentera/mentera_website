"use client";

import { Footer } from "@/components/organisms/Footer/Footer";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Integration = {
  name: string;
  description: string;
  image: string;
  category: string;
};

const integrations: Integration[] = [
  {
    name: "DrChrono",
    description:
      "All-in-one cloud-based EHR, practice management, and medical billing platform.",
    image: "/app-logos/app-drchrono.png",
    category: "EHR",
  },
  {
    name: "Athena Health",
    description: "Cloud-based EHR and practice management system.",
    image: "/app-logos/app-athenahealth.png",
    category: "EHR",
  },
  {
    name: "Boulevard",
    description:
      "Client experience platform for wellness and personal care businesses.",
    image: "/app-logos/app-boulevard.png",
    category: "Practice Management",
  },
  {
    name: "Nextech",
    description: "Specialty-specific EHR and practice management solution.",
    image: "/app-logos/app-nextech.png",
    category: "EHR",
  },
  {
    name: "Jane App",
    description:
      "Practice management software for health and wellness professionals.",
    image: "/app-logos/app-janeapp.png",
    category: "Practice Management",
  },
  {
    name: "Twilio",
    description:
      "Cloud-based platform for SMS, voice, and patient communication APIs.",
    image: "/app-logos/app-twilio.png",
    category: "Communication",
  },
  {
    name: "SendGrid",
    description:
      "Email delivery service for transactional and marketing messages.",
    image: "/app-logos/app-sendgrid.png",
    category: "Communication",
  },
  {
    name: "Mailchimp",
    description:
      "All-in-one marketing automation platform for email campaigns.",
    image: "/app-logos/app-mailchimp.png",
    category: "Marketing",
  },
  {
    name: "Stripe",
    description: "Platform for online payments and financial services.",
    image: "/app-logos/app-stripe.png",
    category: "Payments",
  },
  {
    name: "Square",
    description:
      "Payment processing and business management tools for small businesses.",
    image: "/app-logos/app-square.png",
    category: "Payments",
  },
  {
    name: "Clover",
    description:
      "Point-of-sale and payment platform for physical and online commerce.",
    image: "/app-logos/app-clover.png",
    category: "Payments",
  },
  {
    name: "Slack",
    description: "Messaging platform for team collaboration and productivity.",
    image: "/app-logos/app-slack.png",
    category: "Communication",
  },
  {
    name: "Instagram",
    description:
      "Social media platform for visual content, messaging, and engagement.",
    image: "/app-logos/app-instagram.png",
    category: "Social Media",
  },
  {
    name: "Facebook",
    description:
      "Social networking platform for audience engagement and business pages.",
    image: "/app-logos/app-facebook.png",
    category: "Social Media",
  },
  {
    name: "Google",
    description:
      "Suite of tools for productivity, scheduling, and cloud-based workflows.",
    image: "/app-logos/app-google.png",
    category: "Productivity",
  },
  {
    name: "Microsoft",
    description:
      "Tools for communication, scheduling, and document collaboration.",
    image: "/app-logos/app-microsoft.png",
    category: "Productivity",
  },
  {
    name: "OneDrive",
    description:
      "Cloud storage and file sharing platform for secure document access.",
    image: "/app-logos/app-microsoft-one-drive.png",
    category: "File Storage",
  },
  {
    name: "Microsoft Teams",
    description:
      "Team communication platform for chat, meetings, and collaboration.",
    image: "/app-logos/app-microsoft-teams.png",
    category: "Communication",
  },
  {
    name: "Microsoft SharePoint",
    description:
      "Document management and collaboration platform for teams and intranets.",
    image: "/app-logos/app-sharepoint.png",
    category: "File Storage",
  },
  {
    name: "Box",
    description:
      "Cloud content management and file-sharing platform for secure collaboration.",
    image: "/app-logos/app-box.png",
    category: "File Storage",
  },
  {
    name: "QuickBooks",
    description:
      "Accounting software for invoicing, bookkeeping, and financial tracking.",
    image: "/app-logos/app-quickbooks.png",
    category: "Finance",
  },
  {
    name: "Calendly",
    description:
      "Online appointment scheduling software for individuals and teams.",
    image: "/app-logos/app-calendly.png",
    category: "Scheduling",
  },
];

export const IntegrationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(integrations.map((item) => item.category)))],
    []
  );

  const filteredIntegrations = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return integrations.filter((integration) => {
      const matchesQuery =
        !normalizedQuery ||
        integration.name.toLowerCase().includes(normalizedQuery) ||
        integration.description.toLowerCase().includes(normalizedQuery) ||
        integration.category.toLowerCase().includes(normalizedQuery);

      const matchesCategory =
        selectedCategory === "All" || integration.category === selectedCategory;

      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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

          <div className="max-w-6xl mx-auto mt-8">
            <label htmlFor="integration-search" className="sr-only">
              Search integrations
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                id="integration-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by app name or category (e.g. Payments, EHR, Social Media)"
                className="w-full rounded-2xl border border-zinc-200 bg-white py-4 pl-12 pr-4 text-base text-zinc-900 shadow-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
              />
            </div>

            <div
              className="mt-3 flex gap-2 overflow-x-auto pb-1"
              aria-label="Filter integrations by category"
            >
              {categories.map((category) => {
                const isActive = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "border-zinc-900 bg-zinc-900 text-white"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-sm text-zinc-500 text-left sm:text-center">
              Showing {filteredIntegrations.length} of {integrations.length}{" "}
              integrations
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.length > 0 ? (
            filteredIntegrations.map((integration, index) => (
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
                <span className="mb-3 inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                  {integration.category}
                </span>
                <p className="text-base text-text-primary leading-relaxed">
                  {integration.description}
                </p>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-zinc-300 bg-white/80 p-8 text-center">
              <h3 className="text-xl font-medium text-zinc-900">
                No integrations found
              </h3>
              <p className="mt-2 text-zinc-600">
                Try a different app name or clear your search to see all
                integrations.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
};
