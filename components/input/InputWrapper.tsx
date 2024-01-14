import clsx from "clsx";
import styles from "./Input.module.css";
import { InputWrapperProps } from "@/types/client.type";

function InputWrapper({ title, htmlFor, className, errorText, children, onBlur, onFocus }: InputWrapperProps) {
  const wrapperStyle = clsx(
    styles.wrapper,
    htmlFor === "comment" && styles.commentWrapper,
    errorText && styles.errorBorder,
    className
  );

  return (
    <div className={styles.root}>
      {title && <p className={styles.title}>{title}</p>}
      <label className={wrapperStyle} onBlur={onBlur} onFocus={onFocus}>
        {children}
      </label>
      {errorText && <div className={styles.errorMessage}>{errorText}</div>}
    </div>
  );
}

export default InputWrapper;
