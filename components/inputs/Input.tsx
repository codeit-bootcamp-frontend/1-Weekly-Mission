import { ChangeEvent, ElementType } from "react";
import * as S from "./InputStyle";

interface InputProps {
  inputType?: string;
  contentsType?: string;
  tagType?: ElementType;
  inputValue: string;
  handleInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  inputType,
  contentsType,
  tagType,
  inputValue,
  handleInputValue,
}: InputProps) {
  const visibleEyeIcon = inputType === "password";
  const IconPath = contentsType === "password" ? "off" : "on";

  return (
    <S.InputWrapper>
      <S.Input
        as={tagType}
        type={contentsType}
        value={inputValue}
        onChange={handleInputValue}
        placeholder="내용 입력"
        autoComplete="off"
      />
      {visibleEyeIcon && (
        <S.EyeIcon id="masking" src={`/assets/eye-${IconPath}.svg`} alt="비밀번호 마스킹표시" />
      )}
    </S.InputWrapper>
  );
}
