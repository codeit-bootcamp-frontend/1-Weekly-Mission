import { styled } from "styled-components";

interface IInput {
  $error: boolean;
}

export const Input = styled.input<IInput>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
  width: 100%;
  max-width: 40rem;
  padding: 1.8rem 1.5rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--Gray4);
  background-color: #fff;
  font-size: 1.6rem;

  &:focus-within {
    outline: 0.15rem solid var(--Primary);
  }

  ${({ $error }) => ($error ? "border: 0.1rem solid var(--Red); &::placeholder { color: var}" : "")}
`;

export const OnOffButton = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  padding: 0;
  background-color: #fff;
  border: 0;

  position: absolute;
  right: 5%;
  top: 45%;
  width: 2rem;
`;

export const ErrorText = styled.p`
  height: 2.5rem;
  font-size: 1.4rem;
  color: var(--Red);
`;
