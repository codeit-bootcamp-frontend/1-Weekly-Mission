import { ReactNode } from "react";
import Image from "next/image";

import ModalContainer from "@/components/Modal/ModalContainer/ModalContainer";

import plusImg from "@/assets/images/plus.svg";
import plusWhiteImg from "@/assets/images/plus_white.svg";

import styles from "./AddFolderButton.module.css";
import useModal from "@/hooks/useModal";
import AddFolderModalContent from "../Modal/AddFolderModalContent/AddFolderModalContent";

function AddFolderButton() {
  const { isOpenModal, openModal, closeModal } = useModal(false);

  const handleOpenModal = () => {
    openModal();
  };

  const handleCloseModal = () => {
    closeModal();
  };
  return (
    <>
      <button className={styles.addFolderButton} onClick={handleOpenModal}>
        <p>폴더 추가</p>
        <Image className={styles.plusImg} src={plusImg} alt="더하기 이미지" />
        <Image
          className={styles.plusWhiteImg}
          src={plusWhiteImg}
          alt="더하기 이미지"
        />
      </button>
      {isOpenModal && (
        <ModalContainer onClose={handleCloseModal}>
          <AddFolderModalContent onClose={handleCloseModal} />
        </ModalContainer>
      )}
    </>
  );
}

export default AddFolderButton;
