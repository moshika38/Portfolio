import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  summery: string;
  image: string;
}

function EduCard({ title, description, summery: date, image }: Props) {
  return (
    <div className="eduCard card-premium rounded-2xl flex items-center gap-5 p-5 lg:p-6 group hover:border-primary/[0.08] transition-all duration-300">
      <div className="p-4 bg-white/[0.03] border border-white/[0.04] inline-flex items-center justify-center rounded-2xl shrink-0 group-hover:border-primary/10 group-hover:bg-primary/[0.04] transition-all duration-300">
        <Image
          src={image}
          alt=""
          width={36}
          height={36}
          className="w-7 h-7 lg:w-9 lg:h-9 opacity-50 group-hover:opacity-70 transition-opacity duration-300"
        />
      </div>
      <div className="flex flex-col justify-center min-w-0">
        <p className="text-sm lg:text-[15px] font-bold text-primary leading-snug">
          {title}
        </p>
        <p className="text-xs lg:text-sm text-white/50 mt-1">{description}</p>
        <p className="text-[10px] lg:text-[11px] text-white/20 uppercase tracking-widest mt-2 font-medium">
          {date}
        </p>
      </div>
    </div>
  );
}

export default EduCard;
