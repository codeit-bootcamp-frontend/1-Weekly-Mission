import styled from "styled-components";
import Input from "../../UI/Input";
import { checkPasswordInput } from "../utils";
import { useState } from "react";

type InputType = "기본" | "재확인";

export interface PasswordInputProps {
  type: InputType;
  password?: string;
  setPassword?: (arg0: string) => void;
  setReconfirmPassword?: (arg0: string) => void;
}

export function PasswordInput({ type = "기본", password, setPassword, setReconfirmPassword }: PasswordInputProps) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleBlue = (e: any) => {
    const inputValue = e.target.value;
    let newErrorMessage = checkPasswordInput(type, inputValue, password);
    setErrorMessage(newErrorMessage);

    if (setPassword) setPassword(inputValue);
    if (setReconfirmPassword) setReconfirmPassword(inputValue);
  };

  return (
    <SignField>
      <Text>{type === "기본" ? "비밀번호" : "비밀번호 확인"}</Text>
      <InputContainer>
        <Input
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          errorMessage={errorMessage}
          handleBlue={handleBlue}
        />
      </InputContainer>
    </SignField>
  );
}

const SignField = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const Text = styled.p`
  font-size: 1.4rem;
`;

const InputContainer = styled.div`
  width: 40rem;
  position: relative;
`;
