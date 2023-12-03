import { useState } from "react";
import styles from "./FolderEdit.module.css";
import ModalContainer from "../Modal/ModalContainer/ModalContainer";
import DeleteFolderModalContent from "../Modal/DeleteFolderModalContent/DeleteFolderModalContent";
import EditFolderNameModalContent from "../Modal/EditFolderNameModalContent/EditFolderNameModalContent";
import ShareFolderModal from "../Modal/ShareFolderModalContent/ShareFolderModalContent";
import Image from "next/image";

interface Props {
  currentFolderName: string;
  src: string;
  text: string;
}

const FolderEditButton = ({ currentFolderName, src, text }: Props) => {
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
            <EditFolderNameModalContent currentFolderName={currentFolderName} />
          ) : (
            <DeleteFolderModalContent>
              {currentFolderName}
            </DeleteFolderModalContent>
          )}
        </ModalContainer>
      )}
      <button className={styles.button} onClick={handleOpenModal}>
        <Image src={src} alt={`${text} 이미지`} />
        <p>{text}</p>
      </button>
    </>
  );
};

export default FolderEditButton;
