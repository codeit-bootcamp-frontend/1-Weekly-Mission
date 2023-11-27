import React, { useState } from "react";
import { Card } from "sharing/ui-card";
import { CardContent } from "sharing/ui-card-content";
import { CardImage } from "sharing/ui-card-image";

interface ReadOnlyCardProps {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime?: string;
  description?: string;
  createdAt: string;
}

export const ReadOnlyCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}: ReadOnlyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <CardContent
          elapsedTime={elapsedTime || ""}
          description={description || ""}
          createdAt={createdAt}
          isHovered={isHovered}
        />
      </Card>
    </a>
  );
};
