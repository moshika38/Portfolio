import React from "react";
import LegalPageLayout from "@/components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Pamoth Moshika",
  description:
    "Privacy Policy explaining how client data is collected, stored, and protected during freelance software development engagements with Pamoth Moshika.",
};

const PrivacyPolicyPage = () => {
  const sections = [
    {
      heading: "Introduction",
      content: (
        <>
          <p>
            This Privacy Policy explains how <strong className="text-white/70">Pamoth Moshika</strong>{" "}
            (&ldquo;I&rdquo;, &ldquo;me&rdquo;, or &ldquo;the Developer&rdquo;), a freelance software
            developer and IT solutions provider based in Badulla, Sri Lanka, collects, uses, stores,
            and protects personal and project-related information shared by clients
            (&ldquo;you&rdquo; or &ldquo;the Client&rdquo;) during the course of service engagements.
          </p>
          <p>
            By engaging my services or submitting information through this website or any
            communication channel, you consent to the practices described in this policy.
          </p>
        </>
      ),
    },
    {
      heading: "Information I Collect",
      content: (
        <>
          <p>
            During the course of a project engagement or initial inquiry, I may collect the
            following types of information:
          </p>
          <ul className="list-none space-y-3 mt-3">
            {[
              {
                label: "Contact Information",
                desc: "Name, email address, phone number, and country of residence — used to communicate with you about your project.",
              },
              {
                label: "Communication History",
                desc: "Emails, messages, meeting notes, and any written correspondence related to your project requirements and feedback.",
              },
              {
                label: "Project Data",
                desc: "Requirements documents, design briefs, content assets, credentials, and any other files you share in connection with the project.",
              },
              {
                label: "Payment Information",
                desc: "Invoice records, payment confirmations, and transaction references. Sensitive payment card details are never collected or stored by me directly.",
              },
              {
                label: "Website Usage Data",
                desc: "If you visit this portfolio website, basic analytics data (e.g., page views, browser type) may be collected automatically by the hosting platform.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-2" />
                <span>
                  <strong className="text-white/60">{item.label}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      heading: "How I Use Your Information",
      content: (
        <>
          <p>The information collected is used solely for the following purposes:</p>
          <ul className="list-none space-y-2 mt-3">
            {[
              "To communicate with you regarding project requirements, progress, and deliverables.",
              "To process invoices and track payment status.",
              "To fulfil contractual obligations under the agreed project scope.",
              "To maintain accurate records of project history for reference and dispute resolution.",
              "To send service-related updates or notifications (not for marketing purposes).",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            I do <strong className="text-white/70">not</strong> sell, trade, rent, or share your
            personal information with third parties for marketing or advertising purposes.
          </p>
        </>
      ),
    },
    {
      heading: "Payment Processing & Security",
      content: (
        <>
          <p>
            Payments for services are processed via secure, trusted third-party payment gateways,
            which may include <strong className="text-white/70">PayHere</strong> and bank transfers.
            These platforms are PCI-DSS compliant and operate under their own privacy policies
            and security standards.
          </p>
          <p>
            <strong className="text-white/70">
              No sensitive payment card details — including card numbers, CVV codes, or PINs
              — are collected, processed, or stored by me directly.
            </strong>{" "}
            All financial transactions are handled entirely by the third-party payment gateway.
          </p>
          <p>
            Payment transaction references and invoice records are retained for accounting
            and legal compliance purposes.
          </p>
        </>
      ),
    },
    {
      heading: "Data Storage & Protection",
      content: (
        <>
          <p>
            Your information is stored securely using industry-standard tools and practices:
          </p>
          <ul className="list-none space-y-2 mt-3">
            {[
              "Project files and communication records are stored in password-protected cloud storage services (e.g., Google Drive, GitHub private repositories).",
              "Email communications are stored within encrypted email services.",
              "Access to your project data is restricted to me only, unless a specific third-party collaborator is engaged with your prior consent.",
              "Devices used to access or store your data are protected with strong passwords and up-to-date security software.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            While I take all reasonable steps to protect your information, no method of
            electronic transmission or storage is 100% secure. By using my services, you
            acknowledge this inherent risk.
          </p>
        </>
      ),
    },
    {
      heading: "Data Retention",
      content: (
        <>
          <p>
            Project-related data and communication records are retained for a period of{" "}
            <strong className="text-white/70">two (2) years</strong> after project completion
            to support potential future maintenance, warranty claims, or dispute resolution.
          </p>
          <p>
            After this retention period, data is securely deleted or anonymised unless
            there is a legal obligation to retain it longer.
          </p>
          <p>
            You may request early deletion of your data by contacting me directly at{" "}
            <strong className="text-white/70">moshika38@gmail.com</strong>. Requests will
            be honoured within 30 days, subject to any legal retention requirements.
          </p>
        </>
      ),
    },
    {
      heading: "Your Rights",
      content: (
        <>
          <p>You have the right to:</p>
          <ul className="list-none space-y-2 mt-3">
            {[
              "Request access to the personal information I hold about you.",
              "Request correction of any inaccurate or outdated information.",
              "Request deletion of your personal data (subject to legal obligations).",
              "Withdraw consent to any data processing at any time by contacting me in writing.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            To exercise any of these rights, please contact me at{" "}
            <strong className="text-white/70">moshika38@gmail.com</strong>.
          </p>
        </>
      ),
    },
    {
      heading: "Third-Party Services",
      content: (
        <p>
          This website or project tools may reference or link to third-party services
          (e.g., GitHub, PayHere, Google). These third parties operate under their own
          independent privacy policies, and I am not responsible for their practices.
          I encourage you to review the privacy policies of any third-party platforms
          you interact with.
        </p>
      ),
    },
    {
      heading: "Updates to This Policy",
      content: (
        <p>
          This Privacy Policy may be updated periodically to reflect changes in practice
          or legal requirements. The most current version will be published at{" "}
          <strong className="text-white/70">pamothmoshika.com/privacy-policy</strong>.
          Continued engagement with my services after any update constitutes acceptance
          of the revised policy.
        </p>
      ),
    },
    {
      heading: "Contact",
      content: (
        <>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy,
            please contact:
          </p>
          <div className="mt-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-2">
            <p><strong className="text-white/60">Name:</strong> SA Pamoth Moshika</p>
            <p><strong className="text-white/60">Email:</strong> moshika38@gmail.com</p>
            <p><strong className="text-white/60">Location:</strong> Badulla, Sri Lanka</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How your personal and project data is collected, used, and protected during freelance software development engagements."
      effectiveDate="October 2026"
      icon={
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      }
      sections={sections}
    />
  );
};

export default PrivacyPolicyPage;
