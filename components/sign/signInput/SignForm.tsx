import styled from "styled-components";
import SignInput from "./SignInput";
import { FormEvent } from "react";

interface SignFormProps {
  signup?: boolean;
  children: string;
}

const SignForm = ({ signup, children }: SignFormProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <SignInput label="이메일" inputType="email" />
        <SignInput label="비밀번호" inputType="password" />
        {signup && <SignInput label="비밀번호 확인" inputType="password" />}
      </InputWrapper>
      <SubmitButton type="submit">{children}</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 40rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.4rem;
  border-radius: 0.8rem;
  background-image: var(--graBlueToSkyBlue);

  color: #f5f5f5;
  font-size: 1.8rem;
  font-weight: 600;
`;

export default SignForm;
