import * as Modal from '../Modal.style';
import { ReactNode } from 'react';
import CLOSE from '@assets/icons/close.svg';

interface Props {
  children: ReactNode;
  closeModal: () => void;
}

function Layout({ children, closeModal }: Props) {
  return (
    <Modal.DimContainer onClick={closeModal}>
      <Modal.ModalContainer onClick={(e) => e.stopPropagation()}>
        <Modal.Close onClick={closeModal}>
          <img src={CLOSE} alt='닫기' />
        </Modal.Close>
        {children}
      </Modal.ModalContainer>
    </Modal.DimContainer>
  );
}

export default Layout;
