import { MouseEvent } from "react";
import * as S from "./modalStyles/ModalContainerStyles";

interface ModalProps {
  children: React.ReactNode;
  readonly onClose: () => void;
}

export default function ModalContainer({ onClose, children }: ModalProps) {
  const handleOutSideClick = (e: MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.Container onClick={handleOutSideClick}>
      <S.Modal>
        {children}
        <S.Icon src="/assets/close.svg" alt="close" onClick={onClose} />
      </S.Modal>
    </S.Container>
  );
}
