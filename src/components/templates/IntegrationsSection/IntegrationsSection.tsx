"use client";

import { motion } from "framer-motion";

// App logos mapping
const appLogos = [
  { name: "Outlook", image: "app-outlook.png" },
  { name: "Slack", image: "app-slack.png" },
  { name: "Salesforce", image: "app-salesforce.png" },
  { name: "Google Drive", image: "app-googledrive.png" },
  { name: "Dropbox", image: "app-dropbox.png" },
  { name: "Zoom", image: "app-zoom.png" },
  { name: "Asana", image: "app-asana.png" },
  { name: "Jira", image: "app-jira.png" },
  { name: "Trello", image: "app-trello.png" },
  { name: "Notion", image: "app-notion.png" },
  { name: "Monday.com", image: "app-monday.png" },
  { name: "HubSpot", image: "app-hubspot.png" },
  { name: "Mailchimp", image: "app-mailchimp.png" },
  { name: "Stripe", image: "app-stripe.png" },
  { name: "PayPal", image: "app-paypal.png" },
  { name: "QuickBooks", image: "app-quickbooks.png" },
  { name: "Xero", image: "app-xero.png" },
  { name: "Shopify", image: "app-shopify.png" },
  { name: "WordPress", image: "app-wordpress.png" },
  { name: "Squarespace", image: "app-squarespace.png" },
];

export const IntegrationsSection = () => {
  return (
    <section className="relative w-full py-20 bg-transparent">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-[458px]"
          >
            <h2 className="heading-h2 text-text-primary">
              Mentera connects with 50+ apps
            </h2>
            <p className="text-body-1 text-text-secondary">
              Aliquet purus felis pulvinar fames venenatis tempor facilisis ac. Amet scelerisque facilisis odio pretium.
            </p>
            <p className="text-body-1 text-text-primary font-medium">
              If we don't have a current integration, we will build it.
            </p>
          </motion.div>

          {/* Right Side - App Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6"
          >
            {appLogos.map((app, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 h-20 flex items-center justify-center border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
              >
                <img
                  src={`/app-logos/${app.image}`}
                  alt={app.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


