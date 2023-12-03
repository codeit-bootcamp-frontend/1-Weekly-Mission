import React, { useState, ChangeEvent } from "react";
import styles from "./Input.module.scss";

export default function Input({ type = "text" }) {
  const defaultType = type;
  const [text, setText] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [inputType, setInputType] = useState(type);
  const [iconUrl, setIconUrl] = useState(
    "/assets/icons/password-invisible.svg"
  );
  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);
    if (!newText) setErrormsg("내용을 작성해주세요.");
    else {
      setErrormsg("");
    }
  };
  const handleChangeType = () => {
    if (inputType === "password") {
      setInputType("text");
      setIconUrl("/assets/icons/password-visible.svg");
    } else {
      setInputType("password");
      setIconUrl("/assets/icons/password-invisible.svg");
    }
  };
  return (
    <div className={styles.container}>
      <input
        type={inputType}
        className={styles.input}
        value={text}
        onChange={handleText}
        placeholder="내용 입력"
      />
      {defaultType === "password" && (
        <img
          className={styles.icon}
          src={iconUrl}
          alt="비밀번호 보기 아이콘"
          onClick={handleChangeType}
        />
      )}
      {errormsg && <p className={styles["error-msg"]}>{errormsg}</p>}
    </div>
  );
}
