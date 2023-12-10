import { ChangeEventHandler, HTMLInputTypeAttribute, useMemo, useState } from "react";
import styles from "./PasswordInput.module.scss";
import classNames from "classnames/bind";
import { Input, InputProps } from "../ui-input";
import EyeOnIcon from "./eye-on.svg";
import EyeOffIcon from "./eye-off.svg";

const cx = classNames.bind(styles);

type PasswordInputProps = {
  hasEyeIcon?: boolean;
} & Omit<InputProps, "type">;

export const PasswordInput = ({
  hasEyeIcon = false,
  value,
  placeholder,
  hasError = false,
  helperText,
  onChange,
  onBlur,
}: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const inputType = useMemo(() => (isPasswordVisible ? "text" : "password"), [isPasswordVisible]);
  const EyeIcon = useMemo(
    () => (
      <button className={cx("button")} onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
        {isPasswordVisible ? <EyeOnIcon /> : <EyeOffIcon />}
      </button>
    ),
    [isPasswordVisible]
  );

  return (
    <div className={cx("container")}>
      <Input
        value={value}
        placeholder={placeholder}
        type={inputType}
        hasError={hasError}
        helperText={helperText}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasEyeIcon && EyeIcon}
    </div>
  );
};
