import styles from "./Card.module.css";

import Star from "@/public/assets/star.svg";
import KebabMenu from "../Kebabmenu";
import { getCreatedDate, getDiffTime } from "@/common/utils/dateUtils";
import { LinkData, SampleLinkData } from "@/types/folder";
import classNames from "classnames";

interface CardItemProps {
  link: LinkData & SampleLinkData;
}

export default function CardItem({ link }: CardItemProps) {
  // prettier-ignore
  const { description, image_source, imageSource, created_at, createdAt, url } = link;
  const linkCreatedAt = (created_at ?? createdAt) as string;
  const { yyyy, mm, dd } = getCreatedDate(linkCreatedAt);
  const imageSourceUrl = image_source ?? imageSource;
  const imageUrl = imageSourceUrl ? imageSourceUrl : "/images/logo.svg";
  const cardStyle = classNames(styles.default, { [styles["card-image"]]: !!imageSourceUrl });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles["card-image"]}>
          <img src={imageUrl} alt="logo" className={cardStyle} />
        </div>
        <div className={styles.liked}>
          <Star />
        </div>
      </div>
      <div className={styles["card-info"]}>
        <div className={styles.info}>
          {getDiffTime(linkCreatedAt)}
          <KebabMenu link={url} />
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.createAt}>
          {yyyy}. {mm}. {dd}
        </p>
      </div>
    </div>
  );
}
