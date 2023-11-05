import React from "react";
import Card from "../../common/card/Card";
import styles from "./ImageListItem.module.css";
import { parseDatestring, getElapsedTime } from "../../utils/calTime";

export default function ImageListItem({ item }) {
  const { createdAt, url, title, description, imageSource } = item;
  const targetData = parseDatestring(createdAt);
  const { year, month, day } = targetData;
  const diffTime = getElapsedTime(createdAt);

  return (
    <a href={url}>
      <Card>
        <img className={styles.card__image} src={imageSource} alt={title} />
        <p>{diffTime}</p>
        <p>{description}</p>
        <p>
          {year}. {month}. {day}
        </p>
      </Card>
    </a>
  );
}
