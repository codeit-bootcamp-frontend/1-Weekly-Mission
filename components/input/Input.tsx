import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormValues } from "../signupForm/SignupForm";

export interface InputProps {
  value?: string | number;
  placeholder?: string;
  inputName: "email" | "password" | "passwordConfirm";
  type?: "text" | "password";
  hasError?: boolean;
  helperText?: string;
  register?: UseFormRegister<FormValues>;
  rules?: RegisterOptions<FieldValues>;
}

export function Input({
  value,
  placeholder,
  type,
  hasError,
  helperText,
  register,
  inputName,
  rules,
}: InputProps) {
  return (
    <>
      <div className={`${styles.inputWrapper}`}>
        <input
          placeholder={placeholder}
          className={styles.input}
          type={type}
          autoComplete="off"
          value={value}
          {...(register && register(inputName, rules))}
        />
      </div>
      {hasError && <p className={styles.errorMessage}>{helperText}</p>}
    </>
  );
}
