import Image from "next/image";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import eyeOff from "src/assets/icons/eyeOff.svg";
import eyeOn from "src/assets/icons/eyeOn.svg";
import { EMAIL_STANDARD, PASSWORD_STANDARD } from "src/constants/auth";
import theme from "src/styles/Theme/theme";
import { FormValuesType } from "src/types/FormValue";
import styled from "styled-components";

interface RegisterType {
  register: UseFormRegister<FormValuesType>;
  isRequired: () => string;
  validation: (pattern: RegExp) => {
    value: RegExp;
    message: string;
  };
  isMinLength: (minLength: number) => { value: number; message: string };
}

interface Props extends RegisterType {
  type: InputTypes;
  id: string;
  placeholder?: string;
  isError?: boolean;
}

function Input({
  type,
  id,
  placeholder,
  isError = false,
  register,
  isRequired,
  validation,
  isMinLength,
}: Props) {
  const [eye, setEye] = useState<boolean>(false);

  return (
    <StyledWrapper $isError={isError}>
      <StyledInputWrapper>
        {type === "password" ? (
          <StyledInput
            id={id}
            placeholder={placeholder}
            type={eye ? "text" : "password"}
            {...register("password", {
              required: isRequired(),
              minLength: isMinLength(8),
              pattern: validation(PASSWORD_STANDARD),
            })}
          />
        ) : (
          <StyledInput
            id={id}
            placeholder={placeholder}
            type={type}
            {...register("email", {
              required: isRequired(),
              minLength: isMinLength(0),
              pattern: validation(EMAIL_STANDARD),
            })}
          />
        )}
        <StyledImgWrapper
          type={type}
          src={eye ? eyeOn : eyeOff}
          width={16}
          height={16}
          alt="눈"
          onClick={() => setEye(!eye)}
        />
      </StyledInputWrapper>
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
`;

const StyledErrorMessage = styled.p`
  color: ${theme.color.error};
  font-size: 12px;
  margin: 8px 0;
`;

const StyledWrapper = styled.div<{ $isError: boolean }>`
  display: flex;
  flex-direction: column;

  ${StyledInput} {
    border: 1px solid
      ${({ $isError }) =>
        $isError ? `${theme.color.error}` : `${theme.color.darkGray}`};

    &:focus {
      border-radius: 0.5rem;
      border: 1px solid blue;
    }
  }

  ${StyledErrorMessage} {
    display: ${({ $isError }) => ($isError ? "flex" : "none")};
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

const StyledImgWrapper = styled(Image)<{ type: string }>`
  position: absolute;
  display: ${({ type }) => (type !== "password" ? "none" : "flex")};
  right: 0;
  padding-right: 14px;
`;
