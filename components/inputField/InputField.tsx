import * as S from "@/components/inputField/InputField.style";
import { useState } from "react";

interface InputFieldProps {
  modalTarget: string;
}

const InputField = ({ modalTarget }: InputFieldProps) => {
  const [value, setValue] = useState(modalTarget);
  return <S.Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="내용 입력" />;
};

export default InputField;
