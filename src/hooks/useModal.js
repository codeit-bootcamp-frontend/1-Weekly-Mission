import { useState } from "react";
import Modal from "components/modal/Modal.jsx";

const useModal = ({ isClickOutSideClose = true } = {}) => {
  const $body = document.querySelector("body");
  const originalOverflowValue = $body.style.overflow;

  const [isModalOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    $body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    $body.style.overflow = originalOverflowValue;
  };

  return {
    Modal: isModalOpen
      ? ({ children }) => {
          return (
            <Modal closeModal={isClickOutSideClose ? closeModal : null}>
              {children}
            </Modal>
          );
        }
      : () => null,
    openModal,
    closeModal,
    isModalOpen,
  };
};

export default useModal;
