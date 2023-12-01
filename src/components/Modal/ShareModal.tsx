import style from "./ShareModal.module.css";
import closeIcon from "../../assets/img/modal-close.svg";
import linkIcon from "../../assets/img/modal-link-copy.svg";
import KakaoShare from "../SocialShare/KakaoShare";
import MetaShare from "../SocialShare/MetaShare";
import { copyClipBoard } from "../../util/copyClipBoard";
import { useState } from "react";
import Toast from "../Toast/Toast";
import { useToast } from "@/src/hooks/useToast";
import Image from "next/image";

interface ShareModalProp {
  folderName: string;
  onExitClick: () => void;
}

function ShareModal({ folderName, onExitClick }: ShareModalProp) {
  const { isToastPop, openToast, closeToast } = useToast();
  const handleExitClick = () => {
    onExitClick();
  };
  const handleLinkCopyClick = () => {
    openToast();
    copyClipBoard(window.location.href);
  };
  return (
    <div className={style.modalWrapper}>
      <div className={style.root}>
        <button className={style.closeModalButton} onClick={handleExitClick}>
          <Image src={closeIcon} alt="모달 닫기" />
        </button>
        <div>
          <div className={style.title}>폴더 공유</div>
          <div className={style.folderName}>{folderName}</div>
        </div>
        <div className={style.shareLinks}>
          <KakaoShare />
          <MetaShare />
          <button onClick={handleLinkCopyClick}>
            <Image src={linkIcon} alt="linkIcon" />
            <p>링크 복사</p>
          </button>
        </div>
      </div>
      {isToastPop && <Toast onClick={closeToast}>URL이 복사되었습니다</Toast>}
    </div>
  );
}
export default ShareModal;
