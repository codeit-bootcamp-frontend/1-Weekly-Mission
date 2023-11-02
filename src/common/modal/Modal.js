import React, { useState, useRef } from "react";
import styles from "./Modal.module.css";
import linkCopy from "../../assets/images/linkcopy.svg";
import kakaochat from "../../assets/images/kakaochat.svg";
import metachat from "../../assets/images/metachat.svg";
import ConfirmModal from "./ConfirmModal";
export default function Modal({ setterFunc, tabName, folderName }) {
  const [clipUrl, setClipUrl] = useState("");
  const yesConfirm = () => {
    alert(`복사하였습니다 ${clipUrl}`);
  };

  const noConfirm = () => {
    alert("복사를 취소하셨네요");
  };
  const confirmClick = ConfirmModal(
    "url를 복사하시겠습니까?",
    yesConfirm,
    noConfirm
  );
  const [isCopied, setIsCopied] = useState(false);

  const toClipboard = () => {
    if (!isCopied) {
      navigator.clipboard.writeText(window.location.href).then((response) => {
        confirmClick();
      });
      setIsCopied(true);
    }
  };
  const obj = {
    share: ["폴더공유"],
    change: ["폴더이름변경", "변경하기", "blue"],
    delete: ["폴더삭제", "삭제하기", "red"],
  };

  const [title, buttonName, buttonColor] = obj[tabName];
  return (
    <div className={styles.container}>
      <div className={styles.modal__container}>
        <button
          className={styles.cancel__button}
          onClick={() => {
            setterFunc(false);
            setIsCopied(false);
          }}
        >
          X
        </button>
        <button
          className={styles.cancel__button}
          onClick={() => {
            setterFunc(false);
            setIsCopied(false);
          }}
        >
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
          buttonColor === "blue" ? (
            <button className={styles.button}>{buttonName}</button>
          ) : (
            <button className={styles.button__red}>{buttonName}</button>
          )
        ) : (
          <div className="link__container">
            <img src={linkCopy} alt="link_copy" onClick={toClipboard} />
            <img src={kakaochat} alt="kakao_chat" />
            <img src={metachat} alt="meta_chat" />
          </div>
        )}
      </div>
    </div>
  );
}
