import React from "react";
import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type InputProps = {
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

export const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cx("input")}
    />
  );
};
