import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
}

function ToastPortals({ children }: Props) {
  const toastElement = document.querySelector('#toast');
  if (!toastElement) return;
  return ReactDOM.createPortal(children, toastElement);
}

export default ToastPortals;
