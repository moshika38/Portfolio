import React from "react";
import Image from "next/image";
import Link from "next/link";
import AppTags from "./tags";

interface Props {
  image: string;
  title: string;
  description: string;
  tags: string;
  link: string;
}

function ProjectCard({ image, title, description, tags, link }: Props) {
  return (
    <div className="bg-card-dark withBorder rounded-3xl p-5 flex flex-col h-full">
      <div className="w-full h-[160px] overflow-hidden rounded-2xl mb-4">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="grow flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>

        <div className="mt-auto pt-4 flex flex-col gap-4">
          <Link href={link} target="_blank" className="inline-block">
            <button className="bg-primary text-black px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2 group/btn">
              View Project{" "}
              <span className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform inline-block">
                &#8599;
              </span>
            </button>
          </Link>

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
