"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "../../components/infoCard";
import Headline from "@/components/headline";
import SocialIcon from "@/components/socialIcon";
import AppTags from "@/components/tags";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Sidebar from "../../components/sidebar";

function HomePage() {
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative pb-20"
    >
      {/* Static Ambient Glows */}
      <div className="fixed -top-40 -right-40 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed -bottom-40 -left-40 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Profile Sidebar */}
      <Sidebar />

      {/* Right Content Area */}
      <div className="flex-1 w-full flex flex-col gap-6 lg:gap-8">
        {/* About Section */}
        <motion.section
          variants={itemVariants}
          className="bg-card-dark withBorder rounded-4xl lg:rounded-[2.5rem] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl"
        >
          <Headline title="About Me" />
          <p className="text-base lg:text-lg mt-8 font-light text-text-muted leading-relaxed">
            I’m a passionate and detail-driven{" "}
            <span className="text-primary font-medium">
              Mobile & Web Developer
            </span>{" "}
            with experience in building modern, responsive, and user-friendly
            applications. I’m skilled in both front-end and back-end
            development, with strong problem-solving abilities, clean code
            practices, and a solid understanding of UI/UX.
          </p>
        </motion.section>

        {/* Services Section */}
        <motion.section
          variants={itemVariants}
          className="bg-card-dark withBorder rounded-4xl lg:rounded-[2.5rem] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl"
        >
          <Headline title="What I'm Doing" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Web Dev Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 lg:p-8 withBorder rounded-3xl bg-white/2 flex flex-col justify-between"
            >
              <div>
                <div className="bg-primary/10 border border-primary/20 rounded-2xl inline-block p-3 lg:p-4 mb-5 lg:mb-6">
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

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-5 lg:p-6 withBorder rounded-3xl bg-white/2"
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
                  <p className="text-[10px] lg:text-[11px] text-text-muted mt-2">
                    Android, iOS, Web & Desktop.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-5 lg:p-6 withBorder rounded-3xl bg-white/2"
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
                  <p className="text-[10px] lg:text-[11px] text-text-muted mt-2">
                    Creative visuals with purpose.
                  </p>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-primary p-8 lg:p-10 rounded-3xl lg:rounded-[2rem] flex flex-col justify-center items-start group cursor-pointer overflow-hidden relative"
              >
                <div className="relative z-10 w-full">
                  <h3 className="text-xl lg:text-2xl font-black text-black leading-tight mb-6 lg:mb-8">
                    Have a vision? <br /> Let's build it.
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
        </motion.section>
      </div>
    </div>
  );
}

export default HomePage;
