import React, { useState, ChangeEvent } from "react";
import styles from "./Input.module.scss";
import { emailChecker } from "@/utils/checkReg";

export default function Input({
  id = "",
  label = "",
  type = "text",
}: {
  id: string;
  label: string;
  type: string;
}) {
  const defaultType = type;
  const [text, setText] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [inputType, setInputType] = useState(type);
  const [iconUrl, setIconUrl] = useState("/icons/eye-close.svg");

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    // 메모.
    // 비밀번호랑 비밀번호 확인의 값을 같이 비교하려면 결국 상위 컴포넌트(signinPage)에서
    // id, pw, pw-repeat 세 개의 state 값을 두고
    // 그 state 값을 input 컴포넌트에 내려주는 식으로 코드를 짜야 함.
    // 결국 또한 에러 메세지도 상위 컴포넌트에서 내려줘야 함.
    // 근데 어차피 세 개의 값을 상위 컴포넌트에서 받아야 값을 post로 서버에 보내든 말든 할테니
    // 일단 이 로직은 14주차에 짜는 걸로 하고 지금 당장은 안까먹게 메모만 해두장.

    const newText = e.target.value;
    setText(newText);
    if (!newText) setErrormsg("내용을 작성해주세요.");
    // 임시 코드.
    // 어차피 나중에 상위 컴포넌트 고치면서 emailchecker 코드도 옮겨야 함.
    if (id === "email" && !emailChecker(text)) {
      setErrormsg("이메일 형식이 잘못되었습니다.");
    } else {
      setErrormsg("");
    }
  };

  const handleChangeType = () => {
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
          data-status={errormsg ? "isError" : "isOk"}
          type={inputType}
          className={styles.input}
          value={text}
          onChange={handleText}
          onBlur={() => {
            if (!text) {
              setErrormsg("내용을 작성해주세요.");
            }
          }}
          placeholder="내용 입력"
        />
      </label>
      {errormsg && <p className={styles["error-msg"]}>{errormsg}</p>}
      {defaultType === "password" && (
        <img
          className={styles.icon}
          src={iconUrl}
          alt="비밀번호 보기 아이콘"
          onClick={handleChangeType}
        />
      )}
    </div>
  );
}
