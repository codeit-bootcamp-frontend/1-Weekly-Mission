import Link from "next/link";
import Image from "next/image";

import CardMenu from "@/components/CardMenu/CardMenu";

import { blurDataURL } from "@/utils/utils";

import logoImg from "@/assets/images/emptyImg.svg";
import starImg from "@/assets/images/star.svg";

import styles from "./CardItem.module.css";

interface FolderPageCardItemProps {
  folderListData: UserFolders[];
  formatTimeDiff: string;
  formattedCreatedAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

function FolderPageCardItem({
  folderListData,
  formatTimeDiff,
  formattedCreatedAt,
  url,
  title,
  description,
  imageSource,
}: FolderPageCardItemProps) {
  return (
    <li className={styles.cardItem}>
      <Link
        className={styles.imgContainer}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          fill
          className={styles.img}
          src={imageSource || logoImg}
          alt={title || "카드 이미지"}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </Link>
      <button className={styles.bookmarkButton}>
        <Image src={starImg} alt="즐겨찾기 이미지" />
      </button>
      <div className={styles.contentContainer}>
        <div className={styles.container}>
          <p className={styles.timeDiff}>{formatTimeDiff}</p>
          <CardMenu folderListData={folderListData} url={url} />
        </div>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <p className={styles.description}>
            {title}
            <br />
            {description}
          </p>
        </Link>
        <p className={styles.createdAt}>{formattedCreatedAt}</p>
      </div>
    </li>
  );
}

export default FolderPageCardItem;
