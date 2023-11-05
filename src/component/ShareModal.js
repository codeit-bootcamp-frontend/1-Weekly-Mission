import style from "./ShareModal.module.css";
import closeIcon from "../assets/img/modal-close.svg";
import linkIcon from "../assets/img/modal-link-copy.svg";
import KakaoShare from "./SocialShare/KakaoShare";
import MetaShare from "./SocialShare/MetaShare";
import { copyClipBoard } from "../util/copyClipBoard";
import { toastPop } from "../util/toastPop";
import { useState } from "react";
function ShareModal({ folderName, onExitClick }) {
  const [toast, setToast] = useState(false);
  const handleExitClick = () => {
    onExitClick();
  };
  const handleLinkCopyClick = () => {
    copyClipBoard(window.location.href);
    toastPop({ text: "링크를 복사했습니다.", setToast: setToast });
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
          <button onClick={handleLinkCopyClick}>
            <img src={linkIcon} />
            <p>링크 복사</p>
          </button>
        </div>
      </div>
      {toast && <div className={style.toast}>{toast}</div>}
    </div>
  );
}
export default ShareModal;
