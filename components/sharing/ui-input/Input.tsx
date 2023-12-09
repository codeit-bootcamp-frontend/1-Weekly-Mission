import { ChangeEventHandler, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Input.module.scss";
import Image from "next/image";

const cx = classNames.bind(styles);

interface InputProps {
  label?: string;
  type: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  errorMessage?: string;
}

// Input 컴포넌트
export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder,
  errorMessage,
}) => {
  const [inputType, setInputType] = useState(type);

  const toggleEyeIcon = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const validateInput = (value: string) => {
    if (type === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    return true;
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const isValid = validateInput(event.target.value);
    if (!isValid) {
      onChange(event);
    }
  };

  return (
    <>
      {label && <label className={cx("input-label")}>{label}</label>}
      <div className={cx("input-wrapper")}>
        <input
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={cx("input", { "input-error": !!errorMessage })}
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
      {errorMessage && (
        <span className={cx("error-message")}>{errorMessage}</span>
      )}
    </>
  );
};
