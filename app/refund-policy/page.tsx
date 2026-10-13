import React from "react";
import LegalPageLayout from "@/components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — Pamoth Moshika",
  description:
    "Refund and cancellation policy for freelance software development services provided by Pamoth Moshika, including milestone-based refunds and PayHere payment processing terms.",
};

const RefundPolicyPage = () => {
  const sections = [
    {
      heading: "Overview",
      content: (
        <>
          <p>
            This Refund Policy outlines the terms under which refunds may be issued for
            freelance software development and IT solution services provided by{" "}
            <strong className="text-white/70">Pamoth Moshika</strong>{" "}
            (&ldquo;the Developer&rdquo;), a sole-trader based in Badulla, Sri Lanka.
          </p>
          <p>
            Due to the custom, time-intensive nature of software development services,
            refunds are handled on a milestone and completion basis as described below.
            Please read this policy carefully before commissioning any project.
          </p>
        </>
      ),
    },
    {
      heading: "Project Structure & Milestone Payments",
      content: (
        <>
          <p>
            All projects are structured into agreed milestones prior to commencement.
            Each milestone represents a defined unit of deliverable work with an associated
            payment. The typical payment structure is:
          </p>
          <ul className="list-none space-y-3 mt-3">
            {[
              {
                label: "Upfront Deposit (30–50%)",
                desc: "Required before any work begins. This deposit covers initial research, planning, architecture design, and project setup.",
              },
              {
                label: "Milestone Payments",
                desc: "Payments tied to delivery and approval of each agreed milestone (e.g., design approval, development completion, testing sign-off).",
              },
              {
                label: "Final Payment",
                desc: "The remaining balance due upon project completion and handover of all final deliverables.",
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
      heading: "Upfront Deposit — Non-Refundable",
      content: (
        <>
          <p>
            The initial upfront deposit paid before project commencement is{" "}
            <strong className="text-white/70">strictly non-refundable</strong> under all
            circumstances. This policy exists because:
          </p>
          <ul className="list-none space-y-2 mt-3">
            {[
              "The deposit secures the Developer's time and availability for your project, preventing other work from being accepted.",
              "Work on planning, research, scoping, and architecture typically begins immediately upon receipt of the deposit.",
              "Time invested in pre-project work cannot be recovered once it is performed.",
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
      heading: "Cancellation by the Client",
      content: (
        <>
          <p>
            If the Client cancels the project after work has commenced, the following
            rules apply:
          </p>
          <ul className="list-none space-y-3 mt-3">
            {[
              {
                label: "Before any milestone is delivered",
                desc: "The upfront deposit is retained in full. No additional charges apply.",
              },
              {
                label: "After one or more milestones are delivered",
                desc: "All completed and delivered milestones are invoiced at the agreed rate and are non-refundable. The Client is liable for payment of any outstanding milestone invoices.",
              },
              {
                label: "After full delivery but before final payment",
                desc: "The Client remains liable for the full project balance, as all deliverables have been provided.",
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
          <p className="mt-4">
            Cancellation requests must be submitted in writing to{" "}
            <strong className="text-white/70">moshika38@gmail.com</strong>. The cancellation
            effective date is the date the written notice is received.
          </p>
        </>
      ),
    },
    {
      heading: "Eligibility for Refunds",
      content: (
        <>
          <p>
            A partial or full refund of a milestone payment may be considered only in the
            following circumstances:
          </p>
          <ul className="list-none space-y-2 mt-3">
            {[
              "The Developer is unable to deliver the agreed milestone due to circumstances within the Developer's control.",
              "The delivered work materially and demonstrably fails to meet the written specifications agreed upon before work commenced, and the Developer is unable to rectify the deficiency within a reasonable period.",
              "The project is cancelled by the Developer prior to commencement due to unforeseen circumstances.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Refund eligibility is assessed on a case-by-case basis and is not guaranteed.
            Change of mind, dissatisfaction with a style or approach that was not specified
            in writing, or delays caused by the Client do not constitute grounds for a refund.
          </p>
        </>
      ),
    },
    {
      heading: "Refund Processing — Payment Gateway Clause",
      content: (
        <>
          <div className="p-5 rounded-2xl bg-primary/[0.05] border border-primary/15 mb-5">
            <p className="text-white/80 font-medium leading-relaxed">
              Any eligible refund will be credited back to the original payment method / media
              used to initiate the payment within{" "}
              <strong className="text-primary">5–7 business days</strong>.
            </p>
          </div>
          <p>
            Refunds are processed through the same payment platform used for the original
            transaction (e.g., PayHere, bank transfer). Processing times are subject to the
            policies and timelines of the respective payment gateway or financial institution,
            which may extend the actual receipt of funds beyond the stated 5–7 business day window.
          </p>
          <p>
            Any payment gateway processing fees or currency conversion charges incurred
            during the original transaction are non-refundable and will be deducted from
            the refund amount where applicable.
          </p>
        </>
      ),
    },
    {
      heading: "Refund Request Process",
      content: (
        <>
          <p>To request a refund, please follow these steps:</p>
          <ul className="list-none space-y-3 mt-3">
            {[
              "Contact the Developer via email at moshika38@gmail.com with the subject line: \"Refund Request — [Project Name]\".",
              "Include your name, project details, payment reference number, the amount paid, and a clear description of the reason for the refund request.",
              "The Developer will acknowledge your request within 3 business days and provide a written decision within 10 business days.",
              "If the refund is approved, it will be processed to the original payment method within 5–7 business days of the approval notice.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[9px] font-black text-primary/60 shrink-0">
                  {i + 1}
                </span>
                <span className="pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      heading: "Dispute Resolution",
      content: (
        <>
          <p>
            In the event of a dispute regarding a refund request, both parties agree to
            first attempt resolution through good-faith negotiation via written communication
            within 15 business days.
          </p>
          <p>
            If the dispute cannot be resolved through negotiation, it shall be submitted to
            mediation or the jurisdiction of the courts of Sri Lanka in accordance with the
            governing law clause in the Terms and Conditions.
          </p>
        </>
      ),
    },
    {
      heading: "Amendments to This Policy",
      content: (
        <p>
          This Refund Policy may be updated from time to time. The most current version
          will be published at{" "}
          <strong className="text-white/70">pamothmoshika.com/refund-policy</strong>.
          Projects are governed by the Refund Policy in effect at the time the project
          agreement or deposit payment is made.
        </p>
      ),
    },
    {
      heading: "Contact",
      content: (
        <>
          <p>
            For all refund inquiries or questions about this policy, please contact:
          </p>
          <div className="mt-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-2">
            <p><strong className="text-white/60">Name:</strong> SA Pamoth Moshika</p>
            <p><strong className="text-white/60">Email:</strong> moshika38@gmail.com</p>
            <p><strong className="text-white/60">Phone:</strong> +94 71 214 3954</p>
            <p><strong className="text-white/60">Location:</strong> Badulla, Sri Lanka</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Refund Policy"
      subtitle="Cancellation and refund terms for freelance software development and IT solution services."
      effectiveDate="October 2026"
      icon={
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      }
      sections={sections}
    />
  );
};

export default RefundPolicyPage;
