"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: string;
}

interface TechCategory {
  title: string;
  accent: string;
  glow: string;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    accent: "primary",
    glow: "from-primary/8 to-transparent",
    items: [
      { name: "React", icon: "Re" },
      { name: "Next.js", icon: "Nx" },
      { name: "TypeScript", icon: "Ts" },
      { name: "JavaScript", icon: "Js" },
      { name: "Tailwind CSS", icon: "Tw" },
      { name: "HTML5", icon: "Ht" },
      { name: "CSS3", icon: "Cs" },
    ],
  },
  {
    title: "Backend",
    accent: "emerald",
    glow: "from-emerald-500/8 to-transparent",
    items: [
      { name: "Node.js", icon: "No" },
      { name: "Express", icon: "Ex" },
      { name: "Laravel", icon: "La" },
      { name: "Firebase", icon: "Fi" },
      { name: "REST APIs", icon: "Ap" },
    ],
  },
  {
    title: "Mobile",
    accent: "blue",
    glow: "from-blue-500/8 to-transparent",
    items: [
      { name: "Flutter", icon: "Fl" },
      { name: "Dart", icon: "Da" },
      { name: "React Native", icon: "Rn" },
      { name: "Android", icon: "An" },
    ],
  },
  {
    title: "Database",
    accent: "violet",
    glow: "from-violet-500/8 to-transparent",
    items: [
      { name: "PostgreSQL", icon: "Pg" },
      { name: "MongoDB", icon: "Mo" },
      { name: "MySQL", icon: "My" },
      { name: "Firestore", icon: "Fs" },
      { name: "Supabase", icon: "Su" },
    ],
  },
  {
    title: "Tools",
    accent: "orange",
    glow: "from-orange-500/8 to-transparent",
    items: [
      { name: "Git", icon: "Gi" },
      { name: "GitHub", icon: "Gh" },
      { name: "VS Code", icon: "Vs" },
      { name: "Figma", icon: "Fi" },
      { name: "Docker", icon: "Dk" },
      { name: "Postman", icon: "Po" },
      { name: "Android Studio", icon: "As" },
    ],
  },
  {
    title: "AI & ML",
    accent: "rose",
    glow: "from-rose-500/8 to-transparent",
    items: [
      { name: "OpenAI API", icon: "AI" },
      { name: "Gemini", icon: "Ge" },
      { name: "Python", icon: "Py" },
      { name: "ML Concepts", icon: "Ml" },
    ],
  },
];

const accentStyles: Record<string, { badge: string; hover: string; text: string; dot: string }> = {
  primary: {
    badge: "bg-primary/[0.08] text-primary/80",
    hover: "group-hover:bg-primary/[0.12] group-hover:text-primary",
    text: "text-primary/70",
    dot: "bg-primary/40",
  },
  emerald: {
    badge: "bg-emerald-500/[0.08] text-emerald-400/80",
    hover: "group-hover:bg-emerald-500/[0.12] group-hover:text-emerald-400",
    text: "text-emerald-400/70",
    dot: "bg-emerald-400/40",
  },
  blue: {
    badge: "bg-blue-500/[0.08] text-blue-400/80",
    hover: "group-hover:bg-blue-500/[0.12] group-hover:text-blue-400",
    text: "text-blue-400/70",
    dot: "bg-blue-400/40",
  },
  violet: {
    badge: "bg-violet-500/[0.08] text-violet-400/80",
    hover: "group-hover:bg-violet-500/[0.12] group-hover:text-violet-400",
    text: "text-violet-400/70",
    dot: "bg-violet-400/40",
  },
  orange: {
    badge: "bg-orange-500/[0.08] text-orange-400/80",
    hover: "group-hover:bg-orange-500/[0.12] group-hover:text-orange-400",
    text: "text-orange-400/70",
    dot: "bg-orange-400/40",
  },
  rose: {
    badge: "bg-rose-500/[0.08] text-rose-400/80",
    hover: "group-hover:bg-rose-500/[0.12] group-hover:text-rose-400",
    text: "text-rose-400/70",
    dot: "bg-rose-400/40",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

function TechStack() {
  return (
    <section className="section-spacing" aria-label="Technology Stack">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="mb-8 lg:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary/40" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              Tech Stack
            </p>
          </div>
          <h2 className="text-2xl lg:text-4xl font-black text-white tracking-tight">
            Technologies I Work With
          </h2>
          <p className="text-text-muted mt-3 text-sm lg:text-base font-light max-w-lg">
            A curated toolkit of modern technologies for building exceptional digital experiences.
          </p>
        </motion.div>

        {/* Categories Grid — 3 columns on large, 2 on md, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {techCategories.map((category) => {
            const styles = accentStyles[category.accent];
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.04] p-5 lg:p-6 backdrop-blur-md hover:border-white/[0.08] hover:bg-white/[0.03] transition-all duration-400 overflow-hidden"
              >
                {/* Hover glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${category.glow} rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Category title */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
                    <h3 className={`text-[11px] font-bold uppercase tracking-[0.2em] ${styles.text}`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <motion.div
                        key={item.name}
                        variants={chipVariants}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="group/chip"
                      >
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300 cursor-default">
                          <span className={`w-6 h-6 rounded-md ${styles.badge} ${styles.hover} flex items-center justify-center text-[9px] font-black transition-all duration-300`}>
                            {item.icon}
                          </span>
                          <span className="text-[11px] font-medium text-white/40 group-hover/chip:text-white/70 transition-colors duration-300">
                            {item.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default TechStack;
