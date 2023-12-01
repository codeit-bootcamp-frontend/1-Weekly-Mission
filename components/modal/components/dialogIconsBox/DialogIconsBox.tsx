import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styles from "./dialogIconsBox.module.css";
import { FacebookShareButton } from "react-share";

import kakaoIcon from "@/public/icons/kakaoicon.svg";
import facebookIcon from "@/public/icons/facebookIcon.svg";
import linkIcon from "@/public/icons/link.svg";
import useScript from "@/hooks/useScript";
import { BASE_URL } from "@/pages/api/services/config";
import Image from "next/image";

interface DialogIconsBoxProps {
  folderId?: number | string;
}

export default function DialogIconsBox({ folderId }: DialogIconsBoxProps) {
  const currentUrl = `${BASE_URL}/shared?user=${1}&folder=${folderId}}`;
  const folderUrl = `${BASE_URL}/?folderId=${folderId}`;

  const status = useScript(
    `https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js`
  );

  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("d794e38d703ff57bde7b9cf0ba74569f");
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Share.sendScrap({
      requestUrl: currentUrl,
    });
  };

  const handleLinkCopyButton = () => {
    alert("클립보드에 복사 되었습니다.");
  };

  return (
    <div className={styles.dialogShareIconWrapper}>
      <div
        className={styles.dialogShareIconContainer}
        onClick={handleKakaoButton}
        role="none"
      >
        <Image
          src={kakaoIcon}
          alt="kakao-icon"
          className={styles.dialogShareKakaoIcon}
          width={24}
          height={24}
        />
        <span className={styles.dialogShareIconName}>카카오톡</span>
      </div>
      <FacebookShareButton url={currentUrl}>
        <div className={styles.dialogShareIconContainer}>
          <Image
            src={facebookIcon}
            alt="facebook-icon"
            className={styles.dialogShareFacebookIcon}
            width={24}
            height={24}
          />
          <span className={styles.dialogShareIconName}>페이스북</span>
        </div>
      </FacebookShareButton>
      <CopyToClipboard text={folderUrl}>
        <div
          role="none"
          className={styles.dialogShareIconContainer}
          onClick={handleLinkCopyButton}
        >
          <Image
            src={linkIcon}
            alt="link-icon"
            className={styles.dialogShareLinkIcon}
            width={24}
            height={24}
          />
          <span className={styles.dialogShareIconName}>링크 복사</span>
        </div>
      </CopyToClipboard>
    </div>
  );
}
