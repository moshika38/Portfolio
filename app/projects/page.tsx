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
  title: string;
  image: string;
  description: string;
  link: string;
  tags: string;
  type: string;
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            >
              {projects.map((item: Project, index: number) => (
                <div key={index}>
                  <motion.div
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
                </div>
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
