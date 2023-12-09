import React, { useMemo, useState } from "react";
import styles from "./PasswordInput.module.css";
import eyeOnIcon from "@/public/icons/eye-on.svg";
import eyeOffIcon from "@/public/icons/eye-off.svg";
import { Input } from "../input/Input";
import { InputProps } from "../input/Input";
import Image from "next/image";

type PasswordInputProps = {
  hasEyeIcon?: boolean;
} & Omit<InputProps, "type">;

function PasswordInput({
  value,
  placeholder,
  hasError = false,
  helperText,
  onChange,
  onBlur,
  hasEyeIcon = false,
}: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = useMemo(
    () => (isPasswordVisible ? "text" : "password"),
    [isPasswordVisible]
  );

  return (
    <div className={styles.container}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={inputType}
      />
      <button
        type="button"
        className={styles.eyeIcon}
        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        {isPasswordVisible ? (
          <Image src={eyeOnIcon} alt="비밀번호 보이기 아이콘" />
        ) : (
          <Image src={eyeOffIcon} alt="비밀번호 감추기 아이콘" />
        )}
      </button>
    </div>
  );
}

export default PasswordInput;
