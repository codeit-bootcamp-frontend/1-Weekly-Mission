import { useState } from "react";
import ModalLayout from "layouts/modal/ModalLayout.jsx";

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
            <ModalLayout closeModal={isClickOutSideClose ? closeModal : null}>
              {children}
            </ModalLayout>
          );
        }
      : () => null,
    openModal,
    closeModal,
    isModalOpen,
  };
};

export default useModal;
