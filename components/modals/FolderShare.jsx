import styles from "styles/ModalStyle.module.css";
import kakaoImg from "../../assets/images/kakao.png";
import facebookImg from "../../assets/images/Facebook.png";
import linkImg from "../../assets/images/link.svg";
import Image from "next/image";

function FolderShare({ modalOn, modalCloseImg, selectedFolder, onClick }) {
  function handleModalOff() {
    onClick({ show: false, modalTitle: null });
  }

  return (
    modalOn.modalTitle === "폴더 공유" && (
      <div className={`${styles.modalBox} ${styles.folderShare}`}>
        <div className={styles.titleBox}>
          <h1>폴더 공유</h1>
          <button className={styles.modalCloseBtn} onClick={handleModalOff}>
            <Image
              className={styles.modalCloseImg}
              src={modalCloseImg}
              alt="창닫기 버튼"
            />
          </button>
          <span className={styles.folderName}>{selectedFolder}</span>
        </div>

        <div className={styles.shareLinks}>
          <div className={`${styles.linkBtnBox} ${styles.kakaoLink}`}>
            <button>
              <img src={kakaoImg} alt="카카오톡 이미지" />
            </button>
            <span>카카오톡</span>
          </div>

          <div className={`${styles.linkBtnBox} ${styles.facebookLink}`}>
            <button>
              <img src={facebookImg} alt="페이스북 이미지" />
            </button>
            <span>페이스북</span>
          </div>

          <div className={`${styles.linkBtnBox} ${styles.copyLink}`}>
            <button>
              <img src={linkImg} alt="연결고리 이미지" />
            </button>
            <span>링크 복사</span>
          </div>
        </div>
      </div>
    )
  );
}

export default FolderShare;
