"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "../../components/infoCard";
import Headline from "@/components/headline";
import SocialIcon from "@/components/socialIcon";
import AppTags from "@/components/tags";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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
      className="flex flex-col lg:flex-row bg-card-dark withBorder rounded-4xl lg:rounded-[2.5rem] overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border-white/5"
    >
      {/* Static Ambient Glows */}
      <div className="absolute -top-40 -right-40 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-40 -left-40 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Left Column: Profile & Info */}
      <div className="lg:w-[35%] p-8 sm:p-14 border-b lg:border-b-0 lg:border-r border-border-dark flex flex-col items-center bg-white/1 relative z-10">
        <motion.div
          variants={itemVariants}
          className="content flex flex-col items-center w-full"
        >
          <div className="relative w-32 h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden mb-6 lg:mb-8 ring-4 ring-primary/10 transition-transform hover:scale-105 duration-500">
            <Image
              src="/assets/png/1pp.png"
              alt="profile"
              fill
              className="object-cover object-top"
            />
          </div>

          <h1 className="text-2xl lg:text-3xl font-black text-white text-center tracking-tight">
            SA Pamoth Moshika
          </h1>

          <div className="flex justify-center flex-wrap gap-2 lg:gap-3 mt-4 lg:mt-5">
            <p className="inline-block text-[9px] lg:text-[10px] font-black uppercase text-center bg-white/5 border border-white/10 px-3 lg:px-4 py-2 rounded-full tracking-widest text-primary">
              Full-Stack Developer
            </p>
            <p className="inline-block text-[9px] lg:text-[10px] font-black uppercase text-center bg-white/5 border border-white/10 px-3 lg:px-4 py-2 rounded-full tracking-widest text-text-muted">
              Enthusiast
            </p>
          </div>

          <div className="w-20 lg:w-24 h-px mt-8 lg:mt-10 bg-linear-to-r from-transparent via-border-dark to-transparent"></div>

          <div className="contactinfo mt-8 lg:mt-10 w-full space-y-1 lg:space-y-2">
            {[
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
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="w-full"
              >
                <InfoCard
                  icon={item.icon}
                  title={item.title}
                  description={item.info}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 lg:mt-20 pt-8 lg:pt-12 border-t border-border-dark w-full"
          >
            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-6 lg:mb-8 text-center lg:text-left">
              Global presence
            </p>
            <div className="flex gap-3 lg:gap-4 justify-center lg:justify-start">
              {[
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
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    backgroundColor: "var(--primary)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 transition-all group/icon"
                >
                  <img
                    src={`/assets/social/${social.icon}.svg`}
                    alt={social.name}
                    className="w-5 h-5 opacity-40 group-hover/icon:opacity-100 group-hover/icon:invert transition-all"
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
      </div>

      {/* Right Column: About & Services */}
      <div className="lg:w-[65%] p-8 sm:p-14 lg:p-16 bg-linear-to-br from-black/20 to-transparent relative z-10">
        <motion.div variants={itemVariants} className="mb-10 lg:mb-14">
          <Headline title="Hey there!" />
          <p className="text-lg lg:text-xl mt-6 lg:mt-8 font-light text-text-muted leading-relaxed">
            I’m a passionate and detail-driven{" "}
            <span className="text-primary font-medium">
              Mobile & Web Developer
            </span>{" "}
            with experience in building modern, responsive, and user-friendly
            applications. I’m skilled in both front-end and back-end
            development, with strong problem-solving abilities, clean code
            practices, and a solid understanding of UI/UX.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Headline title="My Services" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:mt-10">
            {/* Web Dev Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 lg:p-8 withBorder rounded-4xl bg-white/2 flex flex-col justify-between"
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
                  className="p-5 lg:p-6 withBorder rounded-4xl bg-white/2"
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
                  className="p-5 lg:p-6 withBorder rounded-4xl bg-white/2"
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
                className="bg-primary p-8 lg:p-10 rounded-4xl lg:rounded-[2.5rem] flex flex-col justify-center items-start group cursor-pointer overflow-hidden relative"
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
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HomePage;
