import styled from "styled-components";
import { MainButton } from "./Button";

const ModalBasicButton = styled(MainButton)`
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

export default function ModalButton({ action, label }) {
  return <ModalBasicButton color={action}>{label}</ModalBasicButton>;
}
