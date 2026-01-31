"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Headline from "@/components/headline";
import { downloadIcon } from "@/utils/icon";
import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";

function Resume() {
  const icon = downloadIcon;

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
    <div className="resume min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Header />

      <main className="grow max-w-[1240px] mx-auto px-2 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-card-dark withBorder rounded-3xl lg:rounded-[2.5rem] overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border-white/5 h-auto"
        >
          {/* Static Ambient Glows */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="p-6 sm:p-14 lg:p-16 relative z-10">
            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 lg:mb-16"
            >
              <div>
                <Headline title="Resume" />
                <p className="text-text-muted mt-4 text-base lg:text-lg font-light max-w-xl">
                  Preview or download my professional experience.
                </p>
              </div>

              <Link
                href={"/cv/Moshika_Resume.pdf"}
                download
                className="w-full lg:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full lg:w-auto bg-primary text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] lg:text-xs flex justify-center items-center gap-3 shadow-[0_20px_40px_-10px_rgba(255,219,112,0.3)]"
                >
                  Download CV <span className="text-lg">{icon}</span>
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="preview rounded-3xl overflow-hidden border border-white/5 bg-black/40 backdrop-blur-md h-[500px] lg:h-[800px] relative transition-all duration-500"
            >
              <iframe src="/cv/Moshika_Resume.pdf" className="w-full h-full" />

              {/* Mobile Interaction Notice */}
              <div className="absolute inset-x-0 bottom-4 flex justify-center lg:hidden">
                <p className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[10px] text-white/60 font-medium">
                  Scroll inside to view full resume
                </p>
              </div>

              {/* Optional: Add a glass overlay on edges */}
              <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl" />
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default Resume;
