import Image from "next/image";
import React from "react";

interface LinkIconsProps {
  image: string;
  alt: string;
  url: string;
}

export default function LinkIcons({ image, alt, url }: LinkIconsProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Image src={image} alt={alt} width={24} height={24} />
    </a>
  );
}
