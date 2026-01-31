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
    <div className="bg-card-dark withBorder rounded-3xl p-5 flex flex-col h-full group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
      <div
        className="w-full h-[160px] overflow-hidden rounded-2xl mb-4 relative cursor-pointer"
        onClick={onView}
      >
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="grow flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>

        <div className="mt-auto pt-4 flex flex-col gap-4">
          <div className="flex gap-3">
            <button
              onClick={onView}
              className="grow bg-primary/10 text-primary hover:bg-primary hover:text-black px-5 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              Learn More
            </button>
            <Link
              href={link}
              target="_blank"
              className="flex items-center justify-center p-2.5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all text-white/60 hover:text-white"
            >
              <ExternalLink size={16} />
            </Link>
          </div>

          <div className="tags">
            <p className="text-[10px] font-medium text-text-muted uppercase tracking-[0.15em]">
              {tags}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
