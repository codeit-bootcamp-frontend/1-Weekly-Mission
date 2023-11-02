import * as Modal from '../Modal.style';
import CLOSE from 'assets/icons/close.svg';

function Layout({ children }) {
  return (
    <Modal.DimContainer>
      <Modal.ModalContainer>
        <Modal.Close>
          <img src={CLOSE} alt='닫기' />
        </Modal.Close>
        {children}
      </Modal.ModalContainer>
    </Modal.DimContainer>
  );
}

export default Layout;
