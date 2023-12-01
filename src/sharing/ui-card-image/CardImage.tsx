import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import { DEFAULT_IMAGE } from "./constant";

const cx = classNames.bind(styles);

type CardImageProps = {
  imageSource: string;
  isZoomedIn: boolean;
  alt: string;
};

export const CardImage = ({ imageSource, isZoomedIn, alt }: CardImageProps) => {
  return (
    <div className={cx("container")}>
      <img
        src={imageSource ?? DEFAULT_IMAGE}
        className={cx("image", { zoomin: isZoomedIn })}
        alt={alt}
      />
    </div>
  );
};
