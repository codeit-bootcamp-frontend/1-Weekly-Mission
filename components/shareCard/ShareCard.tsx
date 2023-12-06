import React from "react";
import logo from "@/public/icons/logo.svg";
import styles from "./shareCard.module.css";
import calcCreateTime from "../../utils/calcCreateTime";
import Image from "next/image";

interface ShareCardProps {
  linkInfo: {
    id: number;
    createdAt: string;
    url: string;
    title: string;
    description: string;
    imageSource: string;
  };
}

function ShareCard({ linkInfo }: ShareCardProps) {
  const createdAt = new Date(linkInfo?.createdAt);
  const formattedTime = calcCreateTime(createdAt);

  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const date = createdAt.getDate();

  return (
    <div className={styles.card}>
      <a
        href={`${linkInfo.url}`}
        className={styles.cardLink}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={
            linkInfo?.imageSource
              ? styles.cardImgSection
              : styles.cardImgSectionEmpty
          }
        >
          {linkInfo?.imageSource ? (
            <Image
              src={linkInfo?.imageSource}
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
        <div className={styles.cardTextSection}>
          <p className={styles.timeStamp}>{formattedTime}</p>
          <p className={styles.introduceText}>
            {linkInfo?.description ??
              "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd"}
          </p>
          <p className={styles.createdDate}>{`${year}. ${month}. ${date}`}</p>
        </div>
      </a>
    </div>
  );
}

export default ShareCard;
