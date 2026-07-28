import React from "react";

interface Props {
  tagname: string;
}

function AppTags({ tagname }: Props) {
  return (
    <span className="text-[10px] lg:text-[11px] rounded-lg withBorder inline-block px-3 py-1.5 bg-white/[0.02] font-medium text-white/40 hover:text-primary/70 hover:border-primary/10 transition-colors duration-300 cursor-default">
      {tagname}
    </span>
  );
}

export default AppTags;
