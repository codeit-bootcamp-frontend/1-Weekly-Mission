import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./AddLinkButton.module.css";
import ModalContainer from "../Modal/ModalContainer/ModalContainer";
import useModal from "@/hooks/useModal";

interface Props {
  inputValue: string;
  children?: ReactNode;
}

function AddLinkButton({ inputValue, children }: Props) {
  const { isOpenModal, openModal, closeModal } = useModal(false);

  const handleOpenModal = () => {
    if (!inputValue) return;
    openModal();
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <>
      {isOpenModal && (
        <ModalContainer onClose={handleCloseModal}>{children}</ModalContainer>
      )}
      <button
        className={classNames(styles.cta, styles.ctaShort)}
        onClick={handleOpenModal}
      >
        추가하기
      </button>
    </>
  );
}

export default AddLinkButton;
