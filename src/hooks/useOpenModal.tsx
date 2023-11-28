import { useState } from "react";
import { ModalInterface } from "src/types";

const INITIAL_MODAL: ModalInterface = {
  show: false,
};

function useOpenModal() {
  const [modal, setModal] = useState(INITIAL_MODAL);

  const handleOpenModal = (modal: ModalInterface) => {
    setModal((prev) => {
      return { ...prev, ...modal };
    });
  };

  const handleCloseModal = () => {
    setModal((prev) => {
      return { ...prev, ...INITIAL_MODAL };
    });
  };

  return { modal, handleOpenModal, handleCloseModal };
}

export default useOpenModal;
