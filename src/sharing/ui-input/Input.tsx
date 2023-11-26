import styles from "./Input.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

interface InputProps {
  type?: string;
  value?: string;
  onChange: (() => void) | undefined;
  placeholder?: string;
}

export const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
}: InputProps) => {
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
