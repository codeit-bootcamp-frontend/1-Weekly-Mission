import * as Modal from '../Modal.style';
import CLOSE from 'assets/icons/close.svg';

function Layout({ children, closeModal }) {
  return (
    <>
      <Modal.DimContainer onClick={closeModal} />
      <Modal.ModalContainer>
        <Modal.Close onClick={closeModal}>
          <img src={CLOSE} alt='닫기' />
        </Modal.Close>
        {children}
      </Modal.ModalContainer>
    </>
  );
}

export default Layout;
