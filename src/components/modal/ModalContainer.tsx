import { MouseEvent } from "react";

import styled from "styled-components";
import closeIcon from "assets/close.svg";

const Container = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Modal = styled.div`
  position: relative;
  width: 22.5rem;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  background: var(--color-white);
  border-radius: 1rem;
  border: 1px solid var(--color-gray-20);
`;

const Icon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  cursor: pointer;
`;

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
    <Container onClick={handleOutSideClick}>
      <Modal>
        {children}
        <Icon src={closeIcon} alt="close" onClick={onClose} />
      </Modal>
    </Container>
  );
}
