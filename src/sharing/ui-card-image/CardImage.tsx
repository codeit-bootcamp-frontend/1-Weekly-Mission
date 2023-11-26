import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import { DEFAULT_IMAGE } from "./constant";

const cx = classNames.bind(styles);

interface CardImageProps {
  imageSource: string | undefined;
  alt?: string;
  isZoomedIn: boolean;
}

export const CardImage = ({ imageSource, alt, isZoomedIn }: CardImageProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={cx("container", { zoomin: isZoomedIn })}
      aria-label={alt}
    />
  );
};
