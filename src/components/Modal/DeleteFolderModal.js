import styles from "./DeleteFolderModal.module.css";
import ModalButton from "./ModalButton";
import ModalTitle from "./ModalTitle";

function DeleteFolderModal({ children }) {
  return (
    <div className={styles.deleteFolderModal}>
      <ModalTitle>폴더 삭제</ModalTitle>
      <div className={styles.container}>
        <p className={styles.folderName}>{children}</p>
        <ModalButton color="red">삭제하기</ModalButton>
      </div>
    </div>
  );
}

export default DeleteFolderModal;
