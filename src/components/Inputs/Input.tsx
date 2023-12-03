import Image from "next/image";
import { ChangeEvent, useState } from "react";
import eyeOff from "/public/icon/eyes-off.svg";
import eyeOn from "/public/icon/eyes-on.svg";
import styled, { css } from "styled-components";

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 350px;
`;

const InputTag = styled.input<{ isError: boolean }>`
  display: flex;
  width: 100%;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #373740;
  border: 1px solid #ccd5e3;
  &:focus {
    border-color: #6d6afe;
  }

  ${({ isError }) =>
    isError &&
    css`
      border-color: #ff5b56;

      &:focus {
        border-color: #ff5b56;
      }
    `}
`;

const ErrorText = styled.h4`
  color: #ff5b56;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 6px;
`;

const StyledImage = styled(Image)``;

const StyledButton = styled.button`
  position: absolute;
  right: 15px;
`;

function Input() {
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("");

  const handleVisibility = () => setIsVisible(!isVisible);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    setValue(e.target.value);
  };

  function blurHandler() {
    if (value === "") {
      setIsError(true);
    }
  }

  return (
    <>
      <Div>
        <InputTag
          placeholder="내용 입력"
          isError={isError}
          type={isVisible ? "text" : "password"}
          value={value}
          onChange={handleChange}
          onBlur={blurHandler}
        />
        <StyledButton onClick={handleVisibility}>
          <StyledImage
            src={isVisible ? eyeOn : eyeOff}
            width={16}
            height={16}
            alt="비밀번호 숨기기 버튼"
          />
        </StyledButton>
      </Div>
      {isError && <ErrorText>내용을 다시 작성해주세요</ErrorText>}
    </>
  );
}

export default Input;
