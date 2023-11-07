import { useState } from "react";
import styles from "./AddFolderButton.module.css";
import plusImg from "../../assets/plus.svg";
import plusWhiteImg from "../../assets/plus_white.svg";
import ModalContainer from "../Modal/ModalContainer";

const AddFolderButton = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {isOpenModal && <ModalContainer onClose={handleCloseModal}>{children}</ModalContainer>}
      <button className={styles.addFolderButton} onClick={handleOpenModal}>
        <p>폴더 추가</p>
        <img className={styles.plusImg} src={plusImg} alt="더하기 이미지" />
        <img className={styles.plusWhiteImg} src={plusWhiteImg} alt="더하기 이미지" />
      </button>
    </>
  );
};

export default AddFolderButton;
