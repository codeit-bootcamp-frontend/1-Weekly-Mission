import Image from "next/image";

import useModal from "@/hooks/useModal";

import ModalContainer from "@/components/Modal/ModalContainer/ModalContainer";
import DeleteFolderModalContent from "@/components/Modal/DeleteFolderModalContent/DeleteFolderModalContent";
import EditFolderNameModalContent from "@/components/Modal/EditFolderNameModalContent/EditFolderNameModalContent";
import ShareFolderModal from "@/components/Modal/ShareFolderModalContent/ShareFolderModalContent";

import styles from "./FolderEdit.module.css";
import { Dispatch, SetStateAction } from "react";

interface FolderEditButtonProps {
  currentFolderName: string;
  setCurrentFolderName: Dispatch<SetStateAction<string>>;
  src: string;
  text: string;
}

function FolderEditButton({
  currentFolderName,
  setCurrentFolderName,
  src,
  text,
}: FolderEditButtonProps) {
  const { isOpenModal, openModal, closeModal } = useModal(false);

  return (
    <>
      {isOpenModal && (
        <ModalContainer onClose={closeModal}>
          {text === "공유" ? (
            <ShareFolderModal>{currentFolderName}</ShareFolderModal>
          ) : text === "이름 변경" ? (
            <EditFolderNameModalContent
              currentFolderName={currentFolderName}
              setCurrentFolderName={setCurrentFolderName}
              onClose={closeModal}
            />
          ) : (
            <DeleteFolderModalContent onClose={closeModal}>
              {currentFolderName}
            </DeleteFolderModalContent>
          )}
        </ModalContainer>
      )}
      <button className={styles.button} onClick={openModal}>
        <Image src={src} alt={`${text} 이미지`} />
        <p>{text}</p>
      </button>
    </>
  );
}

export default FolderEditButton;
