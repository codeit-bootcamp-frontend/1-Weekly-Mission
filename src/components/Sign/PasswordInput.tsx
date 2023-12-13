import { IconEyeOff } from "@/public/assets";
import styled from "styled-components";

type InputType = "기본" | "재확인";

export function PasswordInput({ type = "기본" }: { type: InputType }) {
  return (
    <SignField>
      <Text>{type === "기본" ? "비밀번호" : "비밀번호 확인"}</Text>
      <InputContainer>
        <Input name="password" type="password" required placeholder="비밀번호를 입력하세요." />
        <EyeDiv>
          <IconEyeOff alt="비밀번호 숨기기 아이콘" />
        </EyeDiv>
      </InputContainer>
      <ErrorMsg></ErrorMsg>
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

const ErrorMsg = styled.div`
  font-size: 1.4rem;
  color: var(--red);
  font-weight: 400;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 40rem;
  padding: 1.8rem 1.5rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray60);
  background: var(--white);

  &:focus {
    border: 0.1rem solid var(--primary);
    outline: none;
  }
`;

const EyeDiv = styled.div`
  padding-right: 1.5rem;
  position: absolute;
  right: 0px;
  bottom: 1.2rem;
  cursor: pointer;
`;
