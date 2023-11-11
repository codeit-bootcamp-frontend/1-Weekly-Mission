import styles from "./FolderModifier.module.scss";
import { ReactComponent as ShareIcon } from "assets/images/share-icon.svg";
import { ReactComponent as RenameIcon } from "assets/images/rename-icon.svg";
import { ReactComponent as DeleteIcon } from "assets/images/delete-icon.svg";
import { useState } from "react";
import ModalLayout from "commons/modals/ModalLayout";
import DeleteFolderModal from "commons/modals/DeleteFolderModal/DeleteFolderModal";
import EditModal from "commons/modals/EditModal/EditModal";
import ShareModal from "commons/modals/ShareModal/ShareModal";

const INITMODAL = {
  isOpened: false,
  modalType: "",
  targetId: "",
  targetTitle: "",
};

function FolderModifier({ folderId = "", folderTitle = "전체" }) {
  const [modalValues, setModalValues] = useState(INITMODAL);

  const handleModal = (e) => {
    e.preventDefault();
    const newValue = {
      isOpened: true,
      modalType: e.target.id,
      targetId: folderId,
      targetTitle: folderTitle,
    };
    setModalValues((prev) => {
      return { ...prev, ...newValue };
    });
  };

  const modals = {
    folderShareButton: (
      <ShareModal title={modalValues.targetTitle} id={modalValues.targetId} />
    ),
    folderRenameButton: (
      <EditModal title={modalValues.targetTitle} id={modalValues.targetId} />
    ),
    folderDeleteButton: (
      <DeleteFolderModal
        title={modalValues.targetTitle}
        id={modalValues.targetId}
      />
    ),
  };

  const closeModal = () => {
    setModalValues(() => {
      return { ...INITMODAL };
    });
  };

  return (
    <>
      {modalValues.isOpened && (
        <ModalLayout onClose={closeModal}>
          {modals[modalValues.modalType]}
        </ModalLayout>
      )}
      <div className={styles["button-modifier"]}>
        <button id="folderShareButton" onClick={handleModal}>
          <ShareIcon />
          공유
        </button>
        <button id="folderRenameButton" onClick={handleModal}>
          <RenameIcon />
          이름 변경
        </button>
        <button id="folderDeleteButton" onClick={handleModal}>
          <DeleteIcon />
          삭제
        </button>
      </div>
    </>
  );
}

export default FolderModifier;
