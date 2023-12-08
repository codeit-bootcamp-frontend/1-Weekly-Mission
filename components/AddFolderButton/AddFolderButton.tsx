import { useState, ReactNode } from "react";
import Image from "next/image";

import ModalContainer from "@/components/Modal/ModalContainer/ModalContainer";

import plusImg from "@/assets/images/plus.svg";
import plusWhiteImg from "@/assets/images/plus_white.svg";

import styles from "./AddFolderButton.module.css";

interface Props {
  children?: ReactNode;
}

function AddFolderButton({ children }: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
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
        <ModalContainer onClose={handleCloseModal}>{children}</ModalContainer>
      )}
    </>
  );
}

export default AddFolderButton;
