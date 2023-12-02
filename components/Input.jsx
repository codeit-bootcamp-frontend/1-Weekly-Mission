import { useState } from "react";
import styled from "styled-components";
import eyeOff from "/public/eye-off.svg";
import eyeOn from "/public/eye-on.svg";

function Input({
  type = "password",
  isError = true,
  errorMessage = "내용을 다시 작성해주세요",
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState(type);

  return (
    <>
      <InputContainer>
        <InputWrapper
          type={type === "password" ? passwordType : type}
          placeholder="내용 입력"
          $isError={isError}
        />
        {showPassword ? (
          <EyeImage
            src={eyeOn.src}
            onClick={() => {
              setShowPassword(false);
              setPasswordType("password");
            }}
            $show={type === "password"}
          />
        ) : (
          <EyeImage
            src={eyeOff.src}
            onClick={() => {
              setShowPassword(true);
              setPasswordType("text");
            }}
            $show={type === "password"}
          />
        )}
        {isError && <InputError $isError={isError}>{errorMessage} </InputError>}
      </InputContainer>
    </>
  );
}

const InputWrapper = styled.input`
  display: flex;
  width: 350px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  border: 1px solid #ccd5e3;
  border-color: ${({ $isError }) => ($isError ? "#FF5B56" : "#CCD5E3")};

  &:focus {
    outline: none;
    border-color: #6d6afe;
  }

  background: #fff;
  color: black;
`;
const EyeImage = styled.img`
  position: absolute;
  top: 18px;
  right: 15px;
  display: ${({ $show }) => ($show ? "" : "none")};
`;
const InputContainer = styled.div`
  display: flex;
  width: 350px;
  justify-content: center;

  position: relative;
  flex-direction: column;
`;

const InputError = styled.p`
  display: flex;
  color: #ff5b56;
  font-size: 14px;
`;

export default Input;
