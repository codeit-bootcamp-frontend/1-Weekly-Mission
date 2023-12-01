import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
}

function ModalPortals({ children }: Props) {
  const modalElement = document.querySelector('#modal');
  if (!modalElement) return;
  return ReactDOM.createPortal(children, modalElement);
}

export default ModalPortals;
