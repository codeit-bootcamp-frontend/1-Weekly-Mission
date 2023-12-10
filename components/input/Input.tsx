import { ReactNode } from "react";
import { InputContainer } from "./inputStyled";

interface InputProps {
  icon?: ReactNode;
  placeholder: string;
  children?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  label: string;
}

const Input = ({
  icon,
  placeholder,
  children,
  setValue,
  value,
  label,
}: InputProps) => {
  return (
    <InputContainer>
      <label htmlFor={label}>{label}</label>

      {icon}

      <input
        className="inputContainer"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={label}
      />
      {children || <></>}
    </InputContainer>
  );
};
export default Input;
