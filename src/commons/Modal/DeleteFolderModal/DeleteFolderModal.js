import styles from "./DeleteFolderModal.module.scss";
import { ModalLayout } from "commons/Modal/index";

function DeleteFolderModal(e = "") {
  return (
    <ModalLayout title="폴더 삭제" description="폴더 이름">
      <button className={styles["delete-button"]}>삭제하기</button>
    </ModalLayout>
  );
}

export default DeleteFolderModal;
