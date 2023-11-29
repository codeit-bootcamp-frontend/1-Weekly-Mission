import React from "react";
import styles from "./ImageListItem.module.css";
import { getElapsedTime, parseDatestring } from "@/utils/caltime";
import Card from "../card/Card";
import Link from "next/link";
import Image from "next/image";

export default function ImageListItem({ item }) {
  const { createdAt, url, title, description, imageSource } = item;
  const targetData = parseDatestring(createdAt);
  const { year, month, day } = targetData;
  const diffTime = getElapsedTime(createdAt);
  console.log(imageSource);
  return (
    <Link href={url}>
      <Card>
        {/* <Image src={imageSource} width={20} height={20} /> */}
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
