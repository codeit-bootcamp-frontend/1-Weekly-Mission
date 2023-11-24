import { useState, ReactNode } from 'react';
import Layout from '@components/Modal/Layout';

function useModal(modals: any): [(modalKey: string) => void, ReactNode] {
  const [Modal, setModal] = useState<ReactNode>(null);

  const closeModal = () => {
    toggleShow('');
  };

  const toggleShow = (modalKey: string) => {
    if (!modalKey) {
      setModal(null);
      return;
    }

    const newModal = createModal(modals?.[modalKey], closeModal);
    setModal(newModal);
  };

  return [toggleShow, Modal];
}

function createModal(Modal: ReactNode, closeModal: () => void) {
  return <Layout closeModal={closeModal}>{Modal}</Layout>;
}

export default useModal;
