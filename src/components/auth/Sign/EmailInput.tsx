import styled from "styled-components";
import Input from "../../UI/Input";
import { checkEmailInput } from "../utils";
import { useState } from "react";

export function EmailInput({ type }: { type: "로그인" | "회원가입" }) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleBlue = (e: any) => {
    const inputValue = e.target.value;
    let newErrorMessage = checkEmailInput(type, inputValue);
    setErrorMessage(newErrorMessage);
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
