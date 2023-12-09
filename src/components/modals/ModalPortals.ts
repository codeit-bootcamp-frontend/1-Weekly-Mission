import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
}

function ModalPortals({ children }: Props) {
  const [mountedPortal, setMountedPortal] = useState<Element | null>(null);

  useEffect(() => {
    setMountedPortal(document.querySelector('#modal'));
  }, []);

  if (!mountedPortal) return;
  return ReactDOM.createPortal(children, mountedPortal);
}

export default ModalPortals;
