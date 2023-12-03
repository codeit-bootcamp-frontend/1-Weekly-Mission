import Image from "next/image";
import { useState } from "react";
import eyeOff from "src/assets/icons/eyeOff.svg";
import eyeOn from "src/assets/icons/eyeOn.svg";
import theme from "src/styles/Theme/theme";
import styled from "styled-components";

interface Props {
  label: LabelTypes;
  type: string;
  error: boolean;
  errorMessage?: string;
}

function Input({ label, type, error, errorMessage }: Props) {
  const [eye, setEye] = useState<boolean>(false);

  const handleBlur = () => {
    console.log("focus out하면 실행할 함수");
  };

  return (
    <StyledWrapper error={error}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInputWrapper>
        {type === "password" ? (
          <StyledInput
            placeholder="내용 입력"
            type={eye ? "text" : "password"}
            onBlur={handleBlur}
          />
        ) : (
          <StyledInput
            placeholder="내용 입력"
            type="text"
            onBlur={handleBlur}
          />
        )}
        <StyledImgWrapper
          src={eye ? eyeOn : eyeOff}
          width={16}
          height={16}
          alt="눈"
          type={type}
          onClick={() => setEye(!eye)}
        />
      </StyledInputWrapper>

      <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
    </StyledWrapper>
  );
}

export default Input;

const StyledInput = styled.input`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 19px 14px;
  border-radius: 8px;
  background-color: ${theme.color.white};

  &:focus {
    border-radius: 0.5rem;
    border: 1px solid blue;
  }
`;

const StyledErrorMessage = styled.p`
  color: ${theme.color.error};
  font-size: 12px;
  margin: 8px 0;
`;

const StyledWrapper = styled.div<{ error: boolean }>`
  display: flex;
  flex-direction: column;

  ${StyledInput} {
    border: 1px solid
      ${({ error }) =>
        error ? `${theme.color.error}` : `${theme.color.darkGray}`};

    &:focus {
      border-radius: 0.5rem;
      border: 1px solid blue;
    }
  }

  ${StyledErrorMessage} {
    display: ${({ error }) => (error ? "flex" : "none")};
  }
`;

const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
`;

const StyledLabel = styled.label`
  font-size: 13px;
  margin: 10px 0;
`;

const StyledImgWrapper = styled(Image)<{ type: string }>`
  position: absolute;
  display: ${({ type }) => (type === "text" ? "none" : "flex")};
  right: 0;
  padding-right: 14px;
`;
