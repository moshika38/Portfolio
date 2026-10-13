"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

interface Section {
  heading: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  sections: Section[];
  icon: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  subtitle,
  effectiveDate,
  sections,
  icon,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen w-full relative selection:bg-primary/30">
      <Header />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        {/* Breadcrumb */}
        <div className="pt-8 pb-6 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/20">
          <Link href="/" className="hover:text-primary transition-colors duration-300">
            Home
          </Link>
          <span>/</span>
          <span className="text-white/40">{title}</span>
        </div>

        {/* Page Hero */}
        <div className="card-premium rounded-3xl lg:rounded-[2.5rem] overflow-hidden relative mb-6">
          <div className="glow-top-right" />
          <div className="glow-bottom-left" />
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col sm:flex-row sm:items-center gap-8">
            {/* Icon */}
            <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-2xl lg:rounded-3xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center">
              <span className="text-primary">{icon}</span>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 mb-3">
                Legal Document
              </p>
              <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-3">
                {title}
              </h1>
              <p className="text-sm text-text-muted">{subtitle}</p>
              <p className="text-[10px] font-medium uppercase tracking-widest text-white/20 mt-3">
                Effective Date: {effectiveDate}
              </p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="card-premium rounded-3xl lg:rounded-[2.5rem] overflow-hidden relative">
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 space-y-0 divide-y divide-white/[0.04]">
            {sections.map((section, idx) => (
              <div key={idx} className={`${idx === 0 ? "" : "pt-10"} ${idx === sections.length - 1 ? "" : "pb-10"}`}>
                <div className="flex items-start gap-4 mb-5">
                  <span className="shrink-0 w-7 h-7 rounded-xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center text-[10px] font-black text-primary/60 mt-0.5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg lg:text-xl font-bold text-white tracking-tight">
                    {section.heading}
                  </h2>
                </div>
                <div className="ml-11 text-sm lg:text-[15px] text-text-muted leading-[1.9] space-y-4">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-white/15 uppercase tracking-[0.3em] font-medium">
            Pamoth Moshika · Freelance Software Developer & IT Solutions · Badulla, Sri Lanka
          </p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <Link href="/privacy-policy" className="text-[10px] text-white/20 hover:text-primary/70 uppercase tracking-widest transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="text-white/10">·</span>
            <Link href="/terms-and-conditions" className="text-[10px] text-white/20 hover:text-primary/70 uppercase tracking-widest transition-colors duration-300">
              Terms & Conditions
            </Link>
            <span className="text-white/10">·</span>
            <Link href="/refund-policy" className="text-[10px] text-white/20 hover:text-primary/70 uppercase tracking-widest transition-colors duration-300">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
