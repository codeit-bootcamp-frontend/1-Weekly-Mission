import { useState } from "react";
import styles from "./FolderEdit.module.css";
import ModalContainer from "../Modal/ModalContainer";
import DeleteFolderModal from "../Modal/DeleteFolderModal";
import EditFolderNameModal from "../Modal/EditFolderNameModal";
import ShareFolderModal from "./../Modal/ShareFolderModal";

const FolderEditButton = ({ currentFolderName, src, text }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      {isOpenModal && (
        <ModalContainer onClose={handleCloseModal}>
          {text === "공유" ? (
            <ShareFolderModal>{currentFolderName}</ShareFolderModal>
          ) : text === "이름 변경" ? (
            <EditFolderNameModal currentFolderName={currentFolderName} />
          ) : (
            <DeleteFolderModal>{currentFolderName}</DeleteFolderModal>
          )}
        </ModalContainer>
      )}
      <button className={styles.button} onClick={handleOpenModal}>
        <img src={src} alt={`${text} 이미지`} />
        <p>{text}</p>
      </button>
    </>
  );
};

export default FolderEditButton;
