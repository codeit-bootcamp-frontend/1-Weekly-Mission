import styles from "./SignInput.module.css";
import useEyesValue from "../../hooks/useEyesValue";
import InputBox from "../InputBox/InputBox";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorText: string;
  eyes: Boolean;
  id: string;
}

function SignInput({ id, name, type, value, label, errorText, onChange, onBlur, onFocus, eyes }: Props) {
  const { eyesValue, handleEyesClick, eyesStyle } = useEyesValue();

  if (eyesValue) {
    type = "text";
  }

  const inputBoxPropsConfig = {
    label,
    htmlFor: id,
    onBlur,
    onFocus,
    errorText,
  };

  const inputPropsConfig = {
    onChange,
    value,
    className: styles.input,
    id: id,
    name,
    type,
  };

  return (
    <InputBox {...inputBoxPropsConfig}>
      <input autoComplete="off" {...inputPropsConfig} />
      {eyes && <button className={eyesStyle} onClick={handleEyesClick} type="button"></button>}
    </InputBox>
  );
}

export default SignInput;
