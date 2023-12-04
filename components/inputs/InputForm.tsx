import { ChangeEvent, useState } from "react";
import * as S from "./InputStyle";
import Input from "./Input";

interface InputFormProps {
  contentsType?: string;
  label: string;
}

export default function InputForm({ contentsType = "text", label }: InputFormProps) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    checkInputValidation(e.target.value);
  };

  /** input value 검증 - 추후 검증 case 추가 */
  const checkInputValidation = (value: string) => {
    if (!value) {
      setErrorMessage("내용을 작성해주세요,");
      return;
    }
    setErrorMessage("");
  };

  return (
    <S.Container>
      <label htmlFor={contentsType}>{label}</label>
      <Input
        contentsType={contentsType}
        tagType="input"
        inputValue={inputValue}
        handleInputValue={handleInputValue}
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
}
