import styles from "./Input.module.css";
import { ChangeEvent, useState } from "react";
import classnames from "classnames";
import eyeOnIcon from "@/assets/images/eye-on.svg";
import eyeOffIcon from "@/assets/images/eye-off.svg";
import Image from "next/image";

interface InputProps {
  isPassword?: boolean;
  invalidText?: string;
  onBlur?: () => void;
}

function Input({ isPassword, invalidText, onBlur }: InputProps) {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const type = () => {
    if (isPassword) {
      if (showPassword) {
        return "";
      }
      return "password";
    }
    return "";
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          type={type()}
          className={
            invalidText
              ? classnames(styles.input, styles.invalid)
              : styles.input
          }
          value={value}
          placeholder="내용 입력"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {isPassword && (
          <Image
            src={showPassword ? eyeOffIcon : eyeOnIcon}
            alt={showPassword ? "Hide" : "Show"}
            className={styles.passwordIcon}
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
      {invalidText ? (
        <p className={styles.invalidMessage}>{invalidText}</p>
      ) : null}
    </>
  );
}

export default Input;
