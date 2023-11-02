import React from "react";
import styles from "./DropDown.module.css";
export default function DropDown() {
  return (
    <div className={styles.container}>
      <ul className={styles.sub__container}>
        <li>삭제하기</li>
        <li>폴더에추가하기</li>
      </ul>
    </div>
  );
}
