import styles from "./ShareModal.module.scss";
import classNames from "classnames/bind";
import { Modal } from "@/src/sharing/ui-modal";
import { ModalContentBox } from "@/src/sharing/ui-modal-content-box";
import { ModalContentDescription } from "@/src/sharing/ui-modal-content-description";
import { ModalContentTitle } from "@/src/sharing/ui-modal-content-title";
import KakaoIcon from "./kakao.svg";
import FacebookIcon from "./facebook.svg";
import LinkIcon from "./link.svg";
import { KeyboardEventHandler, MouseEventHandler } from "react";

const cx = classNames.bind(styles);

type ShareModalProps = {
  isOpen: boolean;
  folderName: string;
  onKakaoClick: MouseEventHandler<HTMLButtonElement>;
  onFacebookClick: MouseEventHandler<HTMLButtonElement>;
  onLinkCopyClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

export const ShareModal = ({
  isOpen,
  folderName,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
  onCloseClick,
  onKeyDown,
}: ShareModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>폴더 공유</ModalContentTitle>
            <ModalContentDescription>{folderName}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <button className={cx("button")} onClick={onKakaoClick}>
              <KakaoIcon />
              <span>카카오톡</span>
            </button>
            <button className={cx("button")} onClick={onFacebookClick}>
              <FacebookIcon />
              <span>페이스북</span>
            </button>
            <button className={cx("button")} onClick={onLinkCopyClick}>
              <LinkIcon />
              <span>링크 복사</span>
            </button>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
