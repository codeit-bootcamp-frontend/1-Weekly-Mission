import "./CardImage.css";
import { DEFAULT_IMAGE } from "./constant";

export const CardImage = ({ imageSource, alt, isZoomedIn }) => {
  const className = isZoomedIn ? "CardImage CardImage-zoom-in" : "CardImage";

  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={className}
      alt={alt}
    />
  );
};
