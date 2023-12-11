import Image from "next/image";
import { ChangeEvent, useState } from "react";
import eyeOff from "/public/icon/eyes-off.svg";
import eyeOn from "/public/icon/eyes-on.svg";
import styled, { css } from "styled-components";

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;
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

const StyledImage = styled(Image)`
  border: none;
`;

const StyledButton = styled.button`
  position: absolute;
  right: 15px;
  border: none;
  background: none;
`;

const ErrorText = styled.h4`
  color: #ff5b56;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 6px;
`;

interface Props {
  password?: boolean;
  placeholder: string;
  isError?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  errorMessage?: string;
}

function Input({
  password,
  placeholder,
  value,
  onChange,
  errorMessage = "",
}: Props) {
  const [isVisible, setIsVisible] = useState(!password);
  const [isNoVal, setIsNoVal] = useState<boolean>(false);

  const handleVisibility = () => setIsVisible(!isVisible);

  const blurHandler = () =>
    value === "" ? setIsNoVal(true) : setIsNoVal(false);

  return (
    <>
      <Div>
        <InputTag
          placeholder={placeholder}
          isError={isNoVal || errorMessage !== ""}
          type={isVisible ? "text" : "password"}
          value={value}
          onBlur={blurHandler}
          onChange={onChange}
        />
        {password && (
          <StyledButton onClick={handleVisibility} type="button">
            <StyledImage
              src={isVisible ? eyeOn : eyeOff}
              width={16}
              height={16}
              alt="비밀번호 숨기기 버튼"
            />
          </StyledButton>
        )}
      </Div>
      {(isNoVal || errorMessage !== "") && (
        <ErrorText>
          {errorMessage ||
            (password ? "비밀번호를 입력해 주세요" : "이메일을 입력해 주세요.")}
        </ErrorText>
      )}
    </>
  );
}

export default Input;
