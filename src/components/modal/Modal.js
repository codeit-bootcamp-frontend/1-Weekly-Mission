import close from "../../images/_close.svg";
import facebook from "../../images/facebook.svg";
import kakao from "../../images/Kakao.svg";
import link from "../../images/Addlink.svg";
import CheckIcon from "../../images/check.svg";
import { useState, useEffect } from "react";
import shareKakao from "../../ShareSns.js";
import * as S from "./ModalStyled.js";

export function Modalkebab({ url, title, buttonTitle, color, onClose }) {
  return (
    <S.ModalWrapper>
      <S.ModalTitle>{title}</S.ModalTitle>
      <S.ModalClose src={close} onClick={onClose} />
      <S.ModalUrl>{url}</S.ModalUrl>
      <S.ModalButton color={color}>{buttonTitle}</S.ModalButton>
    </S.ModalWrapper>
  );
}

export function ModalLink({
  LinkOptions,
  folderName,
  onClose,
  nowFolderId,
  userId,
}) {
  const shareUrl = `https://localhost:3000/shared?user=${userId}&folder=${nowFolderId}`;

  const handleShareKakao = (e) => {
    e.preventDefault();
    shareKakao(shareUrl, folderName);
  };

  const handleShareFacebook = (e) => {
    e.preventDefault();
    window.open(`http://www.facebook.com/sharer.php?u=${shareUrl}`);
  };

  const handleCopyClip = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(shareUrl);
    alert(`${shareUrl} 링크가 복사되었습니다.`);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <>
      <S.ModalWrapper>
        <S.ModalTitle>{LinkOptions.modalTitle}</S.ModalTitle>
        <S.ModalClose src={close} onClick={onClose} />
        <>
          {LinkOptions.name !== "이름 변경" ? (
            <S.ModalUrl>{folderName || "전체"}</S.ModalUrl>
          ) : (
            <S.ModalInput placeholder={LinkOptions.name} />
          )}
        </>
        {LinkOptions.name !== "공유" ? (
          <S.ModalButton color={LinkOptions.color}>
            {LinkOptions.buttonTitle}
          </S.ModalButton>
        ) : (
          <S.IconBox>
            <S.IconWrapper>
              <S.Kakao src={kakao} onClick={handleShareKakao} />
              <span>카카오톡</span>
            </S.IconWrapper>
            <S.IconWrapper>
              <S.Facebook src={facebook} onClick={handleShareFacebook} />
              <span>페이스북</span>
            </S.IconWrapper>
            <S.IconWrapper>
              <S.Linkadd src={link} onClick={handleCopyClip} />
              <span>링크 복사</span>
            </S.IconWrapper>
          </S.IconBox>
        )}
      </S.ModalWrapper>
    </>
  );
}

export function ModalAddFolder({ selectItems, CloseMAF, url }) {
  const [isNominated, setIsNominated] = useState("");

  const handleNominateName = (e) => setIsNominated(e.target.innerText);
  return (
    <S.AddFolderWrapper>
      <S.ModalClose src={close} onClick={CloseMAF} />
      <S.AddFolderHeader>
        <S.AddFolderTitle> 폴더에 추가</S.AddFolderTitle>
        <S.AddFolderLink>{url}</S.AddFolderLink>
      </S.AddFolderHeader>
      <S.AddFolderMain>
        {selectItems.map((item) => {
          return (
            <S.AddFolderSection $isSelected={isNominated === item.name}>
              <S.AddFolderName onClick={handleNominateName}>
                {item.name}
              </S.AddFolderName>
              <S.AddFolderCount>{`${item?.link?.count}개 링크`}</S.AddFolderCount>
              {isNominated === item.name ? <S.CheckIcon src={CheckIcon} /> : ""}
            </S.AddFolderSection>
          );
        })}
      </S.AddFolderMain>
      <S.AddFolderButton>추가하기</S.AddFolderButton>
    </S.AddFolderWrapper>
  );
}
