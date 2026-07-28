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
      <div className="shrink-0 w-11 h-11 bg-white/[0.03] border border-white/[0.04] rounded-xl flex justify-center items-center">
        <Image src={icon} alt={infoTitle} width={16} height={16} className="opacity-50" />
      </div>
      <div className="info overflow-hidden">
        <p className="text-[10px] text-white/25 uppercase tracking-wider mb-0.5 font-semibold">
          {infoTitle}
        </p>
        <p className="text-[13px] text-white/70 font-medium truncate">
          {info}
        </p>
      </div>
    </div>
  );
}

export default InfoBar;
