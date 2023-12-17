import { BaseButton } from "@/components/Main/FolderSelect/FolderSelect.styled";
import styled, { keyframes } from "styled-components";

export const scrollDown = keyframes`
  50% {
    bottom: 11rem;
  }
`;

export const ButtonFloat = styled(BaseButton)`
  animation: ${scrollDown} 1.3s ease-in-out infinite;
  position: fixed;
  z-index: 2;
  bottom: 10.1rem;
  padding: 1.2rem 2.4rem;
  border-radius: 2rem;
  gap: 0.3rem;
  background-color: var(--Primary);
  color: var(--White);
  font-size: 1.6rem;
  font-weight: 500;

  &:hover {
    background-color: var(--Red);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
