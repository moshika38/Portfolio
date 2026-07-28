"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Headline from "@/components/headline";
import { projects } from "@/data/projects";
import { useState } from "react";
import ProjectCard from "@/components/projectCard";
import { motion, Variants } from "framer-motion";
import ProjectModal from "@/components/ProjectModal";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  tags: string;
  type: string;
}

function Projects() {
  const [projectType, setProjectType] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project = projects;

  const handleOpenModal = (proj: Project) => {
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="projects min-h-screen flex flex-col relative selection:bg-primary/30">
      <Header />

      <main className="grow max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="card-premium rounded-3xl lg:rounded-[2.5rem] overflow-hidden relative min-h-[700px]"
        >
          <div className="glow-top-right" />
          <div className="glow-bottom-left" />

          <div className="p-6 sm:p-12 lg:p-16 relative z-10">
            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 lg:mb-16"
            >
              <div>
                <Headline title="My Projects" />
                <p className="text-text-muted mt-4 text-sm lg:text-base font-light max-w-xl leading-relaxed">
                  A collection of my recent work across web and mobile
                  platforms.
                </p>
              </div>

              <div className="flex bg-white/[0.03] p-1.5 rounded-xl border border-white/[0.04] backdrop-blur-sm w-full lg:w-auto overflow-x-auto">
                <div className="flex w-full lg:w-auto min-w-max">
                  {["all", "mobile", "web"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`flex-1 lg:flex-none px-5 lg:px-6 py-2.5 rounded-lg text-[10px] lg:text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                        projectType === type
                          ? "bg-primary text-black shadow-lg shadow-primary/15"
                          : "text-white/30 hover:text-white/60 hover:bg-white/[0.03]"
                      }`}
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            >
              {(projectType === "all"
                ? project
                : project.filter((item) => item.type === projectType)
              ).map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    tags={item.tags}
                    link={item.link}
                    onView={() => handleOpenModal(item)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Projects;
