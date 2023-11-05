import styles from "./DeleteLinkModal.module.css";
import ModalButton from "./ModalButton";
import ModalTitle from "./ModalTitle";

function DeleteLinkModal({ children }) {
  return (
    <div className={styles.deleteLinkModal}>
      <ModalTitle>링크 삭제</ModalTitle>
      <div className={styles.container}>
        <p className={styles.folderName}>{children}</p>
        <ModalButton color="red">삭제하기</ModalButton>
      </div>
    </div>
  );
}

export default DeleteLinkModal;
