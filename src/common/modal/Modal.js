import React from "react";
import styles from "./Modal.module.css";
import linkCopy from "../../assets/images/linkcopy.svg";
import kakaochat from "../../assets/images/kakaochat.svg";
import metachat from "../../assets/images/metachat.svg";
export default function Modal({ status, tabName, folderName }) {
  const obj = {
    share: ["폴더공유"],
    change: ["폴더이름변경", "변경하기"],
    delete: ["폴더삭제", "삭제하기"],
  };

  const [title, buttonName] = obj[tabName];

  return (
    <div className={styles.container}>
      <div className={styles.modal__container}>
        <button className={styles.cancel__button} onClick={() => status(false)}>
          X
        </button>
        <p className={styles.title}>{title}</p>
        {/* except for change button */}
        {tabName !== "change" && <p className={styles.folder}>{folderName}</p>}
        {/* only for change button */}
        {tabName === "change" && (
          <input className={styles.input} placeholder="내용입력" />
        )}
        {buttonName ? (
          <button className={styles.button}>{buttonName}</button>
        ) : (
          <div className="link__container">
            <img src={linkCopy} alt="link_copy" />
            <img src={kakaochat} alt="kakao_chat" />
            <img src={metachat} alt="meta_chat" />
          </div>
        )}
      </div>
    </div>
  );
}
