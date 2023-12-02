import Image from "next/image";
import styles from "styles/ModalStyle.module.css";

function FolderAdd({ modalOn, modalCloseImg, onClick }) {
  function handleModalOff() {
    onClick({ show: false, modalTitle: null });
  }

  return (
    modalOn.modalTitle === "폴더 추가" && (
      <div className={`${styles.modalBox}`}>
        <h1>폴더 추가</h1>
        <button className={`${styles.modalCloseBtn}`} onClick={handleModalOff}>
          <Image
            className={`${styles.modalCloseImg}`}
            src={modalCloseImg}
            alt="창닫기 버튼"
          />
        </button>

        <form className={`${styles.modalForm}`}>
          <input
            className={`${styles.modalInput}`}
            placeholder="내용 입력"
          ></input>
          <button type="submit" className={`${styles.modalSubmitBtn}`}>
            추가하기
          </button>
        </form>
      </div>
    )
  );
}

export default FolderAdd;
