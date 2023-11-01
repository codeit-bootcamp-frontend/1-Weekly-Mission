import React from "react";
import Card from "../../common/card/Card";
import styles from "../imageList/ImageListItem.module.css";
import kebabImage from "../../assets/images/kebab.svg";

import { parseDatestring, getElapsedTime } from "../../utils/calTime";
export default function DataListItem({ item }) {
  const { id, url, title, image_source, description, created_at } = item;
  const navgiateToPage = (url) => {
    window.location.href = `${url}`;
  };
  const targetData = parseDatestring(created_at);
  const { year, month, day } = targetData;
  const diffTime = getElapsedTime(created_at);

  return (
    <>
      <Card onClickFunc={() => navgiateToPage(url)}>
        <div className={styles.container}>
          <img className={styles.card__image} src={image_source} alt={title} />
          <div className={styles.sub__container}>
            <p>{diffTime}</p>
            <img src={kebabImage} alt="kebab" className={styles.kebab__image} />
          </div>
          <p>{description}</p>
          <p>
            {year}. {month}. {day}
          </p>
        </div>
      </Card>
    </>
  );
}
