import { ChangeEvent, ElementType } from "react";
import * as S from "./InputStyle";

interface InputProps {
  contentsType?: string;
  tagType?: ElementType;
  inputValue: string;
  handleInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ contentsType, tagType, inputValue, handleInputValue }: InputProps) {
  const visibleEyeIcon = contentsType === "password";

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
      {visibleEyeIcon && <S.EyeIcon src="/assets/eye-off.svg" alt="비밀번호 마스킹표시" />}
    </S.InputWrapper>
  );
}
