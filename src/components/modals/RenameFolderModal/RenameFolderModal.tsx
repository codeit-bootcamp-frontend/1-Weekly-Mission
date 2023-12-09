import { FolderInterface } from "@/types";
import styles from "./RenameFolderModal.module.scss";

function RenameFolderModal({ folder }: { folder: FolderInterface }) {
  return (
    <div className={styles["modal-content"]}>
      <h2 className={styles["modal-title"]}>폴더 이름 변경</h2>
      <input className={styles["modal-input"]} placeholder={folder.name} />
      <button className={styles["modal-button"]}>변경하기</button>
    </div>
  );
}

export default RenameFolderModal;
