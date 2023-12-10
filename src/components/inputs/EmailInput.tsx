import { FieldErrors } from "react-hook-form";
import styled from "styled-components";
import { SignupForm } from "@/types/form";

interface EmailInputProps {
  errors: FieldErrors<SignupForm>;
  registerOptions: any;
}

export default function EmailInput({ errors, registerOptions }: EmailInputProps) {
  return (
    <Container>
      <Label>이메일</Label>
      <InputWrapper>
        <Input
          type="text"
          placeholder="이메일을 입력해주세요."
          autoComplete="off"
          $isErrorStyle={!!errors.email}
          {...registerOptions}
        />
      </InputWrapper>
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input<{ $isErrorStyle: boolean }>`
  width: 100%;
  padding: 18px 15px;
  color: var(--color-gray);
  border-radius: 0.5rem;
  border: 1px solid
    ${({ $isErrorStyle }) => ($isErrorStyle ? "var(--color-red)" : "var(--color-gray-20)")};
  background: var(--color-white);
  outline: none;

  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: var(--color-red);
  font-size: 0.875rem;
`;
