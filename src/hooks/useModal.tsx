import { useState } from 'react';
import Layout from '@components/Modal/Layout';

function useModal(modals: {
  [modal: string]: JSX.Element;
}): [(modalKey: string) => void, JSX.Element] {
  const [Modal, setModal] = useState<JSX.Element>(<></>);

  const closeModal = () => {
    toggleShow('');
  };

  const toggleShow = (modalKey: string) => {
    if (!modalKey) {
      setModal(<></>);
      return;
    }

    const newModal = createModal(modals?.[modalKey], closeModal);
    setModal(newModal);
  };

  return [toggleShow, Modal];
}

function createModal(Modal: JSX.Element, closeModal: () => void) {
  return <Layout closeModal={closeModal}>{Modal}</Layout>;
}

export default useModal;
