import Image from "next/image";
import styles from "styles/ModalStyle.module.css";

function FolderEdit({ modalOn, modalCloseImg, selectedFolder, onClick }) {
  function handleModalOff() {
    onClick({ show: false, modalTitle: null });
  }

  return (
    modalOn.modalTitle === "이름 변경" && (
      <div className={styles.modalBox}>
        <h1>폴더 이름 변경</h1>
        <button className={styles.modalCloseBtn} onClick={handleModalOff}>
          <Image
            className={styles.modalCloseImg}
            src={modalCloseImg}
            alt="창닫기 버튼"
          />
        </button>

        <form className={styles.modalForm}>
          <input
            className={styles.modalInput}
            placeholder={selectedFolder}
          ></input>
          <button type="submit" className={styles.modalSubmitBtn}>
            변경하기
          </button>
        </form>
      </div>
    )
  );
}

export default FolderEdit;
