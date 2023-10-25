import React from "react";
import Card from "../card/Card";
import styles from "./ImageListItem.module.css";
import { parseDatestring, compareNowAndAfter } from "../../utils";

export default function ImageListItem({ item }) {
  const { createdAt, url, title, description, imageSource } = item;
  const currentData = parseDatestring(new Date());
  const targetData = parseDatestring(createdAt);
  console.log(currentData, targetData);
  //const result = compareNowAndAfter(currentData, targetData);
  const { year, month, day } = targetData;

  const navgiateToPage = (url) => {
    window.location.href = `${url}`;
  };

  return (
    <>
      <Card onClickFunc={() => navgiateToPage(url)}>
        <img
          className={styles.card__image}
          src={imageSource}
          alt={title}
          // width="100%"
          // height="250"
        />
        <p>시간계산함수만들어야함 </p>
        <p>{description}</p>
        <p>
          {year}. {month}. {day}
        </p>
      </Card>
    </>
  );
}
