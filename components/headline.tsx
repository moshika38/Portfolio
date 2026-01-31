import React from "react";

function Headline({ title }: { title: string }) {
  return (
    <div className="flex justify-start items-baseline gap-2">
      <p className="text-2xl   font-bold">{title}</p>
      <div className="liner w-10 h-1 rounded-full bg-primary mt-8"></div>
    </div>
  );
}

export default Headline;
