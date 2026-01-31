"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Headline from "@/components/headline";
import React from "react";
import Image from "next/image";
import EduCard from "@/components/educard";
import { motion, Variants } from "framer-motion";

function Education() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="education min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Header />

      <main className="grow max-w-[1240px] mx-auto px-2 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-card-dark withBorder rounded-3xl lg:rounded-[2.5rem] overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border-white/5"
        >
          {/* Static Ambient Glows */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="p-6 sm:p-14 lg:p-16 relative z-10">
            <motion.div variants={itemVariants} className="mb-10 lg:mb-14">
              <Headline title="My Education" />
              <p className="text-text-muted mt-4 text-base lg:text-lg font-light">
                My academic journey and certifications.
              </p>
            </motion.div>

            <div className="flex flex-col gap-10 lg:gap-12">
              <motion.div variants={itemVariants}>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6 lg:mb-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-white/10"></span> Self-Directed
                  Learning
                </p>

                <div className="relative group">
                  {/* Decorative Floating Icons (Desktop only for clean feel) */}
                  <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl hidden lg:block"
                  />
                  <motion.div
                    animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl hidden lg:block"
                  />

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="withBorder rounded-4xl bg-white/2 p-8 lg:p-12 relative overflow-hidden backdrop-blur-sm shadow-2xl border-white/5"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-primary/10 transition-colors duration-700" />

                    <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start relative z-10">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      </div>

                      <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 tracking-tight">
                          Self-Taught Engineering
                        </h3>
                        <p className="text-text-muted text-base lg:text-lg font-light leading-relaxed mb-8 max-w-2xl">
                          Beyond formal education, I've dedicated thousands of
                          hours to mastering modern technologies through
                          documentation, open-source contribution, and building
                          complex systems from scratch. My learning is driven by
                          curiosity and a commitment to clean, efficient code.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                          {[
                            "Open Source",
                            "Architecture Patterns",
                            "Performance Optimization",
                            "Technical Documentation",
                            "Community Learning",
                          ].map((item) => (
                            <span
                              key={item}
                              className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] lg:text-[11px] font-bold text-white/40 group-hover:border-primary/20 group-hover:text-primary transition-all duration-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Subtle "Floating" Glow that follows cursor might be cool, 
                        but for now a static animated glow is cleaner */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent blur-sm" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-[10px] lg:text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 lg:mb-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary/30"></span> Higher
                  studies
                </p>
                <div className="space-y-4 lg:space-y-6">
                  <EduCard
                    title="Student at Advanced Technological Institute Badulla"
                    description="HND in Information Technology"
                    summery="Since 2025"
                    image="/assets/svg/university.svg"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6 lg:mb-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-white/10"></span> School exams
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <EduCard
                    title="Advanced Level (A/L)"
                    description="Technology stream - 2022"
                    summery="ICT - C, Engineering Tech - C, Science for Tech - S"
                    image="/assets/svg/education.svg"
                  />
                  <EduCard
                    title="Ordinary Level (O/L)"
                    description="Exam year - 2019"
                    summery="Mathematics - B, Science - B, English - C"
                    image="/assets/svg/education.svg"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6 lg:mb-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-white/10"></span> Certifications
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  <EduCard
                    title="Advanced Python Certification"
                    description="SLIPD Academy"
                    summery=""
                    image="/assets/svg/certificate.svg"
                  />
                  <EduCard
                    title="Web Design Online Course"
                    description="University of Moratuwa"
                    summery=""
                    image="/assets/svg/certificate.svg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default Education;
