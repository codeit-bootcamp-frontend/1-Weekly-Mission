import Image from "next/image";
import styles from "styles/ModalStyle.module.css";

function FolderInputModal({ modalOn, modalCloseImg, selectedFolder, onClick }) {
  const MODAL_TEXTS = {
    TITLE_FOLDER_ADD: "폴더 추가",
    BTN_NAME_ADD: "추가하기",
    TITLE_FOLDER_NAME_CHANGE: "폴더 이름 변경",
    BTN_NAME_CHANGE: "변경하기",
  };

  function handleModalOff() {
    onClick({
      show: false,
      modalTitle: null,
    });
  }

  return (
    <div className={`${styles.modalBox} ${styles.folderInputModal}`}>
      <h1>{modalOn?.modalTitle}</h1>
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
          placeholder={selectedFolder || "내용 입력"}
        ></input>
        <button type="submit" className={styles.modalSubmitBtn}>
          {modalOn.show
            ? MODAL_TEXTS.BTN_NAME_ADD
            : MODAL_TEXTS.BTN_NAME_CHANGE}
        </button>
      </form>
    </div>
  );
}

export default FolderInputModal;
