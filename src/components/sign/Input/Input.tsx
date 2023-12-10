import React, { useState, ChangeEvent } from "react";
import styles from "./Input.module.scss";

type inputType = "text" | "password";
type eyeIconUrl = "/icons/eye-close.svg" | "/icons/eye-open.svg";

export default function Input({
  id = "",
  label = "",
  type = "text",
  placeholder = "내용을 입력해주세요.",
}: {
  id: string;
  label: string;
  type: inputType;
  placeholder?: string;
}) {
  const defaultType = type;
  const [text, setText] = useState("");
  const [inputType, setInputType] = useState(type);
  const [iconUrl, setIconUrl] = useState<eyeIconUrl>("/icons/eye-close.svg");

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);
  };

  const handleChangeInputType = () => {
    if (inputType === "password") {
      setInputType("text");
      setIconUrl("/icons/eye-open.svg");
    } else {
      setInputType("password");
      setIconUrl("/icons/eye-close.svg");
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id}>
        {label}
        <input
          id={id}
          // data-status={errormsg ? "isError" : "isOk"}
          type={inputType}
          className={styles.input}
          placeholder={placeholder}
          value={text}
          onChange={handleText}
        />
      </label>
      {defaultType === "password" && (
        <img
          className={styles.icon}
          src={iconUrl}
          alt="비밀번호 보기 아이콘"
          onClick={handleChangeInputType}
        />
      )}
    </div>
  );
}
