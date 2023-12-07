import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useMemo,
  useState,
} from "react";
import styles from "./PasswordInput.module.scss";
import classNames from "classnames/bind";
import { Input, InputProps } from "../ui-input";
import EyeOnIcon from "@/public/images/eye-on.svg";
import EyeOffIcon from "@/public/images/eye-off.svg";
import { useForm } from "react-hook-form";

const cx = classNames.bind(styles);

type PasswordInputProps = {
  hasEyeIcon?: boolean;
} & Omit<InputProps, "type">;

export const PasswordInput = ({
  name,
  hasEyeIcon = true,
  value,
  placeholder,
  hasError = false,
  helperText,
  onChange,
  onBlur,
}: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const inputType = useMemo(
    () => (isPasswordVisible ? "text" : "password"),
    [isPasswordVisible]
  );
  const EyeIcon = useMemo(
    () => (
      <button
        className={cx("button")}
        onClick={(e) => {
          e.preventDefault();
          setIsPasswordVisible(!isPasswordVisible);
        }}
      >
        {isPasswordVisible ? <EyeOnIcon /> : <EyeOffIcon />}
      </button>
    ),
    [isPasswordVisible]
  );

  return (
    <div className={cx("container")}>
      <Input
        value={value}
        name={name}
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
