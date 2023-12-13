import Image from "next/image";

import useModal from "@/hooks/useModal";

import ModalContainer from "@/components/Modal/ModalContainer/ModalContainer";
import DeleteFolderModalContent from "@/components/Modal/DeleteFolderModalContent/DeleteFolderModalContent";
import EditFolderNameModalContent from "@/components/Modal/EditFolderNameModalContent/EditFolderNameModalContent";
import ShareFolderModal from "@/components/Modal/ShareFolderModalContent/ShareFolderModalContent";

import styles from "./FolderEdit.module.css";

interface Props {
  currentFolderName: string;
  src: string;
  text: string;
}

function FolderEditButton({ currentFolderName, src, text }: Props) {
  const { isOpenModal, openModal, closeModal } = useModal(false);

  const handleOpenModal = () => {
    openModal();
  };

  const handleCloseModal = () => {
    closeModal();
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
}

export default FolderEditButton;
