import Image from "next/image";
import Link from "next/link";

import { blurDataURL } from "@/utils/utils";

import logoImg from "@/assets/images/emptyImg.svg";

import styles from "./CardItem.module.css";

interface Props {
  formatTimeDiff: string;
  formattedCreatedAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

function SharedPageCardItem({
  formatTimeDiff,
  formattedCreatedAt,
  url,
  title,
  description,
  imageSource,
}: Props) {
  return (
    <div className={styles.cardItem}>
      <Link
        className={styles.imgContainer}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          fill
          className={styles.img}
          src={imageSource ? imageSource : logoImg}
          alt={title}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </Link>
      <div className={styles.contentContainer}>
        <p className={styles.timeDiff}>{formatTimeDiff}</p>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <p className={styles.description}>
            {title}
            <br />
            {description}
          </p>
        </Link>
        <p className={styles.createdAt}>{formattedCreatedAt}</p>
      </div>
    </div>
  );
}

export default SharedPageCardItem;
