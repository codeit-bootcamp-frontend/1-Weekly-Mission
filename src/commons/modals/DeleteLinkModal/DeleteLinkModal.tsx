import styles from "./DeleteLinkModal.module.scss";

function DeleteLinkModal({ linkId = "" }) {
  return (
    <div className={styles["modal-content"]}>
      <h2 className={styles["modal-title"]}>링크 삭제</h2>
      <p className={styles["modal-desc"]}>{linkId}</p>
      <button className={styles["modal-button"]}>삭제하기</button>
    </div>
  );
}

export default DeleteLinkModal;
