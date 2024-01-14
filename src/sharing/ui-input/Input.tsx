import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  forwardRef,
  useState,
} from "react";
import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type InputProps = {
  value: string | number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  hasError?: boolean;
  helperText?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  initialValue?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      placeholder,
      type = "text",
      hasError = false,
      helperText,
      onChange,
      onBlur,
      initialValue,
    },
    ref
  ) => {
    Input.displayName = "Input";
    return (
      <div className={cx("container")}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={cx("input", { error: hasError })}
        />
        {helperText && (
          <p className={cx("helper-text", { error: hasError })}>{helperText}</p>
        )}
      </div>
    );
  }
);
