import React from "react";
import Card from "../card/Card";
import styles from "./ImageListItem.module.css";
import { parseDatestring, getElapsedTime } from "../../utils/calTime";

export default function ImageListItem({ item }) {
  const { createdAt, url, title, description, imageSource } = item;
  const targetData = parseDatestring(createdAt);
  const { year, month, day } = targetData;
  const navgiateToPage = (url) => {
    window.location.href = `${url}`;
  };

  const diffTime = getElapsedTime(createdAt);

  return (
    <>
      <Card onClickFunc={() => navgiateToPage(url)}>
        <img className={styles.card__image} src={imageSource} alt={title} />
        <p>{diffTime}</p>
        <p>{description}</p>
        <p>
          {year}. {month}. {day}
        </p>
      </Card>
    </>
  );
}
