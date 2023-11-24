import styles from "./DeleteFolderModal.module.scss";

function DeleteFolderModal({ title = "", id = "" }) {
  return (
    <div className={styles["modal-content"]}>
      <h2 className={styles["modal-title"]}>폴더 삭제</h2>
      <p className={styles["modal-desc"]}>{title}</p>
      <button className={styles["modal-button"]}>삭제하기</button>
    </div>
  );
}

export default DeleteFolderModal;
