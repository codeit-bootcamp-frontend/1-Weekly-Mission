import React, { useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './dialogIconsBox.css';
import { FacebookShareButton } from 'react-share';

import kakaoIcon from '../../../../assets/common/kakaoicon.svg';
import facebookIcon from '../../../../assets/landing/facebookIcon.svg';
import linkIcon from '../../../../assets/folder/link.svg';
import useScript from '../../../../hooks/useScript';
import { BASE_URL } from '../../../../api/services/config';

export default function DialogIconsBox({ folderId }) {
  const currentUrl = `${BASE_URL}/shared?user=${1}&folder=${folderId}}`;
  const folderUrl = `${BASE_URL}/?folderId=${folderId}`;

  const status = useScript(
    `https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js`,
  );

  useEffect(() => {
    if (status === 'ready' && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init('d794e38d703ff57bde7b9cf0ba74569f');
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Share.sendScrap({
      requestUrl: currentUrl,
    });
  };

  const handleLinkCopyButton = () => {
    alert('클립보드에 복사 되었습니다.');
  };

  return (
    <div className="dialog-share-icon-wrapper">
      <div
        className="dialog-share-icon-container"
        onClick={handleKakaoButton}
        role="none"
      >
        <img
          src={kakaoIcon}
          alt="kakao-icon"
          className="dialog-share-kakao-icon"
        />
        <span className="dialog-share-icon-name">카카오톡</span>
      </div>
      <FacebookShareButton url={currentUrl}>
        <div className="dialog-share-icon-container">
          <img
            src={facebookIcon}
            alt="facebook-icon"
            className="dialog-share-facebook-icon"
          />
          <span className="dialog-share-icon-name">페이스북</span>
        </div>
      </FacebookShareButton>
      <CopyToClipboard text={folderUrl}>
        <div
          role="none"
          className="dialog-share-icon-container"
          onClick={handleLinkCopyButton}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="dialog-share-link-icon"
          />
          <span className="dialog-share-icon-name">링크 복사</span>
        </div>
      </CopyToClipboard>
    </div>
  );
}
