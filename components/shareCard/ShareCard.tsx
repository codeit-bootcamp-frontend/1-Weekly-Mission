import React from "react";
import logo from "@/public/icons/logo.svg";
import styles from "./shareCard.module.css";
import calcCreateTime from "../../utils/calcCreateTime";
import Image from "next/image";

interface ShareCardProps {
  linkInfo: {
    id: number;
    created_at: string;
    url: string;
    title: string;
    description: string;
    image_source: string;
  };
}

function ShareCard({ linkInfo }: ShareCardProps) {
  const created_at = new Date(linkInfo?.created_at);
  const formattedTime = calcCreateTime(created_at);

  const year = created_at.getFullYear();
  const month = created_at.getMonth() + 1;
  const date = created_at.getDate();

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
            linkInfo?.image_source
              ? styles.cardImgSection
              : styles.cardImgSectionEmpty
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
