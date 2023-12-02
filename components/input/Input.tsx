import React, { useRef, useState } from "react";
import styles from "./input.module.css";
import Image from "next/image";
import eyeOnIcon from "@/public/icons/eye-on.svg";
import eyeOffIcon from "@/public/icons/eye-off.svg";

export function Input() {
  return (
    <form>
      <input placeholder="ID" className={styles.input} />
    </form>
  );
}

export function PasswordInput() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);

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
      <div className={styles.inputWrapper}>
        <input
          placeholder="Password"
          className={styles.input}
          type="password"
          autoComplete="off"
          ref={passwordInputRef}
        />
        <Image
          src={isPasswordVisible ? eyeOnIcon : eyeOffIcon}
          width={16}
          height={16}
          alt="eyeToggleIcon"
          className={styles.eyeIcon}
          onClick={handleEyeButtonClick}
        />
      </div>
    </form>
  );
}
