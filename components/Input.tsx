import React, { useState } from "react";
import styles from "./input.module.css";
import Image from "next/image";
import eyeOffIcon from "@/public/img/svg/eye-off.svg";
import eyeOnIcon from "@/public/img/svg/eye-on.svg";
import { emailErrorMessage, pwErrorMessage } from "@/utils/errorMessage";

interface InputType {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reCheck: string;
  setReCheck: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ type, onChange, reCheck, setReCheck }: InputType) => {
  const [changeEyeIcon, setChangeEyeIcon] = useState<boolean>(false);
  const [errorState, setErrorState] = useState<string>("");

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      setErrorState(emailErrorMessage(value));
    } else if (name === "password") {
      setErrorState(pwErrorMessage(value));
    }
    setReCheck("");
  };

  const onClick = () => {
    setChangeEyeIcon(!changeEyeIcon);
  };

  return (
    <div
      className={
        errorState || reCheck
          ? `${styles.Container} ${type}Box ${errorState} ${reCheck}`
          : `${styles.Container} ${type}Box`
      }
    >
      <div className={styles.Wrap}>
        <input
          className={
            errorState || reCheck
              ? `${styles.input}  ${styles.inputError}`
              : `${styles.input}`
          }
          type={changeEyeIcon || type === "email" ? "text" : "password"}
          name={type}
          placeholder={type === "email" ? "이메일" : "비밀번호"}
          autoComplete="off"
          onChange={onChange}
          onBlur={onFocus}
        />
        {type === "email" ? null : (
          <Image
            className={styles.eyeIcon}
            src={changeEyeIcon ? eyeOnIcon : eyeOffIcon}
            alt="눈아이콘"
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
