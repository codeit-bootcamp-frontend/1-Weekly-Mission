import styled from "styled-components";
import { ModalMainContainer } from "./ModalStyledComponents";
import { modalState } from "../../recoil/modal";
import { useRecoilValue, useResetRecoilState } from "recoil";
import KakaoIcon from "@/public/assets/modal/img_kakao.png";
import FacebookIcon from "@/public/assets/modal/img_facebook.png";
import CloseIcon from "@/public/assets/modal/img_closeIcon.png";
import LinkCopyIcon from "@/public/assets/modal/img_share.png";
import Image from "next/image";

const ItemArr = [
  {
    src: KakaoIcon,
    title: "카카오톡",
  },
  {
    src: FacebookIcon,
    title: "페이스북",
  },
  {
    src: LinkCopyIcon,
    title: "링크 복사",
  },
];

const ShareFolderModal = () => {
  const { shareFolderModal } = useRecoilValue(modalState);
  const resetModalState = useResetRecoilState(modalState);
  const shareLink = `http://localhost:3001/shared?user=1&folder=${shareFolderModal.content.id}`;

  const shareKaKao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO);
      }

      kakao.Share.sendDefault({
        objectType: "text",
        text: "Linkbrary",
        link: {
          mobileWebUrl: shareLink,
          webUrl: shareLink,
        },
      });
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
    } catch (e) {
      alert(e);
    }
  };

  const handleShare = (title: string) => {
    if (title === "카카오톡") {
      shareKaKao();
      return;
    }

    if (title === "페이스북") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`);
      return;
    }

    copyLink();
    return;
  };

  return (
    <ModalMain>
      <Image
        src={CloseIcon}
        className="closeIcon"
        alt="closeIcon"
        onClick={resetModalState}
      />

      <div className="modalTitleContainer ">
        <div className="title">폴더 공유</div>
        <div className="link">{shareFolderModal.content.title}</div>
      </div>

      <div className="modalContentContainer">
        {ItemArr.map((e, index) => {
          return (
            <ModalContetnItem
              key={index}
              onClick={() => handleShare(e.title)}
              id="kakaotalk-sharing-btn"
            >
              <Image src={e.src} className={e.title} alt={e.title} />
              <div className="title">{e.title}</div>
            </ModalContetnItem>
          );
        })}
      </div>
    </ModalMain>
  );
};
export default ShareFolderModal;

const ModalMain = styled(ModalMainContainer)`
  .modalContentContainer {
    flex-direction: row;
    gap: 3.2rem;
    align-items: center;
    justify-content: center;
  }
`;

const ModalContetnItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  .title {
    color: var(--gray100);
    text-align: center;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;
