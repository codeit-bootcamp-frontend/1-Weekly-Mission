import styles from "./Card.module.css";

import Star from "public/assets/star.svg";
import KebabMenu from "../Kebabmenu";
import { getCreatedDate, getDiffTime } from "@/common/utils/dateUtils";
import classNames from "classnames";
import { LinkData } from "@/types/link";

interface CardItemProps {
  link: LinkData;
}

export default function CardItem({ link }: CardItemProps) {
  const { description, image_source, created_at } = link;
  const { yyyy, mm, dd } = getCreatedDate(created_at);

  const imageUrl = image_source ? image_source : "/images/logo.svg";
  const cardStyle = classNames(styles.default, { [styles["card-image"]]: image_source });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles["card-image"]}>
          <img src={imageUrl} alt="link" className={cardStyle} />
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
