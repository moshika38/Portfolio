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
    <div className="eduCard  mx-1 my-2 bg-linear-to-b -card-dark to-border-dark py-5 px-5 rounded-2xl withBorder flex gap-5">
      <div className="p-5 bg-linear-to-b -card-dark to-border-dark inline-block withBorder rounded-2xl">
        <Image src={image} alt="" width={50} height={50} />
      </div>
      <div className="flex justify-center flex-col">
        <p className="text-1xl text-primary capitalize">{title}</p>
        <p className="text-sm">{description}</p>
        <p className="text-sm text-text-muted">{date}</p>
      </div>
    </div>
  );
}

export default EduCard;
