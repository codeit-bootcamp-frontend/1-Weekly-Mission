import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

function Modal({ children }: Props) {
  return (
    <>
      {createPortal(children, document.getElementById('modal-root') as HTMLElement)}
    </>
  );
}

export default Modal;
