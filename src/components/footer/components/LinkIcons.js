import React from 'react';

export default function LinkIcons({ image, alt, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img src={image} alt={alt} />
    </a>
  );
}
