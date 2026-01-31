"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Headline from "@/components/headline";
import { projects } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import ProjectCard from "@/components/projectCard";
import { motion, Variants } from "framer-motion";

function Projects() {
  const [projectType, setProjectType] = useState("all");
  const project = projects;

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
    <div className="projects min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Header />

      <main className="grow max-w-[1240px] mx-auto px-2 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-card-dark withBorder rounded-3xl lg:rounded-[2.5rem] overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border-white/5 min-h-[700px]"
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
                <Headline title="My Projects" />
                <p className="text-text-muted mt-4 text-base lg:text-lg font-light max-w-xl">
                  A collection of my recent work across web and mobile
                  platforms.
                </p>
              </div>

              <div className="flex bg-white/5 p-1.5 lg:p-2 rounded-2xl border border-white/5 backdrop-blur-sm w-full lg:w-auto overflow-x-auto">
                <div className="flex w-full lg:w-auto min-w-max">
                  {["all", "mobile", "web"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`
                        flex-1 lg:flex-none px-4 lg:px-6 py-2.5 lg:py-3 rounded-xl text-[10px] lg:text-xs font-black uppercase tracking-widest transition-all duration-300
                        ${
                          projectType === type
                            ? "bg-primary text-black shadow-lg shadow-primary/20"
                            : "text-white/40 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      {type === "all"
                        ? "All"
                        : type === "mobile"
                          ? "Mobile"
                          : "Web"}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {(projectType === "all"
                ? project
                : project.filter((item) => item.type === projectType)
              ).map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    tags={item.tags}
                    link={item.link}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default Projects;
