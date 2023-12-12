import { ModalBasicButton } from "./ButtonStyles";

interface ModalButtonProps {
  action: string;
  label: string;
}

export default function ModalButton({ action, label }: ModalButtonProps) {
  return <ModalBasicButton $isDelete={action === "delete"}>{label}</ModalBasicButton>;
}
