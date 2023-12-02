//페어프로그래밍
import { useState } from "react";
import styled from "styled-components";
import eyeOff from "Assets/eye-off.svg";
import eyeOn from "Assets/eye-on.svg";

export function PageInputLayout({
  type = "text",
  isError = false,
  errorMessage = "내용을 다시 작성해주세요",
}) {
  const [emailFocusIn, setEmailFocusIn] = useState(false);
  const [passwordFocusIn, setPasswordFocusIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <InputWrapper
        type={type}
        $focusIn={emailFocusIn}
        onFocus={() => setEmailFocusIn(true)}
        onBlur={() => setEmailFocusIn(false)}
        placeholder="내용 입력"
      />
      <InputContainer>
        <InputWrapper
          type={showPassword ? "text" : "password"}
          $focusIn={passwordFocusIn}
          onFocus={() => setPasswordFocusIn(true)}
          onBlur={() => setPasswordFocusIn(false)}
          placeholder="내용 입력"
          $isError={isError}
        />

        {showPassword ? (
          <EyeImage src={eyeOn.src} onClick={() => setShowPassword(false)} />
        ) : (
          <EyeImage src={eyeOff.src} onClick={() => setShowPassword(true)} />
        )}
        {isError && <InputError $isError={isError}>{errorMessage} </InputError>}
      </InputContainer>
    </>
  );
}

const InputWrapper = styled.input<any>`
  display: flex;
  width: 350px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  &:focus {
    outline: none;
  }

  border: 1px solid ${({ $focusIn }) => ($focusIn ? "#6D6AFE" : "#CCD5E3")};
  border-color: ${({ $isError }) => ($isError ? "#FF5B56" : "#CCD5E3")};

  background: #fff;
  color: black;
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

  position: relative;
  flex-direction: column;
`;

const InputError = styled.p<any>`
  display: flex;
  color: #ff5b56;
`;
