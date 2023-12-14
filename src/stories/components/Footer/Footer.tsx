import React from "react";
import group from "../../assets/group.png";
import Image from "next/image";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <div className={`flex justify-center items-center pb-7 ${className}`}>
      <Image src={group} alt={"Grupo"} />
    </div>
  );
};
