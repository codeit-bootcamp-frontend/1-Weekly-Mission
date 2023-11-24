import styles from "./EditModal.module.scss";

function EditModal({ title = "", id = "" }) {
  return (
    <div className={styles["modal-content"]}>
      <h2 className={styles["modal-title"]}>폴더 이름 변경</h2>
      <input className={styles["modal-input"]} placeholder={title} />
      <button className={styles["modal-button"]}>변경하기</button>
    </div>
  );
}

export default EditModal;
