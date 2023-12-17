import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";
import styled from "styled-components";

import useToggle from "@/hooks/useToggle";
import {
  ERROR_MESSAGE,
  INPUT_PLACEHOLDER,
  LABEL_TO_KOR,
  VALIDATION_TEXT,
} from "@/constants/validation";
import EyeOffImage from "@/public/images/eye-off.svg";
import EyeOnImage from "@/public/images/eye-on.svg";

interface InputProps {
  labelText: "email" | "password" | "passwordConfirm";
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const Input = ({ labelText, register, errors }: InputProps) => {
  const { isOn: isVisible, toggle: handleVisibility } = useToggle();

  return (
    <StyledInputOuterBox>
      <StyledLabel htmlFor={labelText}>{LABEL_TO_KOR[labelText]}</StyledLabel>
      <StyledInputInnerBox>
        <StyledInput
          id={labelText}
          placeholder={INPUT_PLACEHOLDER[labelText]}
          autoFocus={labelText === "email"}
          type={labelText === "email" || isVisible ? "text" : "password"}
          {...register(labelText, {
            required: ERROR_MESSAGE[labelText]["require"],
            pattern: {
              value: VALIDATION_TEXT[labelText],
              message: ERROR_MESSAGE[labelText]["message"],
            },
          })}
        />
        {LABEL_TO_KOR[labelText] !== "이메일" && (
          <StyledButton onClick={(e) => handleVisibility(e)} type="button">
            {isVisible ? (
              <EyeOnImage alt="비밀번호 숨기기 버튼" />
            ) : (
              <EyeOffImage alt="비밀번호 숨기기 버튼" />
            )}
          </StyledButton>
        )}
      </StyledInputInnerBox>
      {errors && (
        <ErrorText>{errors[labelText]?.message?.toString()}</ErrorText>
      )}
    </StyledInputOuterBox>
  );
};

export default Input;

const StyledInputOuterBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLabel = styled.label`
  color: var(--black);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledInputInnerBox = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  display: flex;
  width: 100%;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #373740;
  border: 1px solid #ccd5e3;
  margin: 12px 0 6px;
  &:focus {
    border-color: #6d6afe;
  }
  background-color: #fff;
`;

const StyledButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 55%;
  right: 0;
  translate: -50% -50%;
  border: none;
  background-color: transparent;
`;

const ErrorText = styled.h4`
  color: #ff5b56;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
