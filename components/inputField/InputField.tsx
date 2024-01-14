import * as S from "@/components/inputField/InputField.style";

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const InputField = ({ value, onChange }: InputFieldProps) => {
  return <S.Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="내용 입력" />;
};
export default InputField;
