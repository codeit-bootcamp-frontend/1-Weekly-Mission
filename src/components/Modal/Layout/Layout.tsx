import * as Modal from '../Modal.style';
import { ReactNode } from 'react';
import { IconClose } from '@/public/svgs';
import ModalPortals from '../ModalPortals';

interface Props {
  children: ReactNode;
  closeModal: () => void;
}

function Layout({ children, closeModal }: Props) {
  return (
    <ModalPortals>
      <Modal.DimContainer onClick={closeModal}>
        <Modal.ModalContainer onClick={(e) => e.stopPropagation()}>
          <Modal.Close onClick={closeModal}>
            <IconClose />
          </Modal.Close>
          {children}
        </Modal.ModalContainer>
      </Modal.DimContainer>
    </ModalPortals>
  );
}

export default Layout;
