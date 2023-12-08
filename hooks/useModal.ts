import { useState } from "react";

function useModal(initialState = false) {
  const [isOpenModal, setIsOpenModal] = useState(initialState);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return {
    isOpenModal,
    openModal,
    closeModal,
  };
}

export default useModal;
