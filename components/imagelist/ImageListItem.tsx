import React from "react";
import styles from "./ImageListItem.module.css";
import { getElapsedTime, parseDatestring } from "@/utils/caltime";
import Card from "../card/Card";
import Link from "next/link";
import { LinkContents } from "@/api/share";

export default function ImageListItem({ item }: { item: LinkContents }) {
  const { id, createdAt, url, title, description, imageSource } = item;
  const targetData = parseDatestring(createdAt);
  const { year, month, day } = targetData;
  const diffTime = getElapsedTime(createdAt);

  return (
    <Link href={url}>
      <Card>
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
