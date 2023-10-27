import React from "react";
import Button from "../button/Button";
import styles from "./FolderButton.module.css";
export default function FolderButton({ data, dataKeys }) {
  return (
    <div className={styles.container}>
      <div className={styles.sub__container}>
        {data &&
          data.map((item) => {
            return dataKeys.map((key) => {
              return <Button key={key}>{item[key].folderName}</Button>;
            });
          })}
      </div>
      <Button className={styles.add__button}>폴더추가</Button>
    </div>
  );
}
