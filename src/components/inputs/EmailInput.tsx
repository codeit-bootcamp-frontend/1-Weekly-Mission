import { FieldErrors, UseFormGetValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { SignupForm } from "@/types/form";
import { isUsableEmail } from "@/common/api";

interface EmailInputProps {
  register: UseFormRegister<SignupForm>;
  getValues: UseFormGetValues<SignupForm>;
  errors: FieldErrors<SignupForm>;
}

export default function EmailInput({ register, getValues, errors }: EmailInputProps) {
  const validateUsableEmail = async () => {
    const email = getValues("email");
    try {
      const result = await isUsableEmail({ email });
      return result.data ? true : result.error.message;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Label>이메일</Label>
      <InputWrapper>
        <Input
          type="text"
          placeholder="이메일을 입력해주세요."
          autoComplete="off"
          $isErrorStyle={!!errors.email}
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/i,
              message: "올바른 이메일 주소가 아닙니다.",
            },
            validate: validateUsableEmail,
          })}
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
  /* padding: 0.75rem 0; */
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
  /* margin-top: 0.75rem; */
  color: var(--color-red);
  font-size: 0.875rem;
`;
