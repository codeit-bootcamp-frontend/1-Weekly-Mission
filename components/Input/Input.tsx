import clsx from "clsx";
import styles from "./Input.module.css";
import { InputHTMLAttributes, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
  htmlFor?: string;
  eyeButton: boolean;
  placeholder?: string;
}

function Input({ id, name, type, value, label, errorText, onBlur, onFocus, onChange, eyeButton, placeholder }: Props) {
  const [eyesValue, setEyesValue] = useState(false);

  function handleEyesClick() {
    setEyesValue((current) => !current);
  }

  if (eyesValue) {
    type = "text";
  }

  const inputConfig = {
    name,
    type,
    value,
    onChange,
    placeholder,
  };

  const eyesStyle = clsx(styles.eyes, eyesValue ? styles.eyesOn : styles.eyesOff);
  const borderControl = clsx(styles.container, errorText && styles.errorBorder);

  return (
    <div className={styles.root}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={borderControl} onBlur={onBlur} onFocus={onFocus}>
        <input autoComplete="off" className={styles.input} {...inputConfig} />
        {eyeButton && <button className={eyesStyle} onClick={handleEyesClick} type="button"></button>}
      </div>
      {errorText && <div className={styles.errorMessage}>{errorText}</div>}
    </div>
  );
}

export default Input;
