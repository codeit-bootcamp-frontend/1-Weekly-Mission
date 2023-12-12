import { useState } from "react";
import style from "@/src/components/Sign/SignInput.module.css";
import Image from "next/image";
import EyeOffIcon from "@/src/assets/img/eye-off.svg";
import EyeOnIcon from "@/src/assets/img/eye-on.svg";
import clsx from "clsx";
import {
  FieldValues,
  Path,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";

interface SignInputProps {
  type: string;
  name: Path<FieldValues>;
  label: string;
  placeholder: string;
  rules: {};
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const SignInput = ({
  type,
  name,
  label,
  placeholder,
  rules,
  register,
  errors,
}: SignInputProps) => {
  const [pwdType, setPwdType] = useState<string>(type);
  const handlePwdEyeClick = () => {
    setPwdType(pwdType === "email" ? "password" : "email");
  };

  return (
    <div className={style.root}>
      <label className={style.label}>{label}</label>
      <div className={style.inputWrapper}>
        <input
          className={clsx(style.input, {
            [style.errorBox]: errors[name]?.message,
          })}
          placeholder={placeholder}
          {...register(name, { ...rules })}
          type={pwdType}
        />
        {type === "password" && (
          <Image
            src={pwdType === "password" ? EyeOffIcon : EyeOnIcon}
            alt="pwd eye"
            className={style.pwdEye}
            onClick={handlePwdEyeClick}
          />
        )}
      </div>
      {errors[name] && (
        <p className={style.errorMessage}>
          {errors?.[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default SignInput;
