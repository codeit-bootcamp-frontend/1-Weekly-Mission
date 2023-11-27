import React from "react";
import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import { DEFAULT_IMAGE } from "./constant";

const cx = classNames.bind(styles);

type CardImageProps = {
  imageSource?: string;
  alt?: string;
  isZoomedIn?: boolean;
};

export const CardImage: React.FC<CardImageProps> = ({
  imageSource,
  alt,
  isZoomedIn,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={cx("container", { zoomin: isZoomedIn })}
      aria-label={alt}
    />
  );
};
