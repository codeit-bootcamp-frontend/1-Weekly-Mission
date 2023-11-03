import styled from "styled-components";
import close from "../images/_close.svg";
import facebook from "../images/facebook.svg";
import kakao from "../images/Kakao.svg";
import link from "../images/Addlink.svg";
import check from "../images/check.svg";
import { useState, useEffect } from "react";
import shareKakao from "../ShareSns.js";
import { getUserLogin } from "../api.js";
export function Modalkebab({ url, title, buttonTitle, color, onClose }) {
  return (
    <ModalWrapper>
      <ModalTitle>{title}</ModalTitle>
      <ModalClose src={close} onClick={onClose} />
      <ModalUrl>{url}</ModalUrl>
      <ModalButton color={color}>{buttonTitle}</ModalButton>
    </ModalWrapper>
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
      <ModalWrapper>
        <ModalTitle>{LinkOptions.modalTitle}</ModalTitle>
        <ModalClose src={close} onClick={onClose} />
        <>
          {LinkOptions.name !== "이름 변경" ? (
            <ModalUrl>{folderName || "전체"}</ModalUrl>
          ) : (
            <ModalInput placeholder={LinkOptions.name} />
          )}
        </>
        {LinkOptions.name !== "공유" ? (
          <ModalButton color={LinkOptions.color}>
            {LinkOptions.buttonTitle}
          </ModalButton>
        ) : (
          <IconBox>
            <IconWrapper>
              <Kakao src={kakao} onClick={handleShareKakao} />
              <span>카카오톡</span>
            </IconWrapper>
            <IconWrapper>
              <Facebook src={facebook} onClick={handleShareFacebook} />
              <span>페이스북</span>
            </IconWrapper>
            <IconWrapper>
              <Linkadd src={link} onClick={handleCopyClip} />
              <span>링크 복사</span>
            </IconWrapper>
          </IconBox>
        )}
      </ModalWrapper>
    </>
  );
}

export function ModalAddFolder({ selectItems, CloseMAF }) {
  const [isNominated, setIsNominated] = useState("");

  const handleNominateName = (e) => setIsNominated(e.target.innerText);
  return (
    <AddFolderWrapper>
      <ModalClose src={close} onClick={CloseMAF} />
      <AddFolderHeader>
        <AddFolderTitle> 폴더에 추가</AddFolderTitle>
        <AddFolderLink>link</AddFolderLink>
      </AddFolderHeader>
      <AddFolderMain>
        {selectItems.map((item) => {
          return (
            <AddFolderSection $isSelected={isNominated === item.name}>
              <AddFolderName onClick={handleNominateName}>
                {item.name}
              </AddFolderName>
              <AddFolderCount>{`${item?.link?.count}개 링크`}</AddFolderCount>
              {isNominated === item.name ? <CheckIcon src={check} /> : ""}
            </AddFolderSection>
          );
        })}
      </AddFolderMain>
      <AddFolderButton>추가하기</AddFolderButton>
    </AddFolderWrapper>
  );
}

const ModalWrapper = styled.div`
  width: 362px;
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 15px;
  border: 1px solid var(--linkbrary-gray-20, #ccd5e3);
  background: var(--linkbrary-white, #fff);
  z-index: 500;
`;
const ModalClose = styled.img`
  position: absolute;
  left: 320px;
  top: 16px;
`;
const ModalInput = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);
`;

const ModalButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: ${({ color }) =>
    color === "blue"
      ? "var(--linkbrary-primary-color, #6d6afe)"
      : "var(--linkbrary-red, #FF5B56)"};
`;

const IconBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const Kakao = styled.img`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 37.333px;
  background: #fee500;
`;

const Facebook = styled(Kakao)`
  background: #1877f2;
`;
const Linkadd = styled(Kakao)`
  background: rgba(157, 157, 157, 0.04);
`;

const ModalTitle = styled.p`
  color: var(--linkbrary-gray-100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ModalUrl = styled.p`
  color: var(--linkbrary-gray-60, #9fa6b2);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;

const AddFolderWrapper = styled.div`
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid var(--linkbrary-gray-20, #ccd5e3);
  background: var(--linkbrary-white, #fff);
  z-index: 500;
  border-radius: 15px;
  cursor: pointer;
`;

const AddFolderHeader = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

const AddFolderTitle = styled.div`
  color: var(--linkbrary-gray-100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const AddFolderLink = styled.div`
  color: var(--linkbrary-gray-60, #9fa6b2);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

const AddFolderMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const AddFolderSection = styled.div`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? `var(--linkbrary-bg, #F0F6FF)` : ``};
`;

const AddFolderButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;

const AddFolderName = styled.span`
  color: var(--linkbrary-gray-100, #373740);

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const AddFolderCount = styled.span`
  color: var(--linkbrary-gray-60, #9fa6b2);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CheckIcon = styled.img`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
`;
