import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  ReactNode,
} from "react";
import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type InputProps = {
  name: any;
  value?: string | number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  hasError?: boolean;
  ref?: any;
  helperText?: boolean | string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

export const Input = ({
  name,
  value,
  placeholder,
  type = "text",
  hasError = false,
  helperText,
  onChange,
  onBlur,
}: InputProps) => {
  return (
    <div className={cx("container")}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={cx("input", { error: hasError })}
      />
      {helperText && (
        <p className={cx("helper-text", { error: hasError })}>{helperText}</p>
      )}
    </div>
  );
};
