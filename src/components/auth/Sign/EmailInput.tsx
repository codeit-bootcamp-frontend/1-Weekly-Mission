import styled from "styled-components";
import Input from "../../UI/Input";
import { checkEmailInput } from "../utils";
import { useState } from "react";

interface EmailInputProps {
  type: "로그인" | "회원가입";
  setEmail: (arg0: string) => void;
}

export function EmailInput({ type, setEmail }: EmailInputProps) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleBlue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let newErrorMessage = await checkEmailInput(type, inputValue);
    setErrorMessage(newErrorMessage);
    setEmail(inputValue);
  };

  return (
    <SignField>
      <Text>이메일</Text>
      <InputContainer>
        <Input type="email" placeholder="이메일을 입력해 주세요." errorMessage={errorMessage} handleBlue={handleBlue} />
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
`;
