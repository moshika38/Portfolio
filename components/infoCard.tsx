import React from "react";
import Image from "next/image";

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="flex justify-self-start items-center gap-3.5 py-3 group/card">
      <div className="icon w-10 h-10 bg-white/[0.03] border border-white/[0.04] relative rounded-xl overflow-hidden flex justify-center items-center group-hover/card:border-primary/10 transition-colors duration-300">
        <Image src={icon} alt={title} width={16} height={16} className="opacity-50 group-hover/card:opacity-80 transition-opacity duration-300" />
      </div>
      <div className="text">
        <p className="uppercase text-[10px] font-semibold text-white/25 tracking-wider">{title}</p>
        <p className="text-[13px] text-white/70 font-medium mt-0.5">{description}</p>
      </div>
    </div>
  );
}

export default InfoCard;
