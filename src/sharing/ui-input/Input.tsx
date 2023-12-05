import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type InputProps = {
  value: string | number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input = ({ type = "text", value, onChange, placeholder }: InputProps) => {
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
