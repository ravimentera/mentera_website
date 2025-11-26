"use client";

import { Footer } from "@/components/organisms/Footer/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="relative bg-white">
      {/* Content Container - Width 704px from Figma */}
      <div className="w-full max-w-privacy mx-auto px-4 sm:px-6 py-24 md:py-32">
        {/* Title */}
        <h1 className="font-satoshi font-medium text-4.5xl leading-snug text-zinc-900 mb-8">
          Mentera Inc. Website Privacy Policy
        </h1>

        {/* Effective Date */}
        <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600 mb-8">
          <p>Effective Date: March 12, 2025</p>
          <p>Last Updated: November 25, 2025</p>
        </div>

        {/* Introduction */}
        <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600 mb-8 space-y-4">
          <p>
            Mentera Inc. ("Mentera," "we," "us," or "our") respects your privacy
            and is committed to protecting your personal data. This Website
            Privacy Policy ("Policy") describes how we collect, use, disclose,
            and safeguard information through our websites, webpages, and any
            other online services that link to or reference this Policy
            (collectively, the "Site").
          </p>
          <p>
            By using the Site, you acknowledge that you have read and understand
            this Policy. If you do not agree, please refrain from using the
            Site.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            1. Scope of This Policy
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600 space-y-4">
            <p>
              This Policy applies to information collected by Mentera on or
              through the Site, including when you contact us, request a demo or
              information, sign up for newsletters or events, or otherwise
              interact with our online content.
            </p>
            <p>
              This Policy does not govern data we process through our main
              products or services delivered to our customers under a separate
              agreement (collectively, the "Services"), which may have its own
              privacy terms.
            </p>
            <p>
              This Policy does not apply to any third-party websites or
              platforms that may link to or be accessible from the Site. We
              encourage you to review the privacy policies of any third-party
              sites before providing them with your personal data.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            2. Information We Collect
          </h2>

          {/* 2.1 */}
          <div className="mb-4">
            <h3 className="font-satoshi font-normal text-sm leading-normal text-zinc-900 mb-2">
              2.1 Personal Data
            </h3>
            <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600 space-y-2">
              <p>
                Depending on your interactions with the Site, we may collect and
                process Personal Data, which can include:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <span className="font-medium">Contact Details:</span> Name,
                  business email, business phone number, job title, company
                  name.
                </li>
                <li>
                  <span className="font-medium">Account Information:</span> If
                  you create an account, we collect username, password, and
                  related security details.
                </li>
                <li>
                  <span className="font-medium">Communication Data:</span> The
                  content of messages, inquiries, or feedback you submit via
                  forms or email.
                </li>
                <li>
                  <span className="font-medium">Marketing Preferences:</span>{" "}
                  Information about your preferences for receiving marketing or
                  promotional communications.
                </li>
              </ul>
              <p className="mt-2">
                Note: We do not intend to collect sensitive data (e.g., medical
                data, health data, biometric data) through the Site. If you
                believe you have submitted sensitive data inadvertently, please
                contact us so we can delete it.
              </p>
            </div>
          </div>

          {/* 2.2 */}
          <div>
            <h3 className="font-satoshi font-normal text-sm leading-normal text-zinc-900 mb-2">
              2.2 Usage Data
            </h3>
            <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600 space-y-2">
              <p>
                When you use our Site, we automatically collect certain
                technical information about your visit ("Usage Data"), such as:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <span className="font-medium">
                    Device/Browser Information:
                  </span>{" "}
                  IP address, browser type, device identifiers, operating
                  system.
                </li>
                <li>
                  <span className="font-medium">Site Usage Details:</span> Pages
                  visited, duration on pages, timestamps, referring/exit URLs,
                  and clickstream data.
                </li>
                <li>
                  <span className="font-medium">Location Information:</span>{" "}
                  Approximate geolocation based on IP address, where permitted
                  by law.
                </li>
              </ul>
              <p className="mt-2">
                We may collect this data using cookies, web beacons, and other
                tracking technologies. (See Section 6 below.)
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder for remaining sections to keep file concise for now, or full content if needed. 
            Given the user request for "pixel perfect", I should probably include the rest if I had the full text. 
            I have the full text from the previous file read, so I will migrate it over with the new styling.
        */}

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            3. How We Use Your Information
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600 space-y-4">
            <p>
              We process your information for the following legitimate business
              purposes:
            </p>

            <div className="space-y-2">
              <p className="font-medium">To Provide and Operate the Site</p>
              <ul className="list-disc pl-5">
                <li>
                  Ensure the Site functions properly, enable you to access
                  content, and respond to your inquiries.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-medium">To Communicate With You</p>
              <ul className="list-disc pl-5">
                <li>Respond to your comments or questions.</li>
                <li>
                  Send you service-related notices, updates, or other
                  administrative messages.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-medium">To Market and Promote Our Services</p>
              <ul className="list-disc pl-5">
                <li>
                  Send marketing or promotional communications if you have opted
                  in or if otherwise permitted by law.
                </li>
                <li>
                  Track the performance of marketing campaigns (e.g., open
                  rates, click-throughs).
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-medium">
                To Improve and Develop Our Offerings
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Analyze usage trends to enhance the Site's design, user
                  experience, and security.
                </li>
                <li>
                  Conduct research and diagnostics to develop or improve our
                  products and Services.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-medium">
                To Comply With Legal Obligations and Enforce Our Rights
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Adhere to applicable laws, regulations, or legal processes.
                </li>
                <li>Enforce our Terms of Service and other agreements.</li>
                <li>
                  Protect our rights, privacy, safety, or property, and/or that
                  of you or others.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            4. Legal Bases for Processing (EEA/UK Visitors)
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600 space-y-2">
            <p>
              If you are in the European Economic Area (EEA) or the United
              Kingdom (UK), we process your Personal Data under the following
              legal bases:
            </p>
            <ul className="list-none space-y-2">
              <li>
                <span className="font-medium">Consent:</span> Where you have
                given explicit consent (e.g., when you opt in to receive
                marketing communications).
              </li>
              <li>
                <span className="font-medium">Contract:</span> Where processing
                is necessary for the performance of a contract with you or to
                take steps at your request prior to entering into a contract
                (e.g., demo requests).
              </li>
              <li>
                <span className="font-medium">Legitimate Interests:</span> Where
                processing is in our legitimate interests (e.g., security,
                improving the Site), provided these do not override your
                fundamental rights and freedoms.
              </li>
              <li>
                <span className="font-medium">Legal Obligation:</span> Where we
                must comply with a legal or regulatory obligation.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            5. How We Share Your Information
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600 space-y-4">
            <p>
              We do not sell your Personal Data. We may share your Personal Data
              under the following circumstances:
            </p>

            <div className="space-y-1">
              <p className="font-medium">Service Providers</p>
              <p>
                With third-party vendors and service providers who help us
                operate and maintain the Site, perform analytics, send
                communications, or provide other services on our behalf. These
                parties process data only under our instructions and are bound
                by contractual obligations to keep your data confidential and
                secure.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-medium">Business Transfers</p>
              <p>
                If we engage in a merger, acquisition, asset sale, financing, or
                bankruptcy, your information may be disclosed or transferred to
                the acquiring entity or other relevant third parties as part of
                that transaction.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-medium">Legal and Compliance</p>
              <p>
                To comply with legal obligations, respond to lawful requests
                (e.g., subpoenas, court orders), or protect our rights,
                property, or safety, and that of users or the public.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-medium">With Your Consent</p>
              <p>
                If you explicitly consent or direct us to share information with
                third parties (e.g., for co-marketing or partnerships).
              </p>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            6. Cookies and Other Tracking Technologies
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600 space-y-2">
            <p>
              We use cookies, web beacons, and similar technologies to collect
              Usage Data and improve your experience on the Site. Cookies are
              small text files stored on your device that help us:
            </p>
            <ul className="list-disc pl-5">
              <li>Recognize you when you return to the Site.</li>
              <li>Analyze site traffic and usage patterns.</li>
              <li>Personalize your experience, where applicable.</li>
            </ul>
            <p>
              When you visit or log in to our website, cookies and similar
              technologies may be used by our online data partners or vendors to
              associate these activities with other personal information they or
              others have about you, including by association with your email.
              We (or service providers on our behalf) may then send
              communications and marketing to these emails. You may opt out of
              receiving this advertising by visiting{" "}
              <a
                href="https://app.retention.com/optout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                https://app.retention.com/optout
              </a>
              .
            </p>
            <p>
              You can control cookies through your browser settings. However,
              blocking or deleting certain cookies may impact your user
              experience. We do not currently respond to "Do Not Track" (DNT)
              signals.
            </p>
          </div>
        </div>

        {/* Section 7 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            7. Data Retention
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600 space-y-2">
            <p>
              We retain Personal Data only as long as necessary for the purposes
              described in this Policy, unless a longer retention period is
              required or permitted by law. Factors influencing retention
              periods include:
            </p>
            <ul className="list-disc pl-5">
              <li>Legal or regulatory obligations</li>
              <li>Ongoing contractual relationships or requests</li>
              <li>
                Legitimate business needs (e.g., maintaining records for
                financial or security purposes)
              </li>
            </ul>
          </div>
        </div>

        {/* Section 8 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            8. Data Security
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600">
            <p>
              We employ reasonable technical and organizational measures
              designed to protect your Personal Data from accidental or unlawful
              destruction, loss, alteration, unauthorized disclosure, or access.
              However, no transmission or storage system is completely secure.
              You are responsible for keeping your account credentials
              confidential.
            </p>
          </div>
        </div>

        {/* Section 9 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            9. International Transfers
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600">
            <p>
              Mentera is based in the United States. If you are located outside
              the U.S., your Personal Data may be transferred to, stored, or
              processed in the U.S. or other jurisdictions with data protection
              laws that differ from those in your country of residence. In such
              cases, we ensure appropriate safeguards (such as Standard
              Contractual Clauses) to protect your Personal Data.
            </p>
          </div>
        </div>

        {/* Section 10 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            10. Your Rights and Choices
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600 space-y-4">
            <div className="space-y-1">
              <p className="font-medium">10.1 Marketing Communications</p>
              <p>
                You may opt out of receiving marketing emails from us by
                clicking "unsubscribe" in any email or contacting us at{" "}
                <a
                  href="mailto:support@mentera.ai"
                  className="text-purple-600 hover:underline"
                >
                  support@mentera.ai
                </a>
                .
              </p>
              <p>
                Even if you opt out of marketing, we may still send you
                non-promotional communications (e.g., transaction confirmations,
                updates to this Policy).
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-medium">10.2 Data Subject Rights</p>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-none space-y-2">
                <li>
                  <span className="font-medium">Access:</span> Request
                  confirmation of whether we process your Personal Data and, if
                  so, obtain a copy.
                </li>
                <li>
                  <span className="font-medium">Rectify:</span> Request
                  correction of any inaccurate or incomplete Personal Data.
                </li>
                <li>
                  <span className="font-medium">Delete:</span> Request deletion
                  of your Personal Data, subject to legal and contractual
                  limitations.
                </li>
                <li>
                  <span className="font-medium">Object:</span> Object to certain
                  processing (e.g., direct marketing).
                </li>
                <li>
                  <span className="font-medium">Withdraw Consent:</span> Where
                  processing is based on consent, withdraw that consent at any
                  time without affecting the lawfulness of processing before
                  withdrawal.
                </li>
              </ul>
              <p className="mt-2">
                To exercise these rights, please contact{" "}
                <a
                  href="mailto:support@mentera.ai"
                  className="text-purple-600 hover:underline"
                >
                  support@mentera.ai
                </a>
                . We will respond in accordance with applicable laws.
              </p>
            </div>
          </div>
        </div>

        {/* Section 11 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            11. Children's Privacy
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600">
            <p>
              The Site is not directed to individuals under 18 (or another age
              as required by local law), and we do not knowingly collect
              Personal Data from children. If you become aware that a child has
              provided us with Personal Data, please contact us at{" "}
              <a
                href="mailto:support@mentera.ai"
                className="text-purple-600 hover:underline"
              >
                support@mentera.ai
              </a>{" "}
              so we can delete such information.
            </p>
          </div>
        </div>

        {/* Section 12 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            12. Third-Party Websites and Services
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600">
            <p>
              Our Site may contain links to third-party websites or services,
              which are governed by their own privacy policies. We are not
              responsible for the privacy practices of such third parties. We
              encourage you to review their policies before providing any
              information.
            </p>
          </div>
        </div>

        {/* Section 13 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            13. California Privacy Rights
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600 space-y-2">
            <p>
              If you are a California resident, you have additional rights under
              the California Consumer Privacy Act (CCPA), such as:
            </p>
            <ul className="list-disc pl-5">
              <li>
                The right to know the categories of Personal Data we collect,
                use, disclose, or sell (we do <strong>not</strong> sell Personal
                Data).
              </li>
              <li>
                The right to request that we delete your Personal Data, subject
                to certain exceptions.
              </li>
              <li>
                The right to be free from discrimination for exercising your
                CCPA rights.
              </li>
            </ul>
            <p>
              To exercise these rights or for more information, please email us
              at{" "}
              <a
                href="mailto:support@mentera.ai"
                className="text-purple-600 hover:underline"
              >
                support@mentera.ai
              </a>
              .
            </p>
          </div>
        </div>

        {/* Section 14 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            14. Other U.S. State Privacy Laws
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600">
            <p>
              Certain U.S. states (e.g., Virginia, Colorado, Connecticut) have
              enacted or are enacting privacy legislation. If you reside in a
              state with privacy laws granting additional consumer rights, you
              may be entitled to similar disclosures and rights as provided
              under the CCPA. Please contact us at{" "}
              <a
                href="mailto:support@mentera.ai"
                className="text-purple-600 hover:underline"
              >
                support@mentera.ai
              </a>{" "}
              to inquire about specific rights in your state.
            </p>
          </div>
        </div>

        {/* Section 15 */}
        <div className="mb-8">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            15. Changes to This Policy
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600">
            <p>
              We may update or modify this Policy from time to time. If we make
              material changes, we will notify you by posting a prominent notice
              on the Site or by other appropriate means. Your continued use of
              the Site after any changes become effective indicates your
              acceptance of the revised Policy.
            </p>
          </div>
        </div>

        {/* Section 16 */}
        <div className="mb-12">
          <h2 className="font-satoshi font-medium text-lg leading-normal text-zinc-900 mb-2">
            16. How to Contact Us
          </h2>
          <div className="font-satoshi font-normal text-sm leading-normal text-zinc-600">
            <p>
              If you have questions or concerns about this Policy or wish to
              exercise your privacy rights, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Mentera Inc.</strong>
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@mentera.ai"
                className="text-purple-600 hover:underline"
              >
                support@mentera.ai
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
