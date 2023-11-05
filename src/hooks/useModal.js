import { useState } from "react";

const useModal = () => {
  const [currentModal, setCurrentModal] = useState(null);

  const openModal = (modalId) => {
    setCurrentModal(modalId);
  };

  const closeModal = () => {
    setCurrentModal(null);
  };

  return {
    isOpen: (modalId) => currentModal === modalId,
    openModal,
    closeModal,
  };
};
export default useModal;
