import * as S from "@/components/authInput/AuthInput.style";
import { MouseEvent, forwardRef, useState } from "react";
import { DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

interface AuthInputProps<TFormValues extends FieldValues> {
  label: string;
  type: string;
  placeholder: string;
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors: Partial<DeepMap<TFormValues, FieldError>>;
}

interface AuthPasswordInputProps<TFormValues extends FieldValues> extends AuthInputProps<TFormValues> {
  type: "text" | "password";
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps<FieldValues>>((props, ref) => {
  const { label, type, placeholder, errors, ...inputProps } = props;
  return (
    <S.InputWrap>
      <S.AuthLabel>{label}</S.AuthLabel>
      <S.InputInner>
        <S.AuthInput
          ref={ref}
          type={type}
          placeholder={placeholder}
          {...inputProps}
          $isValid={!errors[inputProps.name]}
        />
      </S.InputInner>
      {errors[inputProps.name] && <S.Warning>{errors[inputProps.name].message}</S.Warning>}
    </S.InputWrap>
  );
});
AuthInput.displayName = "AuthInput";

const PasswordInput = forwardRef<HTMLInputElement, AuthPasswordInputProps<FieldValues>>((props, ref) => {
  const { label, type, placeholder, errors, ...inputProps } = props;
  const [inputType, setInputType] = useState(type);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => {
      const nextType = prev ? "password" : "text";
      setInputType(nextType);
      return !prev;
    });
  };
  return (
    <S.InputWrap>
      <S.AuthLabel>{label}</S.AuthLabel>
      <S.InputInner>
        <S.AuthInput
          type={inputType}
          ref={ref}
          placeholder={placeholder}
          {...inputProps}
          $isValid={!errors[inputProps.name]}
        />
        <S.EyeButton type="button" onClick={toggleShowPassword}>
          {showPassword ? <S.EyeOn /> : <S.EyeOff />}
        </S.EyeButton>
      </S.InputInner>
      {errors[inputProps.name] && <S.Warning>{errors[inputProps.name].message}</S.Warning>}
    </S.InputWrap>
  );
});
PasswordInput.displayName = "PasswordInput";

const AuthInputs = {
  AuthInput: AuthInput,
  PasswordInput: PasswordInput,
};

export default AuthInputs;
