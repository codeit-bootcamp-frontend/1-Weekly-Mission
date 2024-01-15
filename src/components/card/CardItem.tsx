import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import styles from "./Card.module.css";

import Star from "public/assets/star.svg";
import KebabMenu from "../Kebabmenu";

import { getCreatedDate, getDiffTime } from "@/common/utils/dateUtils";
import { LinkData } from "@/types/link";

interface CardItemProps {
  link: LinkData;
}

export default function CardItem({ link }: CardItemProps) {
  const [imageUrl, setImageUrl] = useState(link.image_source);

  const { description, image_source, created_at } = link;
  const { yyyy, mm, dd } = getCreatedDate(created_at);

  const cardStyle = classNames(styles.default, { [styles["card-image"]]: image_source });

  const handleImageError = () => {
    setImageUrl("/images/logo.svg");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles["card-container"]}>
          <Image
            src={imageUrl}
            alt="link"
            className={cardStyle}
            fill
            onError={handleImageError}
            priority
          />
        </div>
        <div className={styles.liked}>
          <Star />
        </div>
      </div>
      <div className={styles["card-info"]}>
        <div className={styles.info}>
          {getDiffTime(created_at)}
          <KebabMenu link={link} />
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.createAt}>
          {yyyy}. {mm}. {dd}
        </p>
      </div>
    </div>
  );
}
