import Image from "next/image";
import styles from "styles/ModalStyle.module.css";

function FolderDelete({ modalOn, modalCloseImg, selectedFolder, onClick }) {
  function handleModalOff() {
    onClick({ show: false, modalTitle: null });
  }

  return (
    modalOn.modalTitle === "폴더 삭제" && (
      <div className={`${styles.modalBox} ${styles.folderDelete}`}>
        <div className={styles.titleBox}>
          <h1>폴더 삭제</h1>
          <button className={styles.modalCloseBtn} onClick={handleModalOff}>
            <Image
              className={styles.modalCloseImg}
              src={modalCloseImg}
              alt="창닫기 버튼"
            />
          </button>
          <span className={styles.folderName}>{selectedFolder}</span>
        </div>

        <button
          type="submit"
          className={`${styles.modalSubmitBtn} ${styles.delete}`}
        >
          삭제하기
        </button>
      </div>
    )
  );
}

export default FolderDelete;
