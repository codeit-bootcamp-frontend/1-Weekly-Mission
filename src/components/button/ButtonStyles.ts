import styled from "styled-components";
import { breakPoints } from "@/common/media";

export const MainButton = styled.button<{ size?: string }>`
  padding: ${({ size }) => (size === "large" ? "1rem 1.25rem" : "0.6rem 1rem")};
  width: ${({ size }) => (size === "large" ? "8rem" : "100%")};
  font-size: ${({ size }) => (size === "large" ? "1.2rem" : "0.875rem")};
  border: none;
  border-radius: 0.5rem;
  background: var(--gra-purpleblue-to-skyblue);
  color: var(--color-white);
  font-weight: var(--font-semibold);
  cursor: pointer;

  @media only screen and (${breakPoints.mobile}) {
    width: 5.2rem;
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
`;

export const ModalBasicButton = styled(MainButton)<{ $isDelete: boolean }>`
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 1rem;

  background: ${({ $isDelete }) => ($isDelete ? "var(--color-red)" : "")};

  @media only screen and (${breakPoints.mobile}) {
    width: 100%;
  }
`;
