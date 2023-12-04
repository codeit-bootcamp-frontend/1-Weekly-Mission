import { ChangeEvent, MouseEvent, useState } from "react";
import * as S from "./InputStyle";
import Input from "./Input";

interface InputFormProps {
  inputType?: string;
  label: string;
}

export default function InputForm({ inputType = "text", label }: InputFormProps) {
  const [inputValue, setInputValue] = useState("");
  const [contentsType, setContentsType] = useState(inputType);
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

  /** 비밀번호 마스킹 토글 */
  const toggleContentsType = (e: MouseEvent<HTMLDivElement>) => {
    const { id } = e.target as HTMLParagraphElement;
    if (id !== "masking") return;
    contentsType === "text" ? setContentsType("password") : setContentsType("text");
  };

  return (
    <S.Container onClick={toggleContentsType}>
      <label htmlFor={contentsType}>{label}</label>
      <Input
        inputType={inputType}
        contentsType={contentsType}
        tagType="input"
        inputValue={inputValue}
        handleInputValue={handleInputValue}
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
}
