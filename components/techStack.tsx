"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: string;
}

interface TechCategory {
  title: string;
  color: string;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    title: "Mobile",
    color: "from-blue-500/10 to-blue-600/5",
    items: [
      { name: "Flutter", icon: "M" },
      { name: "Dart", icon: "D" },
      { name: "React Native", icon: "R" },
      { name: "Android", icon: "A" },
    ],
  },
  {
    title: "Frontend",
    color: "from-purple-500/10 to-purple-600/5",
    items: [
      { name: "React", icon: "R" },
      { name: "Next.js", icon: "N" },
      { name: "TypeScript", icon: "T" },
      { name: "Tailwind CSS", icon: "Tw" },
    ],
  },
  {
    title: "Backend",
    color: "from-emerald-500/10 to-emerald-600/5",
    items: [
      { name: "Node.js", icon: "N" },
      { name: "Express", icon: "E" },
      { name: "Firebase", icon: "F" },
      { name: "Laravel", icon: "L" },
    ],
  },
  {
    title: "Tools",
    color: "from-orange-500/10 to-orange-600/5",
    items: [
      { name: "Git", icon: "G" },
      { name: "GitHub", icon: "GH" },
      { name: "VS Code", icon: "VS" },
      { name: "Figma", icon: "F" },
      { name: "Docker", icon: "D" },
      { name: "Postman", icon: "P" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
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
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={categoryVariants} className="mb-10 lg:mb-14">
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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="card-premium rounded-3xl p-6 lg:p-8 group relative overflow-hidden"
            >
              {/* Category glow */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${category.color} rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-5">
                  {category.title}
                </h3>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2.5"
                >
                  {category.items.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group/item relative"
                    >
                      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:border-primary/15 hover:bg-primary/[0.04] transition-all duration-300 cursor-default">
                        <span className="w-7 h-7 rounded-lg bg-primary/[0.08] flex items-center justify-center text-[10px] font-black text-primary/80 group-hover/item:bg-primary/[0.12] group-hover/item:text-primary transition-all duration-300">
                          {item.icon}
                        </span>
                        <span className="text-xs font-medium text-white/50 group-hover/item:text-white/80 transition-colors duration-300">
                          {item.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TechStack;
