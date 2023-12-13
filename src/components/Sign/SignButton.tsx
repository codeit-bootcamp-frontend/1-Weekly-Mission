import styled from "styled-components";
import { SignType } from "./SignHead";

export function SignButton({ type }: { type: SignType }) {
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
