import style from "./ShareModal.module.css";
import closeIcon from "../assets/img/modal-close.svg";
import linkIcon from "../assets/img/modal-link-copy.svg";
import KakaoShare from "./SocialShare/KakaoShare";
import MetaShare from "./SocialShare/MetaShare";
function ShareModal({ folderName, onExitClick }) {
  const handleExitClick = () => {
    onExitClick();
  };
  return (
    <div className={style.modalWrapper}>
      <div className={style.root}>
        <button className={style.closeModalButton} onClick={handleExitClick}>
          <img src={closeIcon} alt="모달 닫기" />
        </button>
        <div>
          <div className={style.title}>폴더 공유</div>
          <div className={style.folderName}>{folderName}</div>
        </div>
        <div className={style.shareLinks}>
          <KakaoShare />
          <MetaShare />
          <button>
            <img src={linkIcon} />
            <p>링크 복사</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ShareModal;
