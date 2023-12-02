import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Input.module.scss";
import Image from "next/image";

const cx = classNames.bind(styles);

interface InputProps {
  type: string;
  value?: string;
  onChange: any;
  placeholder: string;
  hasError?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder,
  hasError,
}) => {
  const [inputType, setInputType] = useState(type);

  const toggleEyeIcon = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <>
      <div className={cx("input-wrapper")}>
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cx("input", { "input-error": hasError })}
        />
        {type === "password" && (
          <span className={cx("icon-wrapper")} onClick={toggleEyeIcon}>
            <Image
              src={
                inputType === "password"
                  ? "/images/eye-off.svg"
                  : "/images/eye-on.svg"
              }
              alt={
                inputType === "password"
                  ? "비밀번호 숨김 상태"
                  : "비밀번호 표시 상태"
              }
              width={16}
              height={16}
            />
          </span>
        )}
      </div>
      {hasError && (
        <span className={cx("error-message")}>내용을 다시 작성해주세요</span>
      )}
    </>
  );
};
