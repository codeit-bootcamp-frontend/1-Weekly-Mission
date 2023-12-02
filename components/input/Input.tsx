import React, { useRef, useState } from "react";
import styles from "./input.module.css";
import Image from "next/image";
import eyeOnIcon from "@/public/icons/eye-on.svg";
import eyeOffIcon from "@/public/icons/eye-off.svg";

interface InputProps {
  placeholder: string;
  inputType: string;
  errorMessage?: string;
}

function Input({
  placeholder,
  inputType = "default",
  errorMessage = "",
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const isDefaultInput = inputType === "default";

  const handleEyeButtonClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
    const passwordInput = passwordInputRef.current;
    if (passwordInput === null) return;
    if (!isPasswordVisible) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  return (
    <form className={styles.form}>
      <div className={`${styles.inputWrapper}`}>
        <input
          placeholder={placeholder}
          className={styles.input}
          type={isDefaultInput ? "text" : "password"}
          autoComplete="off"
          ref={passwordInputRef}
        />
        {isDefaultInput ? null : (
          <Image
            src={isPasswordVisible ? eyeOnIcon : eyeOffIcon}
            width={16}
            height={16}
            alt="eyeToggleIcon"
            className={styles.eyeIcon}
            onClick={handleEyeButtonClick}
          />
        )}
      </div>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </form>
  );
}

export default Input;
