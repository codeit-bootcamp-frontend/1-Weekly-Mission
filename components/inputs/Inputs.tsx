import { useState, ChangeEvent, FocusEvent } from "react";
import * as S from "./InputStyle";

export default function Input({ type = "text" }) {
  const defaultType = type;
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [inputType, setInputType] = useState(type);
  const [iconUrl, setIconUrl] = useState("/assets/eye-off.svg");

  /**
   * todo
   * input 컴포넌트, container 컴포넌트 분리
   * input - onChange 값을 저장
   * container - UI 요소 (text/pwd 분기 등)
   */

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    checkInputValidation(e.target.value);
  };

  const checkInputValidation = (value: string) => {
    if (!value) {
      setErrorMessage("내용을 작성해주세요,");
      return;
    }
    setErrorMessage("");
  };

  const handleChangeType = () => {
    if (inputType === "password") {
      setInputType("text");
      setIconUrl("/assets/eye-on.svg");
    } else {
      setInputType("password");
      setIconUrl("/assets/eye-off.svg");
    }
  };

  /** 추후 form 제출시 이벤트 */
  const handleFousOutInput = (e: FocusEvent<HTMLDivElement>) => {
    checkInputValidation(inputValue);
  };

  return (
    <S.Container onBlur={handleFousOutInput}>
      <S.InputWrapper>
        <S.Input
          type={inputType}
          value={inputValue}
          onChange={handleInputValue}
          placeholder="내용 입력"
          autoComplete="off"
        />
        {defaultType === "password" && (
          <S.EyeIcon src={iconUrl} alt="비밀번호 보기 아이콘" onClick={handleChangeType} />
        )}
      </S.InputWrapper>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
}
