/*Input 컴포넌트
  signin, signup 페이지에서 쓰이는 input 컴포넌트.

  id: input 태그의 id
  label: input 태그와 연결될 label
  type: text와 password 둘 중 하나를 받는 값.
  placeholder: input 태그의 placeholder에 들어갈 값
  onChange: input 태그에 키보드 이벤트 발생 시 실행될 함수
  value: input 태그의 value 값
  hasError: 이 값이 true라면 input 태그의 스타일을 error style로 정한다
  errorMsg: hasError일 경우 input 태그 아래에 errorMsg를 띄운다
*/

import React, { useState } from "react";
import styles from "./Input.module.scss";

type inputType = "text" | "password";
type eyeIconUrl = "/icons/eye-close.svg" | "/icons/eye-open.svg";

export default function Input({
  id = "",
  label = "",
  type = "text",
  placeholder = "",
  onChange,
  value,
  hasError = false,
  errorMsg = "",
}: {
  id: string;
  label: string;
  type: inputType;
  placeholder?: string;
  onChange?: any;
  value: string;
  hasError: boolean;
  errorMsg?: string;
}) {
  const defaultType = type;
  const [inputType, setInputType] = useState(type);
  const [iconUrl, setIconUrl] = useState<eyeIconUrl>("/icons/eye-close.svg");

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
          onChange={onChange}
          onBlur={onChange}
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
