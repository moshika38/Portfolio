"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Education", href: "/education" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/moshika38",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61550915073941",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+94712143954",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:moshika38@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Refund Policy", href: "/refund-policy" },
];

function Footer() {
  const pathname = usePathname();

  return (
    <footer className="relative z-10 mt-4">
      {/* Top separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full text-black font-bold text-sm shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow duration-300">
                PM
              </div>
              <span className="text-base font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
                Pamoth Moshika
              </span>
            </Link>

            <p className="text-[11px] uppercase tracking-[0.3em] text-white/20 font-medium leading-relaxed">
              Based in Badulla<span className="mx-2 text-white/10">•</span>Available Worldwide
            </p>

            <p className="text-[12px] text-text-muted leading-relaxed max-w-xs">
              Freelance software developer & IT solutions provider. Building web,
              mobile, and AI-powered products with precision.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5 mt-1">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/25 hover:text-primary hover:border-primary/20 hover:bg-primary/[0.06] transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-5">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
              Navigation
            </p>
            <nav>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-[13px] font-medium transition-colors duration-300 flex items-center gap-2 group ${
                        pathname === link.href
                          ? "text-primary"
                          : "text-white/40 hover:text-white/80"
                      }`}
                    >
                      <span
                        className={`w-3 h-px rounded-full transition-all duration-300 ${
                          pathname === link.href
                            ? "bg-primary w-5"
                            : "bg-white/15 group-hover:bg-white/40 group-hover:w-4"
                        }`}
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact Quick-Links */}
          <div className="flex flex-col gap-5">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "moshika38@gmail.com",
                  href: "mailto:moshika38@gmail.com",
                },
                {
                  icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.41 2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" />
                    </svg>
                  ),
                  label: "+94 71 214 3954",
                  href: "tel:+94712143954",
                },
                {
                  icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Badulla, Sri Lanka",
                  href: null,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <span className="text-white/20 group-hover:text-primary/50 transition-colors duration-300 shrink-0">
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[12px] text-white/35 hover:text-white/70 transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-[12px] text-white/35">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-2.5 mt-2 w-fit px-4 py-2.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/15">
              <span className="relative w-2 h-2 shrink-0">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-50" />
                <span className="absolute inset-0 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400/80">
                Available for Projects
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Copyright */}
          <p className="text-[11px] text-white/20 font-medium">
            &copy; 2026 Pamoth Moshika. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-1 flex-wrap justify-center">
            {legalLinks.map((link, idx) => (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[10px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-primary/70"
                      : "text-white/20 hover:text-primary/60"
                  }`}
                >
                  {link.name}
                </Link>
                {idx < legalLinks.length - 1 && (
                  <span className="text-white/10 mx-2 text-[10px]">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
