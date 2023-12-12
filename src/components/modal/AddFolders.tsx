import styles from "./modalStyles/AddFolders.module.css";
import ModalTitle from "./ModalTitle";
import ModalButton from "@/components/button/ModalButton";

export default function AddFolders() {
  return (
    <>
      <ModalTitle label="폴더 추가" />
      <div className={styles.contents}>
        <input className={styles.input} placeholder="내용 입력" />
        <ModalButton action="change" label="추가하기" />
      </div>
    </>
  );
}
