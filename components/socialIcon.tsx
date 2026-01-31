import React from "react";
import Image from "next/image";
import Link from "next/link";
function SocialIcon() {
  return (
    <div className="flex justify-between items-center">
      <Link href={""} target="blank">  <Image src={"/assets/social/git.svg"} alt={""} width={22} height={22} /></Link>
      <Link href={""} target="blank">  <Image src={"/assets/social/email.svg"} alt={""} width={22} height={22} /></Link>
      <Link href={""} target="blank">  <Image src={"/assets/social/fb.svg"} alt={""} width={22} height={22} /></Link>
      <Link href={""} target="blank">  <Image src={"/assets/social/wp.svg"} alt={""} width={22} height={22} /></Link>
   
    </div>
  );
}

export default SocialIcon;
