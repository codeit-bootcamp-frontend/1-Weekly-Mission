import styled from "styled-components";
import { SignType } from "./SignHead";
import { checkEmailInput, checkPasswordInput } from "../utils";
import { trySign } from "../utils";

export interface SignButtonProps {
  type: SignType;
  email: string;
  password: string;
  reconfirmPassword?: string;
}

export function SignButton({ type, email, password, reconfirmPassword }: SignButtonProps) {
  if (reconfirmPassword && password !== reconfirmPassword) checkPasswordInput("재확인", password, reconfirmPassword);
  if (!reconfirmPassword || reconfirmPassword === password) trySign({ type, email, password });

  return (
    <TrySignButton>
      <ButtonText>{type}</ButtonText>
    </TrySignButton>
  );
}

const TrySignButton = styled.section`
  display: flex;
  width: 40rem;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background: var(--graBlueToSkyBlue);
  cursor: pointer;

  &:hover .text {
    text-decoration: underline;
  }
`;

const ButtonText = styled.p`
  color: var(--grayLight);
  font-size: 1.8rem;
  font-weight: 600;
`;
