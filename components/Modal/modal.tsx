import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import imgCheck from "src/assets/check.svg";
import imgClose from "src/assets/close.svg";
import imgKakao from "src/assets/kakao.svg";
import imgFB from "src/assets/modalfacebook.svg";
import imgLink from "src/assets/modallink.svg";
import ModalFrame from "src/components/Modal/ModalFrame";
import { ButtonClose, ButtonSubmit, Contents, CopyText, InputSubmit, List, SnsWrapper, Text, WrapperCopy } from "src/components/Modal/modal.styled";
import { FolderData } from "src/utils/getData.type";

interface MakeModalProps {
  title?: string;
  type?: string;
  data?: {};
  setModal: React.Dispatch<React.SetStateAction<React.ReactElement | null>>;
}

export const makeModal = ({ title, type, data, setModal }: MakeModalProps) => {
  let modal;
  switch (type) {
    case "폴더 추가":
      modal = <Modal modalName="폴더 추가" placeholder="폴더 이름을 입력해주세요." buttonText="추가하기" setModal={setModal} />;
      break;
    case "공유":
      modal = <Modal modalName="폴더 공유" title={title} share setModal={setModal} />;
      break;
    case "이름 변경":
      modal = <Modal modalName="폴더 이름 변경" placeholder="변경할 이름을 입력해주세요." buttonText="변경하기" setModal={setModal} />;
      break;
    case "삭제":
      modal = <Modal modalName="폴더 삭제" title={title} buttonText="삭제하기" buttonColor="red" setModal={setModal} />;
      break;
    case "삭제하기":
      modal = <Modal modalName="링크 삭제" title={title} buttonText="삭제하기" setModal={setModal} />;
      break;
    case "추가하기":
      modal = <Modal modalName="폴더에 추가" title={title} buttonText="추가하기" add data={data} setModal={setModal} />;
      break;
    case "폴더에 추가":
      modal = <Modal modalName="폴더에 추가" title={title} buttonText="추가하기" add data={data} setModal={setModal} />;
      break;
  }
  return modal!;
};

interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<React.ReactElement | null>>;
  modalName: string;
  title?: string;
  placeholder?: string;
  buttonColor?: string;
  buttonText?: string;
  share?: boolean;
  add?: boolean;
  data?: {};
}

export function Modal({ title, modalName, placeholder, buttonColor, buttonText, share, add, data, setModal }: ModalProps) {
  const handleClose = (event: React.SyntheticEvent) => {
    setModal(null);
  };

  const stop = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <ModalFrame onClick={handleClose}>
      <Contents onClick={stop}>
        <ModalTitle modalName={modalName} title={title as string} />
        {share && <ModalShare />}
        {add && <ModalAdd data={data as FolderData[]} />}
        {placeholder && <InputSubmit placeholder={placeholder} />}
        {buttonText && <ButtonSubmit color={buttonColor}>{buttonText}</ButtonSubmit>}
        <ModalCloseButton handleClick={handleClose} />
      </Contents>
    </ModalFrame>
  );
}

interface IModalTitle {
  modalName: string;
  title: string;
}

function ModalTitle({ modalName, title }: IModalTitle) {
  return (
    <Text>
      <h1>{modalName}</h1>
      {title && <p>{title}</p>}
    </Text>
  );
}

declare global {
  interface Window {
    Kakao: any;
  }
}

function ModalShare() {
  const copyResult = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");
  const sharedLink = encodeURIComponent(`linkbrary.com/shared?user=1&folder=${folderId}}`);

  const shareToKakaoTalk = () => {
    if (window.Kakao === undefined) {
      return;
    }

    const kakao = window.Kakao;
    const KAKAO_SHARE_KEY = "370ed21f60e01fcaad0dd0e0e42f6859";

    if (!kakao.isInitialized()) {
      kakao.init(KAKAO_SHARE_KEY);
    }

    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkabrary",
        description: "세상의 모든 링크를 저장하세요.",
        imageUrl: "",
        link: {
          mobileWebUrl: "카카오공유하기 시 클릭 후 이동 경로",
          webUrl: "카카오공유하기 시 클릭 후 이동 경로",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "카카오공유하기 시 클릭 후 이동 경로",
            webUrl: "카카오공유하기 시 클릭 후 이동 경로",
          },
        },
      ],
    });
  };

  const shareToFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  const shareToClipboard = () => {
    navigator.clipboard.writeText(sharedLink);
    if (!copyResult.current?.classList.contains("active")) {
      copyResult.current?.classList.add("active");
      setTimeout(() => copyResult.current?.classList.remove("active"), 1500);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <SnsWrapper>
      <Sns src={imgKakao} onClick={shareToKakaoTalk} text="카카오톡" alt="카카오톡으로 공유하기" />
      <Sns src={imgFB} onClick={shareToFacebook} text="페이스북" alt="페이스북으로 공유하기" />
      <Sns src={imgLink} onClick={shareToClipboard} text="링크 복사" alt="링크 복사하기" />
      <CopyResult forwardRef={copyResult} />
    </SnsWrapper>
  );
}

interface Isns {
  src: string;
  alt: string;
  text: string;
  onClick: () => void;
}

export function Sns({ src, alt, text, onClick }: Isns) {
  return (
    <button onClick={onClick}>
      <img src={src} alt={alt} />
      <p>{text}</p>
    </button>
  );
}

interface ICopyResult {
  forwardRef: React.RefObject<HTMLDivElement>;
}

function CopyResult({ forwardRef }: ICopyResult) {
  return (
    <WrapperCopy ref={forwardRef}>
      <CopyText>
        클립보드에 복사되었습니다!
        <br />
        원하는 곳에 붙여넣기 해주세요.
      </CopyText>
    </WrapperCopy>
  );
}

type TmodalAdd = { data: FolderData[] };

function ModalAdd({ data }: TmodalAdd) {
  return (
    <List>
      {data?.map((value) => (
        <li key={value.id}>
          <button>
            <h2>{value.name}</h2>
            <p>{value.link.count}개 링크</p>
            <img src={imgCheck} alt="이 폴더에 추가합니다." />
          </button>
        </li>
      ))}
    </List>
  );
}

type TmodalClose = { handleClick: (event: React.MouseEvent) => void };

function ModalCloseButton({ handleClick }: TmodalClose) {
  return (
    <ButtonClose onClick={handleClick}>
      <img src={imgClose} alt="현재 띄워진 창을 닫는 버튼" />
    </ButtonClose>
  );
}
