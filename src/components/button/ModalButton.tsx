import { ModalBasicButton } from "./ButtonStyles";

interface ModalButtonProps {
  action: string;
  label: string;
  onClick?: () => void;
}

export default function ModalButton({ action, label, onClick }: ModalButtonProps) {
  return (
    <ModalBasicButton $isDelete={action === "delete"} onClick={onClick}>
      {label}
    </ModalBasicButton>
  );
}
