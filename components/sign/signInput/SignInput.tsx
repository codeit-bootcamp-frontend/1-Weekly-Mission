import eyeOff from "@/src/image/eye-off.svg";
import eyeOn from "@/src/image/eye-on.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import styled from "styled-components";

interface InputProps {
  label: string;
  inputType: string;
}

const SignInput = ({ label, inputType }: InputProps) => {
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [eyeToggle, setEyeToggle] = useState<string>(eyeOn);
  const [errorMessage, setErrorMessage] = useState("");
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    if (value === "") {
      setErrorMessage(inputType === "email" ? "이메일을 입력해주세요" : "비밀번호를 입력해주세요");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setValue(e.target.value);
    setErrorMessage("");
  };

  const handleEyeButtonClick = () => {
    setIsVisible(!isVisible);
    setEyeToggle((prev) => (prev === eyeOn ? eyeOff : eyeOn));

    const passwordInput = passwordRef.current;

    if (passwordInput === null) return;

    passwordInput.type = isVisible ? "password" : "text";
  };

  return (
    <InputBox>
      <Label>{label}</Label>
      <Input type={inputType === "email" ? "email" : "password"} ref={passwordRef} placeholder={label} value={value} onChange={handleInputChange} onBlur={handleBlur} $isError={errorMessage !== ""} />
      {inputType === "password" && <ToggleEyeButton src={eyeToggle} alt="눈 버튼" width={16} height={16} onClick={handleEyeButtonClick} />}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputBox>
  );
};

const InputBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Label = styled.label`
  color: var(--linkbrary-black);

  font-size: 1.4rem;
`;

const Input = styled.input<{ $isError: boolean }>`
  width: 100%;

  padding: 1.8rem 1.5rem;
  border-radius: 0.8rem;
  border: 1px solid var(--gray30);

  font-size: 1.6rem;
  line-height: 150%;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }

  ${({ $isError }) =>
    $isError &&
    `
    outline: none;
    border-color: var(--linkbrary-red);
  `}
`;

const ToggleEyeButton = styled(Image)`
  position: absolute;
  top: 5.2rem;
  right: 1.5rem;
  width: 1.6rem;
  height: 1.6rem;

  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: var(--linkbrary-red);
  font-size: 1.4rem;
`;

export default SignInput;
