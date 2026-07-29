"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
  tags: string;
  type: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-card-dark border border-white/[0.05] w-full max-w-5xl max-h-[90vh] rounded-3xl lg:rounded-[2rem] overflow-y-auto relative shadow-2xl shadow-primary/[0.03] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Project Image - 16:9 hero */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-video overflow-hidden"
            >
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1024px"
                className="object-contain bg-black/40"
                priority
              />
            </motion.div>

            {/* Project Details */}
            <div className="p-6 sm:p-8 md:p-10">
              <div className="max-w-3xl">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/[0.08] text-primary text-[10px] font-black uppercase tracking-widest mb-4 border border-primary/10">
                    {project.type}
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">
                    {project.title}
                  </h2>
                  <div className="h-[3px] w-12 bg-primary/60 rounded-full mb-6" />
                  <p className="text-text-muted text-sm md:text-base leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.split(" ").map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white/[0.03] border border-white/[0.04] rounded-lg text-[10px] font-medium text-white/40 hover:text-primary hover:bg-primary/[0.04] hover:border-primary/10 transition-all duration-300 cursor-default"
                      >
                        {tag.replace("#", "")}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-black px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/10"
                  >
                    View Project
                    <ExternalLink
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                  {project.link.includes("github.com") && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/[0.03] border border-white/[0.05] text-white rounded-xl hover:bg-white/[0.06] transition-all flex items-center justify-center"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
