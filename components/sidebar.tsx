"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import InfoCard from "./infoCard";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactInfo = [
    {
      icon: "/assets/svg/email.svg",
      title: "Email",
      info: "moshika38@gmail.com",
    },
    {
      icon: "/assets/svg/call2.svg",
      title: "Mobile",
      info: "+94 71 214 3954",
    },
    {
      icon: "/assets/svg/calender.svg",
      title: "Birthday",
      info: "Aug 2, 2003",
    },
    {
      icon: "/assets/svg/location.svg",
      title: "Location",
      info: "Badulla, Sri Lanka",
    },
  ];

  const socialLinks = [
    {
      name: "github",
      href: "https://github.com/moshika38",
      icon: "git",
    },
    {
      name: "fb",
      href: "https://www.facebook.com/profile.php?id=61550915073941",
      icon: "fb",
    },
    {
      name: "whatsapp",
      href: "https://wa.me/+94712143954",
      icon: "wp",
    },
    {
      name: "email",
      href: "mailto:moshika38@gmail.com",
      icon: "email",
    },
  ];

  return (
    <aside className="lg:w-[35%] bg-card-dark withBorder rounded-4xl lg:rounded-[2.5rem] overflow-hidden relative flex flex-col items-center z-20 transition-all duration-500 ease-in-out">
      {/* Mobile Header (Collapsed View) */}
      <div className="w-full p-6 sm:p-10 lg:p-0 lg:pt-14 flex flex-row lg:flex-col items-center gap-5 lg:gap-8 relative border-b border-border-dark/50 lg:border-none">
        {/* Avatar Container */}
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-44 lg:h-44 rounded-3xl lg:rounded-full overflow-hidden bg-white/5 ring-1 ring-white/10 shrink-0">
          <Image
            src="/assets/png/1pp.png"
            alt="profile"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Name & Titles */}
        <div className="flex flex-col items-start lg:items-center w-full">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight text-left lg:text-center">
            Pamoth Moshika
          </h1>

          <div className="flex flex-col gap-2 mt-3 w-fit">
            <p className="w-fit text-[10px] font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-white/90">
              Full-Stack Developer
            </p>
            <p className="lg:hidden w-fit text-[10px] font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-white/70">
              AI Enthusiast
            </p>
            <p className="hidden lg:inline-block text-[10px] font-black uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full tracking-widest text-text-muted text-center">
              AI Enthusiast
            </p>
          </div>
        </div>

        {/* Toggle Button (Mobile Only) */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          title={isExpanded ? "Collapse" : "Expand"}
          className="lg:hidden absolute top-0 right-0 p-3 bg-border-dark/30 rounded-bl-3xl border-l border-b border-border-dark/50 text-primary transition-all hover:bg-border-dark/60 z-30"
        >
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Expandable Section */}
      <div
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 lg:max-h-none opacity-0 lg:opacity-100"}`}
      >
        <div className="px-6 pb-8 sm:px-14 lg:px-10 lg:pb-12 w-full">
          <div className="contactinfo w-full mt-6 space-y-4">
            {contactInfo.map((item, idx) => (
              <motion.div key={idx} whileHover={{ x: 5 }} className="w-full">
                <InfoCard
                  icon={item.icon}
                  title={item.title}
                  description={item.info}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 lg:mt-12 pt-8 lg:pt-10 border-t border-border-dark w-full">
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-5 h-5 opacity-40 hover:opacity-100 transition-all filter grayscale hover:grayscale-0"
                >
                  <img
                    src={`/assets/social/${social.icon}.svg`}
                    alt={social.name}
                    className="w-full h-full"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
