import clsx from "clsx";
import styles from "./InputBox.module.css";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
  htmlFor?: string;
}

function InputBox({ children, label, htmlFor, onBlur, onFocus, errorText }: Props) {
  const borderControl = clsx(styles.container, errorText && styles.errorBorder);

  return (
    <div className={styles.root}>
      {label && (
        <label className={styles.label} htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <div className={borderControl} onBlur={onBlur} onFocus={onFocus}>
        {children}
      </div>
      {errorText && <div className={styles.errorMessage}>{errorText}</div>}
    </div>
  );
}

export default InputBox;
