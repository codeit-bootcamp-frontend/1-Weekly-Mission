import React from "react";
import styles from "./ImageListItem.module.css";
import { getElapsedTime, parseDatestring } from "@/utils/caltime";
import Card from "../card/Card";
import Link from "next/link";
import { AuthShareLinks } from "@/api/share";

export default function ImageListItem({ item }: { item: AuthShareLinks }) {
  const { id, created_at, url, title, description, image_source } = item;
  const targetData = parseDatestring(created_at);
  const { year, month, day } = targetData;
  const diffTime = getElapsedTime(created_at);

  return (
    <Link href={url}>
      <Card>
        <img className={styles.card__image} src={image_source} alt={title} />
        <p>{diffTime}</p>
        <p>{description}</p>
        <p>
          {year}. {month}. {day}
        </p>
      </Card>
    </Link>
  );
}
