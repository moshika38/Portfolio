"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Headline from "@/components/headline";
import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";
import { downloadIcon } from "@/lib/utils";

function Resume() {
  const icon = downloadIcon;

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
    <div className="resume min-h-screen flex flex-col relative selection:bg-primary/30">
      <Header />

      <main className="grow max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="card-premium rounded-3xl lg:rounded-[2.5rem] overflow-hidden relative h-auto"
        >
          <div className="glow-top-right" />
          <div className="glow-bottom-left" />

          <div className="p-6 sm:p-12 lg:p-16 relative z-10">
            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 lg:mb-16"
            >
              <div>
                <Headline title="Resume" />
                <p className="text-text-muted mt-4 text-sm lg:text-base font-light max-w-xl leading-relaxed">
                  Preview or download my professional experience.
                </p>
              </div>

              <Link
                href={"/cv/Moshika_Resume.pdf"}
                download
                className="w-full lg:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full lg:w-auto bg-primary text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] lg:text-xs flex justify-center items-center gap-3 shadow-[0_20px_40px_-10px_rgba(255,219,112,0.15)] hover:shadow-[0_25px_50px_-10px_rgba(255,219,112,0.25)] transition-shadow duration-300"
                >
                  Download CV <span className="text-lg">{icon}</span>
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="preview rounded-2xl overflow-hidden border border-white/[0.04] bg-black/40 backdrop-blur-md h-[500px] lg:h-[800px] relative transition-all duration-500"
            >
              <iframe src="/cv/Moshika_Resume.pdf" className="w-full h-full" />

              {/* Mobile Interaction Notice */}
              <div className="absolute inset-x-0 bottom-4 flex justify-center lg:hidden">
                <p className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[10px] text-white/40 font-medium">
                  Scroll inside to view full resume
                </p>
              </div>

              <div className="absolute inset-0 pointer-events-none border border-white/[0.03] rounded-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default Resume;
