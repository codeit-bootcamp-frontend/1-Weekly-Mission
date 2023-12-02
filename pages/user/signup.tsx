import AuthInput from "@/components/authInput/AuthInput";
import Button from "@/components/button/Button";
import { VALIDATE } from "@/constants/constants";
import AuthLayout from "@/layouts/authLayout/AuthLayout";
import { ErrorMessageType, InputValueType } from "@/types/type";
import getErrorMessage from "@/utils/getErrorMessage";
import Head from "next/head";
import React, { ChangeEvent, FocusEvent, FormEvent, useState } from "react";

const SignUp = () => {
  const [inputValue, setInputValue] = useState<InputValueType>({
    userEmail: "",
    userPassword: "",
    userPasswordCheck: "",
  });

  const [errorMsg, setErrorMsg] = useState<ErrorMessageType>({
    userEmail: "",
    userPassword: "",
    userPasswordCheck: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const validateInput = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const errorMessage =
      name !== "userPasswordCheck"
        ? getErrorMessage({ name, inputValue: inputValue[name], isValid: VALIDATE[name].test(value) })
        : getErrorMessage.notEqualPassword({
            passwordValue: inputValue["userPassword"],
            checkValue: inputValue["userPasswordCheck"],
          });
    setErrorMsg((prev) => ({
      ...prev,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrorMsg: ErrorMessageType = { ...errorMsg };

    let hasError = false;
    for (const name in inputValue) {
      const value = inputValue[name];
      const errorMessage =
        name !== "userPasswordCheck"
          ? getErrorMessage({ name, inputValue: inputValue[name], isValid: VALIDATE[name].test(value) })
          : getErrorMessage.notEqualPassword({
              passwordValue: inputValue["userPassword"],
              checkValue: inputValue["userPasswordCheck"],
            });

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
        <title>회원가입 - Linkbrary</title>
      </Head>
      <AuthLayout handleSubmit={handleSubmit} mode="signup">
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
          autoComplete="new-password"
        />
        <AuthInput.PasswordInput
          label="비밀번호 확인"
          name="userPasswordCheck"
          inputValue={inputValue.userPasswordCheck}
          setInputValue={handleChange}
          errorMsg={errorMsg.userPasswordCheck}
          validateInput={validateInput}
          autoComplete="new-password"
        />
        <AuthLayout.AuthButton>회원가입</AuthLayout.AuthButton>
      </AuthLayout>
    </>
  );
};

export default SignUp;
