import { useState } from "react";
import styles from "./card.module.css";
import logo from "@/public/icons/logo.svg";
import starIcon from "@/public/icons/star.svg";
import calcCreateTime from "../../utils/calcCreateTime";
import KebabButton from "../kebabButton/KebabButton";
import { FolderName, LinkInfo } from "../../types/types";
import Image from "next/image";

interface CardProps {
  linkInfo: LinkInfo;
  folders: FolderName[];
}

function Card({ linkInfo, folders }: CardProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleKebabClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const createdAt = new Date(linkInfo?.created_at);
  const formattedTime = calcCreateTime(createdAt);

  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const date = createdAt.getDate();

  return (
    <div className={styles.card}>
      <Image
        src={starIcon}
        alt="star-icon"
        className={styles.starIcon}
        width={24}
        height={24}
      />
      <a
        href={`${linkInfo.url}`}
        className={styles.cardLink}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={
            linkInfo?.image_source
              ? styles.cardImgSection
              : `${styles.cardImgSection} ${styles.cardEmpty}`
          }
        >
          {linkInfo?.image_source ? (
            <Image
              src={linkInfo?.image_source}
              className={styles.linkImg}
              alt="cat"
              fill
            />
          ) : (
            <Image
              src={logo}
              className={`${styles.cardEmpty} ${styles.linkImg} ${styles.linkImgEmpty}`}
              alt="cat"
              width={50}
              height={50}
            />
          )}
        </div>
      </a>
      <div className={styles.cardTextSection}>
        <div className={styles.timeStamp}>
          {formattedTime}
          <KebabButton
            onClick={handleKebabClick}
            isPopoverOpen={isPopoverOpen}
            url={linkInfo.url}
            folders={folders}
          />
        </div>
        <p className={styles.introduceText}>{linkInfo?.description}</p>
        <p className={styles.createdDate}>{`${year}. ${month}. ${date}`}</p>
      </div>
    </div>
  );
}

export default Card;
