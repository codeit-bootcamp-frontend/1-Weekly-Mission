import { FormEvent, useState } from "react";
import styled from "styled-components";
import SignInput from "./SignInput";

interface SignFormProps {
  signup?: boolean;
  children: string;
}

const SignForm = ({ signup, children }: SignFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <SignInput label="이메일" type="email" placeholder="이메일을 입력해 주세요." inputValue={email} setValue={setEmail} />
        <SignInput label="비밀번호" type="password" inputValue={password} setValue={setPassword} placeholder={signup ? "영문, 숫자를 조합해 8자 이상 입력해 주세요." : "비밀번호를 입력해 주세요."} />
        {signup && (
          <SignInput
            label="비밀번호 확인"
            type="confirmPassword"
            inputValue={confirmPassword}
            setValue={setConfirmPassword}
            password={password}
            placeholder="비밀번호와 일치하는 값을 입력해 주세요."
          />
        )}
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
