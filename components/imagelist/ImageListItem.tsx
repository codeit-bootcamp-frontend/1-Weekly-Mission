import React from "react";
import styles from "./ImageListItem.module.css";
import { getElapsedTime, parseDatestring } from "@/utils/caltime";
import Card from "../card/Card";
import Link from "next/link";
import { LinkContents } from "@/api/share";
import Image from "next/image";

export default function ImageListItem({ item }: { item: LinkContents }) {
  const { id, createdAt, url, title, description, imageSource } = item;
  const targetData = parseDatestring(createdAt);
  const { year, month, day } = targetData;
  const diffTime = getElapsedTime(createdAt);

  return (
    <Link href={url}>
      <Card>
        {/* <Image
          className={styles.card__image}
          src={imageSource}
          alt={title}
          width={20}
          height={20}
        /> */}
        {/* <img src={imageSource}></img> */}
        <img className={styles.card__image} src={imageSource} alt={title} />
        <p>{diffTime}</p>
        <p>{description}</p>
        <p>
          {year}. {month}. {day}
        </p>
      </Card>
    </Link>
  );
}
