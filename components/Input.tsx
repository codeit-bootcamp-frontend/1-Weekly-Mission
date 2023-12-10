import styled from "styled-components";
import Image from "next/image";
import React, { MouseEvent, forwardRef, useState } from "react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import EyeOff from "../images/eye-off.svg";
import EyeOn from "../images/eye-on.svg";

interface SignInputProps<TFormValues extends FieldValues> {
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors: Partial<DeepMap<TFormValues, FieldError>>;
}

export const InputEmail = forwardRef<
  HTMLInputElement,
  SignInputProps<FieldValues>
>((props, ref) => {
  const [isFocus, setIsFocus] = useState(false);
  const {
    label,
    type,
    placeholder,
    autoComplete,
    errors,
    onBlur,
    ...EmailProps
  } = props;
  console.log(props);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = (boolean: boolean) => {
    setIsFocus(boolean);
  };
  return (
    <InputContainer>
      <LabelContent>{label}</LabelContent>
      <SignInput
        ref={ref}
        type={type}
        placeholder={placeholder}
        onBlur={(e) => {
          onBlur(e);
          handleBlur(false);
        }}
        onFocus={handleFocus}
        {...EmailProps}
        $isFocus={isFocus}
        $isError={errors[EmailProps.name]}
        autoComplete={autoComplete}
      />
      {errors[EmailProps.name] && (
        <ErrorM>{errors[EmailProps.name].message}</ErrorM>
      )}
    </InputContainer>
  );
});

interface PasswordProps<TFormValues extends FieldValues>
  extends SignInputProps<TFormValues> {
  type: "password";
}

export const InputPW = forwardRef<HTMLInputElement, PasswordProps<FieldValues>>(
  (props, ref) => {
    const [isFocus, setIsFocus] = useState(false);
    const [displayPassword, setDisplayPassword] = useState(false);

    const handleFocus = () => {
      setIsFocus(true);
    };

    const handleBlur = (boolean: boolean) => {
      setIsFocus(boolean);
    };
    const toggleShowPassword = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setDisplayPassword((prev) => !prev);
    };
    const {
      label,
      type,
      placeholder,
      autoComplete,
      errors,
      onBlur,
      ...inputProps
    } = props;

    const passwordType = displayPassword ? "text" : "password";

    return (
      <InputContainer>
        <LabelContent>{label}</LabelContent>
        <SignInputWrapper>
          <SignInput
            type={passwordType}
            ref={ref}
            onBlur={(e) => {
              onBlur(e);
              handleBlur(false);
            }}
            onFocus={handleFocus}
            $isFocus={isFocus}
            placeholder={placeholder}
            {...inputProps}
            $isError={errors[inputProps.name]}
            autoComplete={autoComplete}
          />
          <EyeToggleButton type="button" onClick={toggleShowPassword}>
            <Image
              src={displayPassword ? EyeOn : EyeOff}
              width={16}
              height={16}
              alt="비밀번호 토글 버튼"
            />
          </EyeToggleButton>
        </SignInputWrapper>
        {errors[inputProps.name] && (
          <ErrorM>{errors[inputProps.name].message}</ErrorM>
        )}
      </InputContainer>
    );
  }
);

const SignInputWrapper = styled.div`
  position: relative;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SignInput = styled.input<{ $isError: boolean; $isFocus: boolean }>`
  &:focus {
    outline: none;
  }
  border-color: ${({ $isFocus, $isError }) =>
    $isFocus ? "#6D6AFE" : $isError ? "#FF5B56" : "#CCD5E3"};
  background: #fff;
  width: 100%;
  height: 62px;
  padding: 15px 18px;
  border-radius: 8px;
  gap: 4px;
`;

const LabelContent = styled.label`
  color: #000;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: max-content;
`;

const ErrorM = styled.p`
  color: #ff5b56;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const EyeToggleButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 21px;
  right: 20px;
`;
