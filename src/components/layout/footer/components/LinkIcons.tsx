import React from "react";

interface LinkIconsProps {
  image: string;
  alt: string;
  url: string;
}

export default function LinkIcons({ image, alt, url }: LinkIconsProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img src={image} alt={alt} />
    </a>
  );
}
