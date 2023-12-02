import React, { MouseEvent, useState } from "react";
import * as S from "@/components/authInput/AuthInput.style";
import { AuthInputProps } from "@/types/type";

const AuthInput = ({
  label,
  type,
  name,
  inputValue,
  setInputValue,
  validateInput,
  errorMsg,
  autoComplete,
}: AuthInputProps) => {
  return (
    <S.InputWrap>
      <S.AuthLabel>{label}</S.AuthLabel>
      <S.InputInner>
        <S.AuthInput
          $isValid={!errorMsg}
          type={type}
          name={name}
          value={inputValue}
          onChange={setInputValue}
          onBlur={validateInput}
          autoComplete={autoComplete}
        />
      </S.InputInner>
      {errorMsg && <S.Warning>{errorMsg}</S.Warning>}
    </S.InputWrap>
  );
};

const PasswordInput = ({
  label,
  name,
  inputValue,
  setInputValue,
  validateInput,
  errorMsg,
  autoComplete,
}: AuthInputProps) => {
  const [inputType, setInputType] = useState("password");
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
          $isValid={!errorMsg}
          type={inputType}
          name={name}
          value={inputValue}
          onChange={setInputValue}
          onBlur={validateInput}
          autoComplete={autoComplete}
        />
        <S.EyeButton type="button" onClick={toggleShowPassword}>
          {showPassword ? <S.EyeOn /> : <S.EyeOff />}
        </S.EyeButton>
      </S.InputInner>
      {errorMsg && <S.Warning>{errorMsg}</S.Warning>}
    </S.InputWrap>
  );
};

AuthInput.PasswordInput = PasswordInput;

export default AuthInput;
