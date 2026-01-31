"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
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
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-card-dark withBorder w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row shadow-primary/10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <X size={24} />
            </button>

            {/* Project Image */}
            <div className="w-full md:w-1/2 h-[250px] md:h-auto relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-card-dark md:hidden" />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                  {project.type}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  {project.title}
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full mb-6" />
                <p className="text-text-muted text-base md:text-lg leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-white text-xs font-black uppercase tracking-widest mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.split(" ").map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-[10px] font-medium text-white/60 hover:text-primary hover:bg-primary/10 transition-colors"
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
                  className="flex-1 bg-primary text-black px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
                >
                  View Project
                  <ExternalLink
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
                {project.link.includes("github.com") && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
