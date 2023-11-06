import React, { useState } from "react";
import { S } from "./ModalStyle";
import cancelIcon from "../../assets/modal/_close.png";
import kakaoIcon from "../../assets/modal/kakao.svg";
import facebookIcon from "../../assets/modal/facebook.svg";
import copyIcon from "../../assets/modal/sharelink.svg";
import checkIcon from "../../assets/modal/check.svg";
import useAsync from "../../Hooks/useAsync";
import { getFolders } from "../../api";
import { useSearchParams } from "react-router-dom";

function ShareIcon({ src, alt, text }) {
  return (
    <S.ShareIconStyled>
      <img src={src} alt={alt}></img>
      <span>{text}</span>
    </S.ShareIconStyled>
  );
}

function ModalFolderShare() {
  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");
  const sharedLink = window.location.href + "?" + folderId;

  // const shareToKakao = () => {};
  // const shareToFacebook = () => {};
  const copyClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sharedLink);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };
  return (
    <S.IconsWrapper>
      <ShareIcon
        src={kakaoIcon}
        // onClick={shareToKakao}
        alt="카카오톡"
        text="카카오톡"
      />
      <ShareIcon
        src={facebookIcon}
        // onClick={shareToFacebook}
        alt="페이스북"
        text="페이스북"
      />
      <ShareIcon
        src={copyIcon}
        onClick={copyClipboard}
        alt="링크 복사"
        text="링크 복사"
      />
    </S.IconsWrapper>
  );
}

function FolderInfo({ folderName, count }) {
  const [isClicked, setShowCheckIcon] = useState(false);

  return (
    <S.StyledFolderInfo
      onClick={() => setShowCheckIcon(!isClicked)}
      className={isClicked ? "clicked" : null}
    >
      <div>
        <span className="name">{folderName}</span>
        <span className="count">{count}개 링크</span>
      </div>
      {isClicked && <img src={checkIcon} />}
    </S.StyledFolderInfo>
  );
}
function ModalAddToFolder() {
  const DEFAULT_FOLDER = 1;
  const [folderData, isLoadingFolder, folderError, getFolderAsync] = useAsync(
    () => getFolders(DEFAULT_FOLDER)
  );

  if (!folderData) return null;
  const folders = folderData?.data;

  return (
    <S.FolderInfoContainer>
      {folders.map((folder) => (
        <FolderInfo
          key={folder.id}
          folderName={folder.name}
          count={folder.link.count}
        />
      ))}
    </S.FolderInfoContainer>
  );
}
function Modal({
  title,
  buttonText,
  setIsModalOpen,
  red,
  hasInput,
  folderName,
  share,
  url,
  addLink,
}) {
  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.ModalCancelIcon
          src={cancelIcon}
          onClick={() => setIsModalOpen(false)}
        />
        <S.ModalTitle>{title}</S.ModalTitle>
        {hasInput && <S.ModalInput placeholder="내용 입력" />}
        {folderName && <S.ModalDetail>{folderName}</S.ModalDetail>}
        {url && <S.ModalDetail>{url}</S.ModalDetail>}
        {share && <ModalFolderShare />}
        {addLink && <ModalAddToFolder />}
        {!share && <S.ModalButton red={red}>{buttonText}</S.ModalButton>}
      </S.ModalContainer>
    </S.ModalWrapper>
  );
}

export const ModalMaker = ({ feature, setIsModalOpen, folderName, url }) => {
  let modal;
  switch (feature) {
    case "이름 변경":
      modal = (
        <Modal
          title="폴더 이름 변경"
          buttonText="변경하기"
          hasInput
          setIsModalOpen={setIsModalOpen}
        />
      );
      break;
    case "폴더 추가 +":
      modal = (
        <Modal
          title="폴더 추가"
          buttonText="추가하기"
          hasInput
          setIsModalOpen={setIsModalOpen}
        />
      );
      break;
    case "공유":
      modal = (
        <Modal
          title="폴더 공유"
          setIsModalOpen={setIsModalOpen}
          folderName={folderName}
          share
        />
      );
      break;

    case "삭제":
      modal = (
        <Modal
          title="폴더 삭제"
          buttonText="삭제하기"
          folderName={folderName}
          red
          setIsModalOpen={setIsModalOpen}
        />
      );
      break;
    case "삭제하기":
      modal = (
        <Modal
          title="링크 삭제"
          buttonText="삭제하기"
          red
          url={url}
          setIsModalOpen={setIsModalOpen}
        />
      );
      break;
    case ("폴더에 추가", "추가하기"):
      modal = (
        <Modal
          title="폴더에 추가"
          url={url}
          buttonText="추가하기"
          addLink
          setIsModalOpen={setIsModalOpen}
        />
      );
      break;
  }
  return modal;
};

export default Modal;
