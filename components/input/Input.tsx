import React, { ChangeEventHandler, FocusEventHandler } from "react";
import styles from "./Input.module.css";

export interface InputProps {
  value?: string | number;
  placeholder?: string;
  inputName?: string;
  type?: string;
  hasError?: boolean;
  helperText?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

export function Input({
  value,
  placeholder,
  type,
  hasError,
  helperText,
  onChange,
  onBlur,
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
        />
        {hasError && <p className={styles.errorMessage}>{helperText}</p>}
      </div>
    </>
  );
}
