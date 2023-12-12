// 현재 사용하지 않는 컴포넌트, 로그인/회원가입 input 리팩토링 후에도 필요없으면 삭제 예정

import { ChangeEvent } from "react";
import * as S from "./InputsStyles";

interface InputProps {
  inputType?: string;
  contentsType?: string;
  isErrorStyle: boolean;
  handleInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  inputType,
  contentsType,
  isErrorStyle,
  handleInputValue,
}: InputProps) {
  const visibleEyeIcon = inputType === "password";
  const IconPath = contentsType === "password" ? "off" : "on";

  return (
    <S.InputWrapper>
      <S.Input
        type={contentsType}
        onChange={handleInputValue}
        $isErrorStyle={isErrorStyle}
        placeholder="내용 입력"
        autoComplete="off"
      />
      {visibleEyeIcon && (
        <S.EyeIcon id="masking" src={`/assets/eye-${IconPath}.svg`} alt="비밀번호 마스킹표시" />
      )}
    </S.InputWrapper>
  );
}
