import React from "react";
import Image from "next/image";

interface props {
  title: string;
  description: string;
  summery: string;
  image: string;
}

function EduCard({ title, description, summery: date, image }: props) {
  return (
    <div className="eduCard mx-1 my-2 bg-card-dark rounded-2xl withBorder flex items-center gap-5 p-5 shadow-xl">
      <div className="p-4 lg:p-5 bg-white/5 inline-flex items-center justify-center withBorder rounded-2xl shrink-0">
        <Image
          src={image}
          alt=""
          width={40}
          height={40}
          className="w-8 h-8 lg:w-10 lg:h-10 opacity-70"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-sm lg:text-base font-bold text-primary leading-snug">
          {title}
        </p>
        <p className="text-xs lg:text-sm text-white/70 mt-1">{description}</p>
        <p className="text-[10px] lg:text-xs text-white/30 uppercase tracking-widest mt-2">
          {date}
        </p>
      </div>
    </div>
  );
}

export default EduCard;
