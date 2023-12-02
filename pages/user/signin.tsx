import AuthInput from "@/components/authInput/AuthInput";
import Button from "@/components/button/Button";
import { VALIDATE } from "@/constants/constants";
import AuthLayout from "@/layouts/authLayout/AuthLayout";
import { ErrorMessageType, InputValueType } from "@/types/type";
import getErrorMessage from "@/utils/getErrorMessage";
import Head from "next/head";
import React, { ChangeEvent, FocusEvent, FormEvent, useState } from "react";

const SignIn = () => {
  const [inputValue, setInputValue] = useState<InputValueType>({ userEmail: "", userPassword: "" });

  const [errorMsg, setErrorMsg] = useState<ErrorMessageType>({ userEmail: "", userPassword: "" });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const validateInput = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrorMsg((prev) => ({
      ...prev,
      [name]: getErrorMessage({ name, inputValue: inputValue[name], isValid: VALIDATE[name].test(value) }),
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrorMsg: ErrorMessageType = { ...errorMsg };

    let hasError = false;
    for (const name in inputValue) {
      const value = inputValue[name];
      const errorMessage = getErrorMessage({ name, inputValue: value, isValid: VALIDATE[name].test(value) });

      newErrorMsg[name] = errorMessage;

      if (errorMessage) hasError = true;
    }

    setErrorMsg(newErrorMsg);

    if (hasError) {
      return;
    }

    return;
  };

  return (
    <>
      <Head>
        <title>로그인 - Linkbrary</title>
      </Head>
      <AuthLayout handleSubmit={handleSubmit} mode="signin">
        <AuthInput
          label="이메일"
          type="email"
          name="userEmail"
          inputValue={inputValue.userEmail}
          setInputValue={handleChange}
          errorMsg={errorMsg.userEmail}
          validateInput={validateInput}
          autoComplete="username"
        />
        <AuthInput.PasswordInput
          label="비밀번호"
          name="userPassword"
          inputValue={inputValue.userPassword}
          setInputValue={handleChange}
          errorMsg={errorMsg.userPassword}
          validateInput={validateInput}
          autoComplete="current-password"
        />
        <AuthLayout.AuthButton>로그인</AuthLayout.AuthButton>
      </AuthLayout>
    </>
  );
};

export default SignIn;
