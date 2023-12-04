import React, { useState } from "react";
import styles from "./input.module.css";
import Image from "next/image";
import eyeOffIcon from "@/public/img/svg/eye-off.svg";
import eyeOnIcon from "@/public/img/svg/eye-on.svg";

interface InputType {
  type: string;
}

const IdInput = ({ type }: InputType) => {
  const [isError, setIsError] = useState(false);
  const [changeEyeIcon, setChangeEyeIcon] = useState(false);
  const isEmpty = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setIsError(value ? false : true);
  };

  const onClick = () => {
    setChangeEyeIcon(!changeEyeIcon);
  };

  return (
    <div
      className={
        isError
          ? `${styles.Container} ${styles.emptyMessage}`
          : `${styles.Container}`
      }
    >
      <div className={styles.Wrap}>
        <input
          type={changeEyeIcon ? "text" : type}
          className={
            isError ? `${styles.input} ${styles.inputError}` : `${styles.input}`
          }
          placeholder={
            type === "text" ? "내용 입력" : "비밀번호를 입력해주세요"
          }
          onBlur={isEmpty}
        />
        {type === "text" ? null : (
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

export default IdInput;
