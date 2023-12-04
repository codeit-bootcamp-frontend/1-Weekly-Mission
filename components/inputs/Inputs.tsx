import { useState, ChangeEvent } from "react";
import * as S from "./InputStyle";

export default function Input({ type = "password" }) {
  const defaultType = type;
  const [text, setText] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [inputType, setInputType] = useState(type);
  const [iconUrl, setIconUrl] = useState("/assets/eye-off.svg");

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);
    if (!newText) setErrormsg("내용을 작성해주세요.");
    else {
      setErrormsg("");
    }
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

  return (
    <S.Container>
      <S.Input type={inputType} value={text} onChange={handleText} placeholder="내용 입력" />
      {defaultType === "password" && (
        <S.EyeIcon src={iconUrl} alt="비밀번호 보기 아이콘" onClick={handleChangeType} />
      )}
      {errormsg && <S.ErrorMessage>{errormsg}</S.ErrorMessage>}
    </S.Container>
  );
}
