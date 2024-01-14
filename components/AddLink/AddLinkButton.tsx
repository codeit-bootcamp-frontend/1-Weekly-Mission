import { ReactNode, useState } from "react";
import classNames from "classnames";
import styles from "./AddLinkButton.module.css";
import ModalContainer from "../Modal/ModalContainer/ModalContainer";
import useModal from "@/hooks/useModal";
import AddLinkModalContent from "../Modal/AddLinkModalContent/AddLinkModalContent";
import isValidURL from "@/utils/isValidUrl";

interface Props {
  inputValue: string;
  folderListData: UserFolders[] | undefined;
}

function AddLinkButton({ inputValue, folderListData }: Props) {
  const { isOpenModal, openModal, closeModal } = useModal(false);

  const handleOpenModal = () => {
    if (!inputValue) return;
    if (!isValidURL(inputValue)) return;
    openModal();
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <>
      {isOpenModal && (
        <ModalContainer onClose={handleCloseModal}>
          <AddLinkModalContent
            inputValue={inputValue}
            folderListData={folderListData}
            onClose={handleCloseModal}
          />
        </ModalContainer>
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
