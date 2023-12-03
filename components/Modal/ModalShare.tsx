import { useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import KakaoShareImage from "@/public/images/kakao-share.svg";
import FacebookShareImage from "@/public/images/facebook-share.svg";
import CopyLinkImage from "@/public/images/copylink.svg";
import CloseImage from "@/public/images/close.svg";

interface ModalShareProps {
  modalOpen: boolean;
  title: string;
  name: string;
  setModalOpen: (value: boolean) => void;
}

const IconBox = ({ name }: { name: string }) => {
  // 링크 복사 클릭 시 발생하는 함수
  const copyLink = async () => {
    const currentUrl = window.location.href;
    await navigator.clipboard.writeText(currentUrl);
    alert("클립보드에 복사 되었습니다.");
  };

  // 페이스북 공유
  const handleFaceBookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
      "페이스북 공유하기",
      "width=600,height=800,location=no,status=no,scrollbars=yes"
    );
  };

  const handleKakaoShare = async () => {
    await window.Kakao.Share.sendDefault({
      objectType: "text",
      text: `카카오톡 공유`,
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href,
      },
    });
  };

  return (
    <StyledIconBox>
      {name === "카카오톡" ? (
        <StyledButton onClick={handleKakaoShare}>
          <KakaoShareImage />
        </StyledButton>
      ) : name === "페이스북" ? (
        <StyledButton onClick={handleFaceBookShare}>
          <FacebookShareImage />
        </StyledButton>
      ) : (
        <StyledButton onClick={copyLink}>
          <CopyLinkImage />
        </StyledButton>
      )}
      <p>{name}</p>
    </StyledIconBox>
  );
};

const ModalShare = ({
  modalOpen,
  title,
  name,
  setModalOpen,
}: ModalShareProps) => {
  const outside = useRef<HTMLDivElement>(null);
  const shareItems = ["카카오톡", "페이스북", "링크 복사"];
  return (
    <>
      {modalOpen &&
        createPortal(
          <>
            <StyledBackground
              ref={outside}
              onClick={(e) => {
                if (e.target == outside.current) setModalOpen(false);
              }}
            ></StyledBackground>
            <StyledModalBox>
              <StyledModalFrameBox>
                <h2>{title}</h2>
                <StyledModalInnerBox>
                  <p>{name}</p>
                </StyledModalInnerBox>
                <StyledModalIconsBox>
                  {shareItems.map((shareItem) => (
                    <IconBox key={shareItem} name={shareItem} />
                  ))}
                </StyledModalIconsBox>
              </StyledModalFrameBox>
              <StyledModalCloseButton onClick={() => setModalOpen(false)}>
                <CloseImage alt="CLOSE" />
              </StyledModalCloseButton>
            </StyledModalBox>
          </>,
          document.querySelector("#modal-root") as HTMLDivElement
        )}
    </>
  );
};

export default ModalShare;

const StyledBackground = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.56);
`;

const StyledModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 36rem;
  height: 20.9rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
  border: 1px solid var(--linkbrary-gray-20);
  background-color: var(--linkbrary-white);
`;

const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledModalFrameBox = styled.div`
  display: flex;
  padding: 3.2rem 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  h2 {
    color: var(--linkbrary-gray-100);
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const StyledModalInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  p {
    color: var(--linkbrary-gray-60);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
`;

const StyledModalIconsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

const StyledIconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  p {
    color: var(--linkbrary-gray-100);
    text-align: center;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 115.385% */
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
