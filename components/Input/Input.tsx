import { ChangeEvent, useState } from "react";
import Image from "next/image";
import classnames from "classnames";

import eyeOnIcon from "@/assets/images/eye-on.svg";
import eyeOffIcon from "@/assets/images/eye-off.svg";

import styles from "./Input.module.css";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps<TFormValues extends FieldValues> {
  label?: string;
  isPassword?: boolean;
  name?: string;
  register: UseFormRegister<TFormValues>;
  errors?: Record<string, any>;
  onValidate: (value: string) => void;
}

function Input({
  label,
  isPassword,
  name = "",
  register,
  errors,
  onValidate,
}: InputProps<FieldValues>) {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
      <div className={styles.container}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.inputWrapper}>
          <div className={styles.inputContainer}>
            <input
              type={type()}
              {...register(name, { onBlur: () => onValidate(value) })}
              className={
                errors?.[name]?.message
                  ? classnames(styles.input, styles.invalid)
                  : styles.input
              }
              value={value}
              placeholder="내용 입력"
              onChange={handleChange}
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
          {errors?.[name]?.message && (
            <p className={styles.invalidMessage}>{errors[name].message}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Input;
