import eyeOff from "@/src/image/eye-off.svg";
import eyeOn from "@/src/image/eye-on.svg";
import { isValidEmail, isValidPassword } from "@/utils/validateInput";
import Image from "next/image";
import { useRef, useState } from "react";
import styled from "styled-components";

interface InputProps {
  label: string;
  type: "email" | "password" | "confirmPassword";
  inputValue: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  password?: string;
  placeholder: string;
}

const SignInput = ({ label, type, inputValue, setValue, password, placeholder }: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [eyeToggle, setEyeToggle] = useState<string>(eyeOn);
  const [errorMessage, setErrorMessage] = useState("");
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    // 값이 없는 경우
    if (inputValue === "") {
      setErrorMessage(type === "email" ? "이메일을 입력해주세요" : "비밀번호를 입력해주세요");
    }
    // 이메일 형식에 맞지 않는 경우
    else if (type === "email" && !isValidEmail(inputValue)) {
      setErrorMessage("올바른 이메일 주소가 아닙니다");
    }
    // 비밀번호 input에서 값이 8자 미만이거나 문자열만 있는 경우
    else if (type === "password" && (inputValue.length < 8 || !isValidPassword(inputValue))) {
      setErrorMessage("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    }
    // 확인 비밀번호와 비밀번호가 다른 경우
    else if (type === "confirmPassword" && inputValue !== password) {
      setErrorMessage("비밀번호가 일치하지 않아요.");
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
      <Input
        type={type === "email" ? "email" : "password"}
        ref={passwordRef}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        $isError={errorMessage !== ""}
      />
      {(type === "password" || type === "confirmPassword") && <ToggleEyeButton src={eyeToggle} alt="눈 버튼" width={16} height={16} onClick={handleEyeButtonClick} />}
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
  top: 5rem;
  right: 1.6rem;
  width: 1.6rem;
  height: 1.6rem;

  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: var(--linkbrary-red);
  font-size: 1.4rem;
`;

export default SignInput;
