import { createPortal } from 'react-dom';

function Modal({ children }) {
  return (
    <>
      {createPortal(children, document.getElementById('modal-root'))}
    </>
  );
}

export default Modal;
