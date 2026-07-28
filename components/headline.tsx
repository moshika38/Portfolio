import React from "react";

function Headline({ title }: { title: string }) {
  return (
    <div className="flex justify-start items-center gap-3">
      <h2 className="text-xl lg:text-2xl font-bold text-white tracking-tight">{title}</h2>
      <div className="w-8 h-[3px] rounded-full bg-primary/60" />
    </div>
  );
}

export default Headline;
