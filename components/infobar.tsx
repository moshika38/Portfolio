import React from "react";
import Image from "next/image";

interface InfoBarProps {
  icon: string;
  infoTitle: string;
  info: string;
}

function InfoBar({ icon, infoTitle, info }: InfoBarProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="shrink-0 w-11 h-11 bg-card-dark withBorder rounded-xl flex justify-center items-center shadow-lg">
        <Image
          src={icon}
          alt={infoTitle}
          width={18}
          height={18}
           
        />
      </div>
      <div className="info overflow-hidden">
        <p className="text-[11px] text-text-muted uppercase tracking-wider mb-0.5">
          {infoTitle}
        </p>
        <p className="text-[13.5px] text-white/90 font-medium truncate">
          {info}
        </p>
      </div>
    </div>
  );
}

export default InfoBar;
