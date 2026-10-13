import React from "react";
import LegalPageLayout from "@/components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Pamoth Moshika",
  description:
    "Terms and Conditions for freelance software development services provided by Pamoth Moshika, including service scope, delivery terms, intellectual property, and liability.",
};

const TermsAndConditionsPage = () => {
  const sections = [
    {
      heading: "Introduction & Acceptance",
      content: (
        <>
          <p>
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern all freelance software
            development and IT solution services provided by <strong className="text-white/70">Pamoth Moshika</strong>{" "}
            (&ldquo;I&rdquo;, &ldquo;me&rdquo;, or &ldquo;the Developer&rdquo;), operating as an
            independent freelance software developer and IT solutions provider based in Badulla, Sri Lanka.
          </p>
          <p>
            By engaging my services — whether through direct communication, a signed project
            agreement, or payment of any deposit — you (&ldquo;the Client&rdquo;) acknowledge
            that you have read, understood, and agree to be bound by these Terms in full.
          </p>
          <p>
            These Terms apply to all service engagements including, but not limited to, web
            development, mobile application development, custom software solutions, AI integrations,
            graphic design, and related consulting or maintenance work.
          </p>
        </>
      ),
    },
    {
      heading: "Scope of Services",
      content: (
        <>
          <p>
            I provide freelance software development and IT solutions services that may include:
          </p>
          <ul className="list-none space-y-2 mt-3">
            {[
              "Web development — front-end, back-end, and full-stack web applications using frameworks such as Next.js, React, Node.js, and Laravel.",
              "Mobile application development — cross-platform and native mobile apps for Android and iOS using Flutter and React Native.",
              "Custom software solutions — bespoke software tools, automation scripts, and business logic implementations.",
              "AI & automation — AI-powered application integrations, chatbots, and workflow automation using platforms such as OpenAI and Google Gemini.",
              "Graphic & UI/UX design — digital design assets, brand materials, and user interface mockups.",
              "Consulting & technical advisory services.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            The specific deliverables, timelines, and pricing for each engagement will be
            defined in a separate project proposal or agreement shared prior to commencement
            of work. Any features or deliverables not explicitly listed in the agreed scope
            are considered out of scope and may be subject to additional charges.
          </p>
        </>
      ),
    },
    {
      heading: "Project Delivery & Milestones",
      content: (
        <>
          <p>
            All projects are broken into milestones agreed upon before work commences.
            Estimated delivery timelines are provided in good faith and are subject to
            the timely receipt of all required materials, feedback, and approvals from the Client.
          </p>
          <p>
            Delays caused by the Client — including late feedback, delayed asset delivery,
            requirement changes, or lack of access to necessary accounts or systems — will
            result in a proportional extension of the delivery timeline with no penalty to
            the Developer. Significant scope changes may require a revised agreement and
            adjusted timeline.
          </p>
          <p>
            Work will not proceed to the next milestone until the previous milestone has been
            reviewed and approved (or deemed approved after 5 business days of no response),
            and the associated milestone payment has been received.
          </p>
        </>
      ),
    },
    {
      heading: "Client Responsibilities",
      content: (
        <>
          <p>The Client is responsible for:</p>
          <ul className="list-none space-y-2 mt-3">
            {[
              "Providing complete, accurate, and timely project requirements, content, assets, and credentials needed for the project.",
              "Reviewing and approving deliverables within a reasonable timeframe (typically 5 business days per milestone).",
              "Ensuring that any third-party content, trademarks, or materials provided to the Developer are legally licensed for use.",
              "Maintaining backup copies of all data and assets provided to the Developer.",
              "Designating a primary point of contact with authority to approve decisions during the project.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      heading: "Revisions Policy",
      content: (
        <>
          <p>
            Each project milestone includes a reasonable number of revisions as specified in
            the project agreement (typically up to <strong className="text-white/70">two rounds</strong> of
            revisions per deliverable). A revision is defined as a minor adjustment to an
            already approved design or functional specification.
          </p>
          <p>
            Requests that constitute new features, significant design overhauls, or changes
            to the original agreed scope are not considered revisions and will be quoted
            separately as additional work.
          </p>
          <p>
            Revision requests must be submitted in writing (email or agreed communication
            platform) and clearly describe the changes requested.
          </p>
        </>
      ),
    },
    {
      heading: "Intellectual Property & Ownership",
      content: (
        <>
          <p>
            All work created during a project remains the intellectual property of{" "}
            <strong className="text-white/70">Pamoth Moshika</strong> until full and final
            payment has been received for the completed project.
          </p>
          <p>
            Upon receipt of full payment, the Client is granted full ownership and rights
            to the final deliverables, including source code, design files, and associated
            assets. This transfer of ownership covers only the specific deliverables produced
            for the Client&apos;s project — it does not transfer ownership of any pre-existing
            tools, libraries, frameworks, or boilerplate code used in development.
          </p>
          <p>
            The Developer retains the right to showcase non-confidential work in a portfolio
            unless the Client explicitly requests otherwise in writing and it is agreed upon
            before project commencement.
          </p>
        </>
      ),
    },
    {
      heading: "Payment Terms",
      content: (
        <>
          <p>
            Payment schedules are agreed on a per-project basis. A non-refundable upfront
            deposit (typically 30–50% of the total project value) is required before work
            commences. Subsequent payments are tied to milestone completion as defined in
            the project agreement.
          </p>
          <p>
            Invoices are due within <strong className="text-white/70">7 calendar days</strong> of
            issuance unless otherwise agreed. Late payments may result in a pause of work
            until the outstanding balance is cleared. The Developer reserves the right to
            charge a late payment fee of 2% per month on overdue balances.
          </p>
          <p>
            Payments may be processed via bank transfer, PayHere, or other agreed payment
            platforms. All fees associated with payment processing are borne by the Client
            unless otherwise agreed.
          </p>
        </>
      ),
    },
    {
      heading: "Limitation of Liability",
      content: (
        <>
          <p>
            To the maximum extent permitted by applicable law, the Developer shall not be
            liable for any indirect, incidental, consequential, or punitive damages arising
            from the use of or inability to use the delivered work, including but not limited
            to loss of revenue, data loss, or business interruption.
          </p>
          <p>
            The Developer&apos;s total liability for any claim arising out of or relating to
            a project shall not exceed the total amount paid by the Client for that specific project.
          </p>
          <p>
            The Developer makes no warranties regarding the continuous, error-free operation of
            delivered software in all environments. The Client is responsible for conducting
            adequate testing before deploying any delivered work to production.
          </p>
        </>
      ),
    },
    {
      heading: "Confidentiality",
      content: (
        <>
          <p>
            Both parties agree to maintain the confidentiality of any proprietary or sensitive
            information shared during the course of the project. Confidential information
            includes business strategies, technical systems, client data, financial information,
            and any materials explicitly marked as confidential.
          </p>
          <p>
            This obligation of confidentiality survives the termination of the project engagement
            for a period of <strong className="text-white/70">two (2) years</strong>.
          </p>
          <p>
            The Developer will not disclose, sell, or transfer the Client&apos;s confidential
            information to any third party without prior written consent from the Client.
          </p>
        </>
      ),
    },
    {
      heading: "Termination",
      content: (
        <>
          <p>
            Either party may terminate a project engagement with written notice. In the event
            of termination by the Client, all work completed up to the point of termination
            will be invoiced at the agreed rate, and the initial deposit is non-refundable.
            Work completed beyond the deposit value will be invoiced and is payable upon termination.
          </p>
          <p>
            The Developer reserves the right to terminate an engagement immediately if the
            Client engages in abusive behaviour, requests unlawful work, or fails to make
            payment after reasonable notice.
          </p>
        </>
      ),
    },
    {
      heading: "Governing Law",
      content: (
        <p>
          These Terms shall be governed by and construed in accordance with the laws of
          Sri Lanka. Any disputes arising under these Terms shall be resolved through good-faith
          negotiation. If negotiation fails, disputes shall be submitted to the jurisdiction
          of the courts of Sri Lanka.
        </p>
      ),
    },
    {
      heading: "Amendments",
      content: (
        <p>
          These Terms may be updated from time to time. The most current version will always
          be available at <strong className="text-white/70">pamothmoshika.com/terms-and-conditions</strong>.
          Continued engagement with the Developer&apos;s services after any updates constitutes
          acceptance of the revised Terms.
        </p>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before engaging freelance software development or IT solution services."
      effectiveDate="October 2026"
      icon={
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      }
      sections={sections}
    />
  );
};

export default TermsAndConditionsPage;
