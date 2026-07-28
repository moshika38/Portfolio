"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import InfoCard from "../../components/infoCard";
import Headline from "@/components/headline";
import AppTags from "@/components/tags";
import TechStack from "@/components/techStack";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";

const typewriterWords = [
  "Full-Stack Developer",
  "AI Enthusiast",
];

const marqueeItems = [
  "Flutter", "React", "Next.js", "TypeScript", "Node.js",
  "Firebase", "Tailwind CSS", "Python", "Dart", "PostgreSQL",
  "Git", "Docker", "Figma", "REST APIs", "GraphQL",
  "React Native", "Laravel", "MongoDB",
];

function TypewriterText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = typewriterWords[currentWordIndex];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWord, currentWordIndex]);

  return (
    <span>
      {currentText}
      <span className="typewriter-cursor" />
    </span>
  );
}

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="space-y-6 lg:space-y-8 pb-8">
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="card-premium rounded-3xl lg:rounded-[2.5rem] overflow-hidden relative"
      >
        {/* Ambient Glows */}
        <div className="glow-top-right" />
        <div className="glow-bottom-left" />

        <div className="flex flex-col lg:flex-row relative z-10">
          {/* Left Column: Profile & Info */}
          <div className="lg:w-[35%] p-8 sm:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/[0.03] flex flex-col items-center">
            {/* Mobile Contact Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`absolute lg:hidden top-5 right-5 flex items-center gap-2 px-3 py-2 rounded-xl border transition-all z-30 group ${
                isOpen
                  ? "bg-primary/[0.08] border-primary/20"
                  : "bg-white/[0.03] border-white/[0.04]"
              }`}
            >
              <span
                className={`text-[9px] font-black uppercase tracking-widest transition-colors ${
                  isOpen ? "text-primary" : "text-white/40 group-hover:text-primary"
                }`}
              >
                {isOpen ? "Close" : "Contact"}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                className="flex items-center justify-center"
              >
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M5 6L0 0H10L5 6Z" fill="currentColor" className={`transition-colors ${isOpen ? "fill-primary" : "fill-white/25 group-hover:fill-primary"}`} />
                </svg>
              </motion.div>
            </motion.button>

            <motion.div variants={itemVariants} className="content flex flex-col items-center w-full">
              {/* Premium Profile Image */}
              <div className="relative mb-8 lg:mb-10 group">
                {/* Outer glow ring */}
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700 blur-lg" />
                {/* Image container */}
                <div className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden ring-2 ring-primary/15 group-hover:ring-primary/25 transition-all duration-500 animate-float">
                  <Image
                    src="/assets/png/1pp.png"
                    alt="Pamoth Moshika"
                    fill
                    className="object-cover object-top"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                {/* Status indicator */}
                <div className="absolute bottom-1 right-1 lg:bottom-2 lg:right-2 w-5 h-5 bg-emerald-500 rounded-full border-[3px] border-card-dark z-10">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40" />
                </div>
              </div>

              <h1 className="text-2xl lg:text-[28px] font-black text-white text-center tracking-tight leading-tight">
                SA Pamoth Moshika
              </h1>

              {/* Typewriter subtitle — placed directly below heading */}
              <div className="mt-3 lg:mt-4 h-8 flex items-center justify-center">
                <p className="text-sm lg:text-[15px] font-medium text-primary/90">
                  <TypewriterText />
                </p>
              </div>

              {/* Auto-scrolling Marquee — immediately below typewriter */}
              <div className="relative mt-5 lg:mt-6 w-full">
                {/* Gradient edge fade masks */}
                <div className="absolute inset-y-0 left-0 w-8 z-10 bg-gradient-to-r from-card-dark to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-card-dark to-transparent pointer-events-none" />

                <div className="overflow-hidden rounded-xl bg-white/[0.03] border border-white/[0.04] backdrop-blur-md py-2.5">
                  <div className="flex animate-marquee whitespace-nowrap">
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                      <span
                        key={i}
                        className="mx-3 lg:mx-4 text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.15em] text-white/25 whitespace-nowrap"
                      >
                        <span className="text-primary/50 font-bold">/</span>
                        <span className="ml-2">{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex justify-center items-center gap-2 mt-5 lg:mt-6">
                <span className="inline-block text-[9px] lg:text-[10px] whitespace-nowrap font-black uppercase text-center bg-primary/[0.06] border border-primary/10 px-3 lg:px-4 py-2 rounded-full tracking-widest text-primary">
                  Full-Stack Developer
                </span>
                <span className="inline-block text-[9px] lg:text-[10px] whitespace-nowrap font-black uppercase text-center bg-white/[0.03] border border-white/[0.04] px-3 lg:px-4 py-2 rounded-full tracking-widest text-white/30">
                  AI Enthusiast
                </span>
              </div>

              {/* Mobile Collapsible Contact */}
              <div className="lg:hidden w-full">
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden w-full"
                    >
                      <div className="mt-8 w-full space-y-1">
                        {contactInfo.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.08 }}
                            className="w-full"
                          >
                            <InfoCard icon={item.icon} title={item.title} description={item.info} />
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-10 pt-8 border-t border-white/[0.03] w-full"
                      >
                        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-5 text-center">
                          Connect
                        </p>
                        <div className="flex gap-3 justify-center">
                          {socialLinks.map((social) => (
                            <motion.a
                              key={social.name}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.04] flex items-center justify-center transition-all hover:border-primary/15 hover:bg-primary/[0.06] group/icon"
                            >
                              <img
                                src={`/assets/social/${social.icon}.svg`}
                                alt={social.name}
                                className="w-4 h-4 opacity-30 group-hover/icon:opacity-100 group-hover/icon:invert transition-all duration-300"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src =
                                    "https://www.svgrepo.com/show/353844/github-icon.svg";
                                }}
                              />
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Desktop Contact Section */}
              <div className="hidden lg:block w-full">
                <div className="w-20 h-px mt-10 mx-auto bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                <div className="mt-10 w-full space-y-1">
                  {contactInfo.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ x: 4 }}
                      className="w-full"
                    >
                      <InfoCard icon={item.icon} title={item.title} description={item.info} />
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants} className="mt-16 pt-10 border-t border-white/[0.03] w-full">
                  <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                    Connect
                  </p>
                  <div className="flex gap-3 justify-start">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.04] flex items-center justify-center transition-all hover:border-primary/15 hover:bg-primary/[0.06] group/icon"
                      >
                        <img
                          src={`/assets/social/${social.icon}.svg`}
                          alt={social.name}
                          className="w-4 h-4 opacity-30 group-hover/icon:opacity-100 group-hover/icon:invert transition-all duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://www.svgrepo.com/show/353844/github-icon.svg";
                          }}
                        />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: About & Services */}
          <div className="lg:w-[65%] p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-white/[0.008] to-transparent">
            <motion.div variants={itemVariants} className="mb-12 lg:mb-16">
              <Headline title="Hey there!" />
              <p className="text-base lg:text-lg mt-6 lg:mt-8 font-light text-text-muted leading-[1.8]">
                I&apos;m a passionate and detail-driven{" "}
                <span className="text-primary font-medium">
                  Mobile & Web Developer
                </span>{" "}
                with experience in building modern, responsive, and user-friendly
                applications. I&apos;m skilled in both front-end and back-end
                development, with strong problem-solving abilities, clean code
                practices, and a solid understanding of UI/UX.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Headline title="My Services" />

              {/* 2-column grid: AI featured card (left) + existing cards (right) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mt-8 lg:mt-10">
                {/* Left Column: AI Solutions — large featured card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative p-6 lg:p-8 rounded-3xl flex flex-col justify-between group overflow-hidden bg-gradient-to-br from-rose-500/[0.05] via-rose-500/[0.02] to-transparent border border-rose-500/15 hover:border-rose-500/25 transition-all duration-400"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/15 transition-colors duration-700" />
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-rose-500/5 rounded-full blur-3xl" />

                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-2xl bg-rose-500/15 border border-rose-500/20 flex items-center justify-center mb-5 lg:mb-6 group-hover:bg-rose-500/20 group-hover:scale-105 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-rose-400"
                      >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                        <path d="M19 3v4" />
                        <path d="M21 5h-4" />
                      </svg>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">
                      AI Solutions & Automation
                    </h3>
                    <p className="text-xs lg:text-sm text-text-muted leading-relaxed max-w-md">
                      Build intelligent AI-powered applications, AI chatbots, workflow automation, AI agents, and LLM integrations using modern AI technologies and APIs.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6 lg:mt-8 relative z-10">
                    <AppTags tagname="OpenAI" />
                    <AppTags tagname="Gemini" />
                    <AppTags tagname="Python" />
                  </div>
                </motion.div>

                {/* Right Column: App Dev + Graphic Design + CTA */}
                <div className="flex flex-col gap-5 lg:gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="p-5 lg:p-6 card-premium rounded-3xl group"
                    >
                      <Image
                        src="/assets/svg/mobile.svg"
                        alt="mobile"
                        width={20}
                        height={20}
                      />
                      <h3 className="text-xs lg:text-sm font-bold text-white mt-3 lg:mt-4">
                        App Development
                      </h3>
                      <p className="text-[10px] lg:text-[11px] text-text-muted mt-2 leading-relaxed">
                        Android, iOS, Web & Desktop.
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="p-5 lg:p-6 card-premium rounded-3xl group"
                    >
                      <Image
                        src="/assets/svg/gd.svg"
                        alt="design"
                        width={20}
                        height={20}
                      />
                      <h3 className="text-xs lg:text-sm font-bold text-white mt-3 lg:mt-4">
                        Graphic Design
                      </h3>
                      <p className="text-[10px] lg:text-[11px] text-text-muted mt-2 leading-relaxed">
                        Creative visuals with purpose.
                      </p>
                    </motion.div>
                  </div>

                  {/* CTA Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-primary p-8 lg:p-10 rounded-3xl lg:rounded-[2rem] flex flex-col justify-center items-start group cursor-pointer overflow-hidden relative"
                  >
                    <div className="relative z-10 w-full">
                      <h3 className="text-xl lg:text-2xl font-black text-black leading-tight mb-6 lg:mb-8">
                        Have a vision? <br /> Let&apos;s build it.
                      </h3>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-black text-white px-6 lg:px-8 py-3 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 shadow-xl"
                      >
                        Start Project &rarr;
                      </Link>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  </motion.div>
                </div>
              </div>

              {/* Full-width Web Development card below the grid */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 lg:p-8 card-premium rounded-3xl flex flex-col justify-between group mt-5 lg:mt-6"
              >
                <div>
                  <div className="bg-primary/[0.06] border border-primary/10 rounded-2xl inline-flex p-3 lg:p-4 mb-5 lg:mb-6 group-hover:bg-primary/[0.1] transition-colors duration-300">
                    <Image
                      src="/assets/svg/website.svg"
                      alt="web"
                      width={28}
                      height={28}
                    />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">
                    Web Development
                  </h3>
                  <p className="text-xs lg:text-sm text-text-muted leading-relaxed">
                    Building high-performance, scalable web applications using the
                    latest tech stacks like Next.js, React, and Node.js.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6 lg:mt-8">
                  <AppTags tagname="TypeScript" />
                  <AppTags tagname="Next.js" />
                  <AppTags tagname="PostgreSQL" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ============================================ */}
      {/* TECH STACK SECTION */}
      {/* ============================================ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="card-premium rounded-3xl lg:rounded-[2.5rem] overflow-hidden relative p-8 sm:p-12 lg:p-14"
      >
        <div className="glow-top-right" />
        <TechStack />
      </motion.div>
    </div>
  );
}

export default HomePage;
