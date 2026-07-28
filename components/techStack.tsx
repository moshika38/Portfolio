"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
}

interface TechCategory {
  title: string;
  subtitle: string;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    subtitle: "Building beautiful interfaces",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "Backend",
    subtitle: "Powering the logic",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Laravel" },
      { name: "Firebase" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Mobile",
    subtitle: "Apps that travel with you",
    items: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "React Native" },
      { name: "Android" },
    ],
  },
  {
    title: "Database",
    subtitle: "Storing what matters",
    items: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Firestore" },
      { name: "Supabase" },
    ],
  },
  {
    title: "Tools & DevOps",
    subtitle: "Streamlining workflows",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Docker" },
      { name: "Postman" },
      { name: "Android Studio" },
    ],
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Intelligence meets code",
    items: [
      { name: "OpenAI API" },
      { name: "Gemini" },
      { name: "Python" },
      { name: "ML Concepts" },
    ],
  },
];

const categoryGradients: Record<string, string> = {
  "Frontend": "from-primary/6 via-primary/3 to-transparent",
  "Backend": "from-emerald-500/6 via-emerald-500/3 to-transparent",
  "Mobile": "from-blue-500/6 via-blue-500/3 to-transparent",
  "Database": "from-violet-500/6 via-violet-500/3 to-transparent",
  "Tools & DevOps": "from-orange-500/6 via-orange-500/3 to-transparent",
  "AI & Machine Learning": "from-rose-500/6 via-rose-500/3 to-transparent",
};

const dotColors: Record<string, string> = {
  "Frontend": "bg-primary/40",
  "Backend": "bg-emerald-400/40",
  "Mobile": "bg-blue-400/40",
  "Database": "bg-violet-400/40",
  "Tools & DevOps": "bg-orange-400/40",
  "AI & Machine Learning": "bg-rose-400/40",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
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

        {/* Categories — 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {techCategories.map((category) => {
            const gradient = categoryGradients[category.title];
            const dotColor = dotColors[category.title];

            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.04] p-6 lg:p-7 backdrop-blur-md hover:bg-white/[0.03] hover:border-white/[0.07] transition-all duration-400 overflow-hidden"
              >
                {/* Background gradient accent — visible on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Category header */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                        <h3 className="text-[13px] lg:text-sm font-bold text-white/90 tracking-tight">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-[10px] lg:text-[11px] text-white/20 tracking-wide ml-4">
                        {category.subtitle}
                      </p>
                    </div>
                    <span className="text-[9px] font-mono text-white/10 font-medium tabular-nums">
                      {String(category.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Tech items */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((item) => (
                      <span
                        key={item.name}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.04] text-[10px] lg:text-[11px] font-medium text-white/30 group-hover:bg-white/[0.04] group-hover:border-white/[0.06] group-hover:text-white/50 transition-all duration-300 cursor-default"
                      >
                        {item.name}
                      </span>
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
