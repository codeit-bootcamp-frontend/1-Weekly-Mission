import { useState } from "react";
import { SigninLayout } from "@/components/page-layout/SigninLayout/SigninLayout";
import { Input } from "@/components/sharing/ui-input";

interface InputProps {
  label?: string;
  type: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  errorMessage?: string;
}

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("올바른 이메일 주소가 아닙니다.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (emailError) {
      validateEmail(event.target.value);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (passwordError) {
      validatePassword(event.target.value);
    }
  };

  const handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    validateEmail(email);
  };

  const handlePasswordBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    validatePassword(password);
  };

  return (
    <>
      <SigninLayout
        idInput={
          <Input
            label="이메일"
            type="text"
            value={email}
            placeholder="이메일을 입력해주세요."
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            errorMessage={emailError}
          />
        }
        pwInput={
          <Input
            label="비밀번호"
            type="password"
            value={password}
            placeholder="비밀번호를 입력해주세요."
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            errorMessage={passwordError}
          />
        }
      />
    </>
  );
};

export default SigninPage;
