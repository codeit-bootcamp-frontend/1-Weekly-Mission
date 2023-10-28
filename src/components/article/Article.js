import React, { useState } from "react";
import styles from "./Article.module.css";
import titleImage from "../../assets/images/title.svg";

export default function Article() {
  const [title, setTitle] = useState("유용한글");
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <img
        className={styles.images__container}
        src={titleImage}
        alt={title}
      ></img>
    </div>
  );
}
