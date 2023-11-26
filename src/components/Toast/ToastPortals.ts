import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

function ToastPortals({ children }: { children: ReactNode }) {
  const toastElement = document.querySelector('#toast');
  if (!toastElement) return;
  return ReactDOM.createPortal(children, toastElement);
}

export default ToastPortals;
