import React from "react";
 interface props {
  tagname: string;
   
}

function AppTags({tagname}:props) {
  return (
    <p className="text-sm rounded-[3px]  withBorder inline-block px-3 py-1  bg-linear-to-b -card-dark to-border-dark">
      {tagname}
    </p>
  );
}

export default AppTags;
