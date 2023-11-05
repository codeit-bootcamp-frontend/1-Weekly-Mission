import React from "react";
import * as S from "./ShareModal.style";
import closeIconImage from "../../images/modalClose.png";
import { SHARE_LINKS } from "../../constants/constants";
import { useLocation } from "react-router-dom";
import handleCopyClipBoard from "../../utils/handleCopyLink";

const ShareModal = ({ modalTitle, modalTarget, onClose }) => {
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;

  return (
    <S.ModalWrap>
      <S.Modal>
        <S.ModalTextWrap>
          <S.ModalTitle>{modalTitle}</S.ModalTitle>
          <S.FolderName>{modalTarget}</S.FolderName>
        </S.ModalTextWrap>
        <S.CloseButton onClick={onClose}>
          <img src={closeIconImage} alt="모달 닫기" />
        </S.CloseButton>
        <S.ShareButtonWrap>
          {SHARE_LINKS.map((share) => (
            <li key={share.iconTitle}>
              <S.ShareButton onClick={() => handleCopyClipBoard(`${currentUrl}`)}>
                <S.ShareIcon src={share.iconSrc} />
                <S.shareText>{share.iconTitle}</S.shareText>
              </S.ShareButton>
            </li>
          ))}
        </S.ShareButtonWrap>
      </S.Modal>
    </S.ModalWrap>
  );
};

export default ShareModal;
