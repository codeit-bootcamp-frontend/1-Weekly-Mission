import React from "react";
import styles from "./HeaderButton.module.css";
import linkImage from "../../assets/images/link.svg";
import Button from "./Button";

export default function HeaderButton() {
  return (
    <div className={styles.container}>
      <div className={styles.button__container}>
        <div className={styles.input__container}>
          <img className={styles.image} src={linkImage} alt="링크이미지" />
          <input className={styles.input} placeholder="링크를 추가해보세요" />
        </div>
        <div className={styles.add_button}>
          <Button>추가하기</Button>
        </div>
      </div>
    </div>
  );
}
