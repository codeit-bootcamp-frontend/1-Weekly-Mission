import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ status, tabName }) {
  // console.log(status, tabName); 얘네 왜 안찍힘?
  console.log(status);
  console.log("왜 전전달이 안되지??");
  const obj = {
    share: "폴더공유",
    change: "폴더이름변경",
    delete: "폴더삭제",
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal__container}>
        <button className={styles.cancel__button} onClick={() => status(false)}>
          X
        </button>
        <p className={styles.title}>{obj.tabName}</p>
        <input className={styles.input} placeholder="내용입력" />
        <button className={styles.button}>변경하기</button>
      </div>
    </div>
  );
}
