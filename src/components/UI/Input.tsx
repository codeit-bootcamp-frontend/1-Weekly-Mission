import styled, { css } from "styled-components";
import { useState } from "react";
import { IconEyeOff, IconEyeOn } from "@/public/assets";

interface Props {
  placeholder?: string;
  errorMessage?: string;
  type?: string;
  handleBlue?: (e: any) => void;
}

function Input({ placeholder, errorMessage, type: initialType = "text", handleBlue }: Props) {
  const [type, setType] = useState(initialType);
  const autoComplete = type === "email" ? type : undefined;

  const toggleShow = () => {
    setType((prevType) => {
      if (prevType === "text") {
        return "password";
      } else {
        return "text";
      }
    });
  };

  return (
    <Container>
      <S_Input
        placeholder={placeholder}
        required
        $error={Boolean(errorMessage)}
        type={type}
        autoComplete={autoComplete}
        onBlur={handleBlue}
      />
      {initialType === "password" && (
        <Toggle onClick={toggleShow}>
          {type === "password" && <IconEyeOff />}
          {type === "text" && <IconEyeOn />}
        </Toggle>
      )}
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
}

export default Input;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.4rem; */
  position: relative;
`;

export const S_Input = styled.input<{ $error: boolean }>`
  width: 100%;
  padding: 1.8rem 1.5rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray20);
  background: var(--white);
  outline: none;
  font-size: 1.6rem;
  color: var(--gray100);
  &:placeholder {
    color: var(--gray60);
  }
  &:focus {
    ${({ $error }) =>
      !$error &&
      css`
        border-color: var(--primary);
      `}
  }
  ${({ $error }) =>
    $error &&
    css`
      border-color: var(--red);
    `}
`;

export const ErrorMessage = styled.div`
  height: 1.7rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--red);
`;

export const Toggle = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 2rem;
`;
