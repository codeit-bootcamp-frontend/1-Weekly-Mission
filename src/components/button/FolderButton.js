import React from "react";
import Button from "../button/Button";
import styles from "./FolderButton.module.css";
import { Link } from "react-router-dom";
export default function FolderButton({ data, dataKeys, onClickFunc }) {
  return (
    <div className={styles.container}>
      <div className={styles.sub__container}>
        <Button onClickFunc={() => console.log("하이")}>전체</Button>
        {data &&
          data.map((item) => {
            return dataKeys.map((key) => {
              return (
                <Button key={key} onClickFunc={() => console.log("dd")}>
                  {item[key].folderName}
                </Button>
              );
            });
          })}
      </div>
      <Button
        className={styles.add__button}
        onClickFunc={() => alert("추후기능만들예정")}
      >
        폴더추가
      </Button>
    </div>
  );
}
