import styled from "styled-components";
import { MainButton } from "./Button";
import { breakPoints } from "styles/media";

const ModalBasicButton = styled(MainButton)<{ isDelete: boolean }>`
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 1rem;

  background: ${({ isDelete }) => (isDelete ? "var(--color-red)" : "")};

  @media only screen and (${breakPoints.mobile}) {
    width: 100%;
  }
`;

interface ModalButtonProps {
  action: string;
  label: string;
}

export default function ModalButton({ action, label }: ModalButtonProps) {
  return <ModalBasicButton isDelete={action === "delete"}>{label}</ModalBasicButton>;
}
