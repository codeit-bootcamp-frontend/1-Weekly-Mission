import React, { useState, ChangeEvent } from "react";
import styles from "./Input.module.scss";

type inputType = "text" | "password";
type eyeIconUrl = "/icons/eye-close.svg" | "/icons/eye-open.svg";

export default function Input({
  id = "",
  label = "",
  type = "text",
  placeholder = "내용을 입력해주세요.",
  onChange,
  onBlur,
  value,
  hasError = false,
  errorMsg = "잘못되었습니다!",
}: {
  id: string;
  label: string;
  type: inputType;
  placeholder?: string;
  onChange?: any;
  onBlur?: any;
  value: string;
  hasError: boolean;
  errorMsg?: string;
}) {
  const defaultType = type;
  const [inputType, setInputType] = useState(type);
  const [iconUrl, setIconUrl] = useState<eyeIconUrl>("/icons/eye-close.svg");

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    onChange(newText);
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
          data-status={hasError ? "isError" : "isOk"}
          type={inputType}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={handleText}
          onBlur={onBlur}
        />
      </label>
      {hasError && <div className={styles["error-msg"]}>{errorMsg}</div>}
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
