import React from "react";
import Card from "../card/Card";
import styles from "../imageList/ImageListItem.module.css";
import { parseDatestring, getElapsedTime } from "../../utils/calTime";
export default function DataListItem({ item }) {
  const { id, url, title, image_source, description, created_at } = item;
  const navgiateToPage = (url) => {
    window.location.href = `${url}`;
  };
  const targetData = parseDatestring(created_at);
  const { year, month, day } = targetData;
  return (
    <>
      <Card onClickFunc={() => navgiateToPage(url)}>
        <img className={styles.card__image} src={image_source} alt={title} />
        <p>시간계산</p>
        <p>{description}</p>
        <p>
          {year}. {month}. {day}
        </p>
      </Card>
    </>
  );
}
