import styled from "styled-components";

export function EmailInput() {
  return (
    <SignField>
      <Text>이메일</Text>
      <Input name="email" type="email" required autoComplete="email" placeholder="이메일을 입력하세요." />
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

const ErrorMsg = styled.div`
  font-size: 1.4rem;
  color: var(--red);
  font-weight: 400;
`;
