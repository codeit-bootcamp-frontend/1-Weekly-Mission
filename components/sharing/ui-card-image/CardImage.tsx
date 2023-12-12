import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import { DEFAULT_IMAGE } from "./constant";
import Image from "next/image";
import { ImageWrapper } from "../ui-image-wrapper";

const cx = classNames.bind(styles);

type CardImageProps = {
  imageSource: string;
  isZoomedIn: boolean;
  alt: string;
};

export const CardImage = ({ imageSource, isZoomedIn, alt }: CardImageProps) => {
  return (
    <div className={cx("container")}>
      <ImageWrapper className={cx("image", { zoomin: isZoomedIn })}>
        <Image fill src={imageSource ?? DEFAULT_IMAGE} alt={alt} />
      </ImageWrapper>
    </div>
  );
};
