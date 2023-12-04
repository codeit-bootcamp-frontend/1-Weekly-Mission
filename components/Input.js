import { useState } from "react";
import styled from "styled-components";

import eyeOff from "../images/eye-off.svg";
import eyeOn from "../images/eye-on.svg";

// 에러 조건은 임시로 넣었습니다.

export function InputEmail() {
  const [emailFocusIn, setEmailFocusIn] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const displayEmailError = () => {
    setEmailFocusIn(false);
    if (emailInput.length < 8) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  const handleFocusEmailInput = () => {
    setEmailError(false);
    setEmailFocusIn(true);
  };

  return (
    <>
      <EmailInputWrapper
        type="email"
        value={emailInput}
        placeholder="내용 입력"
        $focusIn={emailFocusIn}
        $emailError={emailError}
        onFocus={handleFocusEmailInput}
        onBlur={displayEmailError}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      {emailError ? <ErrorM>내용을 다시 입력해주세요</ErrorM> : null}
    </>
  );
}

export function InputPW() {
  const [passwordFocusIn, setPasswordFocusIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const displayPasswordError = () => {
    setPasswordFocusIn(false);
    if (passwordInput.length < 8) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const handleFocusPasswordInput = () => {
    setPasswordError(false);
    setPasswordFocusIn(true);
  };

  return (
    <>
      <InputContainer>
        <PasswordInputWrapper
          type={showPassword ? "type" : "password"}
          value={passwordInput}
          placeholder="내용 입력"
          $focusIn={passwordFocusIn}
          onFocus={handleFocusPasswordInput}
          onBlur={displayPasswordError}
          onChange={(e) => setPasswordInput(e.target.value)}
          $passwordError={passwordError}
        />

        {showPassword ? (
          <EyeImage src={eyeOn} onClick={() => setShowPassword(false)} />
        ) : (
          <EyeImage src={eyeOff} onClick={() => setShowPassword(true)} />
        )}
      </InputContainer>
      {passwordError ? <ErrorM>내용을 다시 입력해주세요</ErrorM> : null}
    </>
  );
}

const EmailInputWrapper = styled.input`
  display: flex;
  width: 350px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  &:focus {
    outline: none;
  }

  border: 1px solid
    ${({ $focusIn, $emailError }) =>
      $emailError ? "#ff5b56" : $focusIn ? "#6D6AFE" : "#CCD5E3"};
  background: #fff;
`;

const PasswordInputWrapper = styled(EmailInputWrapper)`
  border: 1px solid
    ${({ $focusIn, $passwordError }) =>
      $passwordError ? "#ff5b56" : $focusIn ? "#6D6AFE" : "#CCD5E3"};
`;

const EyeImage = styled.img`
  position: absolute;
  top: 18px;
  right: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 350px;

  justify-content: center;
  align-items: center;
  position: relative;
`;

const ErrorM = styled.p`
  color: #ff5b56;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
