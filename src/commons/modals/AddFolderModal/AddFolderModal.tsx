import styles from "./AddFolderModal.module.scss";

function AddFolderModal() {
  return (
    <div className={styles["modal-content"]}>
      <h2 className={styles["modal-title"]}>폴더 추가</h2>
      <input className={styles["modal-input"]} placeholder="내용 입력" />
      <button className={styles["modal-button"]}>추가하기</button>
    </div>
  );
}

export default AddFolderModal;
