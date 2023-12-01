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

  // 비밀번호 가리기/보기 기능을 위한 함수
  const toggleInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <>
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        // className={cx("input", "hasError")
      />
      {type === "password" && (
        <span onClick={toggleInputType}>
          <Image
            src="/assets/images/eye-off.svg"
            alt="Toggle Password Visibility"
            width={16}
            height={16}
          />
        </span>
      )}

      {hasError && <span className={cx("error-message")}>에러 메시지</span>}
    </>
  );
};
