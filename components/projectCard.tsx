import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Props {
  image: string;
  title: string;
  description: string;
  tags: string;
  link: string;
  onView?: () => void;
}

function ProjectCard({ image, title, description, tags, link, onView }: Props) {
  return (
    <div className="card-premium rounded-3xl p-4 flex flex-col h-full group relative overflow-hidden">
      {/* Image Container */}
      <div
        className="w-full h-[180px] overflow-hidden rounded-2xl mb-5 relative cursor-pointer"
        onClick={onView}
      >
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="grow flex flex-col px-1">
        <h3 className="text-base lg:text-lg font-bold text-white mb-2 group-hover:text-primary/90 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>

        <div className="mt-auto pt-4 flex flex-col gap-4">
          <div className="flex gap-3">
            <button
              onClick={onView}
              className="grow bg-primary/[0.08] text-primary border border-primary/10 hover:bg-primary hover:text-black px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
            >
              Learn More
            </button>
            <Link
              href={link}
              target="_blank"
              className="flex items-center justify-center p-2.5 bg-white/[0.03] border border-white/[0.04] rounded-xl hover:bg-white/[0.06] hover:border-white/[0.08] transition-all duration-300 text-white/40 hover:text-white"
            >
              <ExternalLink size={15} />
            </Link>
          </div>

          <div className="tags">
            <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.12em]">
              {tags}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
