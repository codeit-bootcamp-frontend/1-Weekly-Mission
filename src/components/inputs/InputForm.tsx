// 현재 사용하지 않는 컴포넌트, 로그인/회원가입 input 리팩토링 후에도 필요없으면 삭제 예정

import { ChangeEvent, MouseEvent, useState } from "react";
import * as S from "./InputsStyles";
import Input from "./Input";

interface InputFormProps {
  inputType?: string;
  label: string;
}

export default function InputForm({ inputType = "text", label }: InputFormProps) {
  const [inputValue, setInputValue] = useState("");
  const [contentsType, setContentsType] = useState(inputType);
  const [isErrorStyle, setIsErrorStyle] = useState(false);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    checkInputValidation(e.target.value);
  };

  /** input value 검증 - 추후 검증 case 추가 */
  const checkInputValidation = (value: string) => {
    if (!value) {
      setIsErrorStyle(true);
      return;
    }
    setIsErrorStyle(false);
  };

  /** 비밀번호 마스킹 토글 */
  const toggleContentsType = (e: MouseEvent<HTMLDivElement>) => {
    const { id } = e.target as HTMLParagraphElement;
    if (id !== "masking") return;
    contentsType === "text" ? setContentsType("password") : setContentsType("text");
  };

  return (
    <S.Container onClick={toggleContentsType}>
      <label htmlFor={inputType}>{label}</label>
      <Input
        inputType={inputType}
        contentsType={contentsType}
        isErrorStyle={isErrorStyle}
        handleInputValue={handleInputValue}
      />
      {isErrorStyle && <S.ErrorMessage>내용을 입력해주세요</S.ErrorMessage>}
    </S.Container>
  );
}
