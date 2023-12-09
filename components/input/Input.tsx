import React, { ChangeEventHandler, FocusEventHandler } from "react";
import styles from "./Input.module.css";
import { UseFormProps, UseFormRegister } from "react-hook-form";
import { FormValues } from "../signupForm/SignupForm";

export interface InputProps {
  value?: string | number;
  placeholder?: string;
  inputName: "email" | "password" | "passwordConfirm";
  type?: string;
  hasError?: boolean;
  helperText?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  register?: UseFormRegister<FormValues>;
  rules?: any;
}

export function Input({
  value,
  placeholder,
  type,
  hasError,
  helperText,
  onChange,
  onBlur,
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
          onChange={onChange}
          onBlur={onBlur}
          {...(register && register(inputName, rules))}
        />
      </div>
      {hasError && <p className={styles.errorMessage}>{helperText}</p>}
    </>
  );
}
