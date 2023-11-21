import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import { DEFAULT_IMAGE } from "./constant";

const cx = classNames.bind(styles);

export const CardImage = ({ imageSource, alt, isZoomedIn }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={cx("container", { zoomin: isZoomedIn })}
      alt={alt}
    />
  );
};
