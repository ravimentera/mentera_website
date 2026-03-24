"use client";

import { Button } from "@/components/atoms/Button/Button";
import { FormInput } from "@/components/atoms/FormInput/FormInput";
import { Footer } from "@/components/organisms/Footer/Footer";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Integration = {
  name: string;
  description: string;
  image: string;
  category: string;
};

interface IntegrationRequestFormData {
  email: string;
  integrationName: string;
}

interface IntegrationRequestFormErrors {
  email?: string;
  integrationName?: string;
}

type IntegrationRequestField = keyof IntegrationRequestFormData;

const groupedCategoryByRaw: Record<string, string> = {
  "Social Media": "Marketing",
  "File Storage": "Productivity",
  Scheduling: "Productivity",
  Finance: "Payments",
};

const getGroupedCategory = (category: string) =>
  groupedCategoryByRaw[category] ?? category;

const HUBSPOT_PORTAL_ID =
  process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "244277082";
const HUBSPOT_INTEGRATION_REQUEST_FORM_ID =
  process.env.NEXT_PUBLIC_HUBSPOT_INTEGRATION_REQUEST_FORM_ID || "";

const initialIntegrationRequestFormData: IntegrationRequestFormData = {
  email: "",
  integrationName: "",
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
    name: "Dentrix",
    description:
      "Practice management and clinical software designed for dental offices.",
    image: "/app-logos/app-dentrix.png",
    category: "EHR",
  },
  {
    name: "PatientNow",
    description:
      "Medical aesthetics platform for patient engagement and practice operations.",
    image: "/app-logos/app-patientnow.png",
    category: "EHR",
  },
  {
    name: "Denticon",
    description:
      "Cloud-based dental practice management software for clinical and office workflows.",
    image: "/app-logos/app-denticon.png",
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
    name: "Gmail",
    description:
      "Email service for communication, inbox management, and business messaging.",
    image: "/app-logos/app-gmail.png",
    category: "Communication",
  },
  {
    name: "Microsoft Outlook",
    description:
      "Email and calendar platform for communication, scheduling, and collaboration.",
    image: "/app-logos/app-microsoft-outlook.png",
    category: "Communication",
  },
  {
    name: "WhatsApp Business",
    description:
      "Business messaging app for customer support, notifications, and engagement.",
    image: "/app-logos/app-whatsapp-business.png",
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
    name: "Salesforce",
    description:
      "Customer relationship management platform for sales and support workflows.",
    image: "/app-logos/app-salesforce.png",
    category: "CRM",
  },
  {
    name: "HubSpot",
    description:
      "CRM platform for marketing automation, sales pipelines, and customer service.",
    image: "/app-logos/app-hubspot.png",
    category: "CRM",
  },
  {
    name: "GoHighLevel",
    description:
      "CRM and marketing automation platform for sales funnels and communications.",
    image: "/app-logos/app-gohighlevel.png",
    category: "CRM",
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
    name: "PayPal",
    description:
      "Digital payments platform for online checkout and money transfers.",
    image: "/app-logos/app-paypal.png",
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
    name: "Dropbox",
    description: "Cloud storage and file sync platform for team collaboration.",
    image: "/app-logos/app-dropbox.png",
    category: "File Storage",
  },
  {
    name: "Google Drive",
    description: "Cloud file storage and document collaboration platform.",
    image: "/app-logos/app-google-drive.png",
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
    name: "Xero",
    description:
      "Cloud accounting software for invoicing, reconciliation, and bookkeeping.",
    image: "/app-logos/app-xero.png",
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
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestFormData, setRequestFormData] =
    useState<IntegrationRequestFormData>(initialIntegrationRequestFormData);
  const [requestFormErrors, setRequestFormErrors] =
    useState<IntegrationRequestFormErrors>({});
  const [requestFormTouched, setRequestFormTouched] = useState<
    Record<IntegrationRequestField, boolean>
  >({
    email: false,
    integrationName: false,
  });
  const [isRequestSubmitting, setIsRequestSubmitting] = useState(false);
  const [requestSubmitStatus, setRequestSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [requestSubmitMessage, setRequestSubmitMessage] = useState("");

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(integrations.map((item) => getGroupedCategory(item.category))),
      ),
    ],
    [],
  );

  const filteredIntegrations = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return integrations.filter((integration) => {
      const matchesQuery =
        !normalizedQuery ||
        integration.name.toLowerCase().includes(normalizedQuery) ||
        integration.description.toLowerCase().includes(normalizedQuery) ||
        integration.category.toLowerCase().includes(normalizedQuery) ||
        getGroupedCategory(integration.category)
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesCategory =
        selectedCategory === "All" ||
        getGroupedCategory(integration.category) === selectedCategory;

      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const validateRequestField = (
    name: IntegrationRequestField,
    value: string,
  ): string | undefined => {
    switch (name) {
      case "email":
        if (!value.trim()) return "Work email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email address";
        }
        return undefined;
      case "integrationName":
        if (!value.trim()) return "Requested integration is required";
        return undefined;
      default:
        return undefined;
    }
  };

  const validateRequestForm = (): boolean => {
    const newErrors: IntegrationRequestFormErrors = {};

    (Object.keys(requestFormData) as IntegrationRequestField[]).forEach(
      (field) => {
        const error = validateRequestField(field, requestFormData[field]);
        if (error) {
          newErrors[field] = error;
        }
      },
    );

    setRequestFormErrors(newErrors);
    setRequestFormTouched({
      email: true,
      integrationName: true,
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleRequestInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as IntegrationRequestField;

    setRequestFormData((prev) => ({ ...prev, [fieldName]: value }));

    if (requestFormTouched[fieldName]) {
      const error = validateRequestField(fieldName, value);
      setRequestFormErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  const handleRequestInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as IntegrationRequestField;

    setRequestFormTouched((prev) => ({ ...prev, [fieldName]: true }));

    const error = validateRequestField(fieldName, value);
    setRequestFormErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateRequestForm()) {
      return;
    }

    if (!HUBSPOT_INTEGRATION_REQUEST_FORM_ID) {
      setRequestSubmitStatus("error");
      setRequestSubmitMessage(
        "Integration request form is not configured yet.",
      );
      return;
    }

    setIsRequestSubmitting(true);
    setRequestSubmitStatus("idle");

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_INTEGRATION_REQUEST_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [
              { name: "email", value: requestFormData.email },
              { name: "company", value: requestFormData.integrationName },
              {
                name: "message",
                value: `Integration request: ${requestFormData.integrationName}`,
              },
            ],
            context: {
              pageUri: window.location.href,
              pageName: "Integration Request",
            },
          }),
        },
      );

      if (response.ok) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "demo_request",
          form_location: "integration_request_form",
        });
        setRequestSubmitStatus("success");
        setRequestSubmitMessage(
          "Thanks! We received your integration request.",
        );
        setRequestFormData(initialIntegrationRequestFormData);
        setRequestFormTouched({
          email: false,
          integrationName: false,
        });
      } else {
        setRequestSubmitStatus("error");
        setRequestSubmitMessage("Something went wrong. Please try again.");
      }
    } catch {
      setRequestSubmitStatus("error");
      setRequestSubmitMessage("Failed to submit. Please try again later.");
    } finally {
      setIsRequestSubmitting(false);
    }
  };

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
                className="w-full rounded-2xl border border-zinc-200 bg-white py-4 pl-12 pr-4 text-base text-zinc-900 shadow-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
              />
            </div>

            <div
              className="mt-3 flex flex-wrap justify-center gap-2"
              aria-label="Filter integrations by category"
            >
              {categories.map((category) => {
                const isActive = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setSelectedCategory((currentCategory) =>
                        currentCategory === category ? "All" : category,
                      )
                    }
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
                        "rounded-lg",
                      );
                    }}
                  />
                </div>
                <h3 className="text-xl font-medium text-zinc-900 mb-3">
                  {integration.name}
                </h3>
                <span className="mb-3 inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                  {getGroupedCategory(integration.category)}
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

        <div className="mt-16 sm:mt-20 md:mt-24 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setShowRequestModal(true)}
            className="group inline-flex items-center gap-2 text-lg text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Don&apos;t see what you need?
            <span className="text-indigo-600 group-hover:text-indigo-700 font-medium inline-flex items-center gap-1">
              Let us know
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>

        {showRequestModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowRequestModal(false);
                setRequestSubmitStatus("idle");
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl rounded-2xl bg-white p-6 sm:p-8 md:p-10 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => {
                  setShowRequestModal(false);
                  setRequestSubmitStatus("idle");
                }}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 text-center">
                Don&apos;t see your integration?
              </h2>
              <p className="mt-3 text-zinc-600 text-center">
                Tell us what tool you want connected and our team will follow
                up.
              </p>

              <form
                onSubmit={handleRequestSubmit}
                className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your business email"
                  value={requestFormData.email}
                  onChange={handleRequestInputChange}
                  onBlur={handleRequestInputBlur}
                  error={requestFormErrors.email}
                  required
                />
                <FormInput
                  label="Requested Integration"
                  name="integrationName"
                  placeholder="Type the tool you want integrated"
                  value={requestFormData.integrationName}
                  onChange={handleRequestInputChange}
                  onBlur={handleRequestInputBlur}
                  error={requestFormErrors.integrationName}
                  required
                />

                {requestSubmitStatus !== "idle" && (
                  <div
                    className={`md:col-span-2 rounded-lg px-4 py-3 text-sm font-satoshi ${
                      requestSubmitStatus === "success"
                        ? "bg-secondary-light text-green-800"
                        : "bg-red-50 text-red-600"
                    }`}
                    role="alert"
                  >
                    {requestSubmitMessage}
                  </div>
                )}

                <div className="md:col-span-2 flex justify-center md:justify-start">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isRequestSubmitting}
                    className="bg-purple text-white px-8 py-3 rounded-lg font-bold hover:bg-purple/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isRequestSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
};
