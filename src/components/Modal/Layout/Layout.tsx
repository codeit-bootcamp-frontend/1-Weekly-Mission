import * as Modal from '../Modal.style';
import { ReactNode } from 'react';
import { IconClose } from '@/public/svgs';

interface Props {
  children: ReactNode;
  closeModal: () => void;
}

function Layout({ children, closeModal }: Props) {
  return (
    <Modal.DimContainer onClick={closeModal}>
      <Modal.ModalContainer onClick={(e) => e.stopPropagation()}>
        <Modal.Close onClick={closeModal}>
          <IconClose />
        </Modal.Close>
        {children}
      </Modal.ModalContainer>
    </Modal.DimContainer>
  );
}

export default Layout;
