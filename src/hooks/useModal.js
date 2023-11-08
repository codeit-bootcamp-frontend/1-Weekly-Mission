import { useState } from 'react';
import Layout from 'components/Modal/Layout';

function useModal(modals) {
  const [modal, setModal] = useState(null);

  const toggleShow = (modal) => {
    if (!modal) {
      setModal(null);
      return;
    }

    const closeModal = () => {
      toggleShow(null);
    };

    const newModal = createModal(modals?.[modal], closeModal);
    setModal(newModal);
  };

  return [toggleShow, modal];
}

export default useModal;

function createModal(Modal, closeModal) {
  return <Layout closeModal={closeModal}>{Modal}</Layout>;
}
