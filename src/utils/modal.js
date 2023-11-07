import imgClose from "../assets/close.svg"
import imgKakao from "../assets/kakao.svg"
import imgFB from "../assets/modalfacebook.svg"
import imgLink from "../assets/modallink.svg"
import imgCheck from "../assets/check.svg"
import { useSearchParams } from "react-router-dom"
import { useEffect, useRef } from "react"
import { S } from "./modal.styled"

function ModalTitle({ modalName, title }) {
  return (
    <S.DivModalText>
      <h1>{modalName}</h1>
      {title && <p>{title}</p>}
    </S.DivModalText>
  )
}

function CopyResult({ copyResult }) {
  return (
    <S.CopyWrapper ref={copyResult} >
      <S.CopyContent>
        클립보드에 복사되었습니다!<br />
        원하는 곳에 붙여넣기 해주세요.
      </S.CopyContent>
    </S.CopyWrapper>
  )
}

function ModalShare() {
  const copyResult = useRef();
  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId")
  const sharedLink = encodeURIComponent(`linkbrary.com/shared?user=1&folder=${folderId}}`);

  const shareToKakaoTalk = () => {
    if (window.Kakao === undefined) {
      return;
    }

    const kakao = window.Kakao;
    const KAKAO_SHARE_KEY = '370ed21f60e01fcaad0dd0e0e42f6859';

    if (!kakao.isInitialized()) {
      kakao.init(KAKAO_SHARE_KEY);
    }

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Linkabrary',
        description: '세상의 모든 링크를 저장하세요.',
        imageUrl: '',
        link: {
          mobileWebUrl: '카카오공유하기 시 클릭 후 이동 경로',
          webUrl: '카카오공유하기 시 클릭 후 이동 경로',
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: '카카오공유하기 시 클릭 후 이동 경로',
            webUrl: '카카오공유하기 시 클릭 후 이동 경로',
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
    copyResult.current.classList.add("active")
    setTimeout(() => copyResult.current.classList.remove("active"), 2000)
  }

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
    <S.SnsWrapper>
      <S.Sns src={imgKakao} onClick={shareToKakaoTalk} text="카카오톡" alt="카카오톡으로 공유하기" />
      <S.Sns src={imgFB} onClick={shareToFacebook} text="페이스북" alt="페이스북으로 공유하기" />
      <S.Sns src={imgLink} onClick={shareToClipboard} text="링크 복사" alt="링크 복사하기" />
      <CopyResult copyResult={copyResult} />
    </S.SnsWrapper>
  )
}

function ModalAdd({ data }) {
  return (
    <S.UlModal>
      {data?.map(value => (
        <li key={value.id}>
          <button>
            <h2>{value.name}</h2>
            <p>{value.link.count}개 링크</p>
            <img src={imgCheck} alt="이 폴더에 추가합니다." />
          </button>
        </li>
      ))}
    </S.UlModal>
  )
}

function ModalCloseButton({ handleClick }) {
  return (
    <S.ButtonClose onClick={handleClick}>
      <img src={imgClose} alt="현재 띄워진 창을 닫는 버튼" />
    </S.ButtonClose>
  )
}

export function Modal({ title, modalName, placeholder, buttonColor, buttonText, share, add, data, setModal }) {
  const handleClick = (event) => {
    setModal(null);
  }

  const stop = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <S.DivModalWrapper onClick={handleClick} >
      <S.DivModalContents onClick={stop}>
        <ModalTitle modalName={modalName} title={title} />
        {share && <ModalShare />}
        {add && <ModalAdd data={data} />}
        {placeholder && <S.InputSubmit placeholder={placeholder} />}
        {buttonText && <S.ButtonSubmit color={buttonColor}>{buttonText}</S.ButtonSubmit>}
        <ModalCloseButton handleClick={handleClick} />
      </S.DivModalContents>
    </S.DivModalWrapper>
  )
}

export const makeModal = ({ title, type, data, setModal }) => {
  let modal;
  switch (type) {
    case "폴더 추가":
      modal = (
        <Modal modalName="폴더 추가" placeholder="폴더 이름을 입력해주세요." buttonText="추가하기" setModal={setModal} />
      )
      break;
    case "공유":
      modal = (
        <Modal modalName="폴더 공유" title={title} share setModal={setModal} />
      )
      break;
    case "이름 변경":
      modal = (
        <Modal modalName="폴더 이름 변경" placeholder="변경할 이름을 입력해주세요." buttonText="변경하기" setModal={setModal} />
      )
      break;
    case "삭제":
      modal = (
        <Modal modalName="폴더 삭제" title={title} buttonText="삭제하기" buttonColor="red" setModal={setModal} />
      )
      break;
    case "삭제하기":
      modal = (
        <Modal modalName="링크 삭제" title={title} buttonText="삭제하기" setModal={setModal} />
      )
      break;
    case "추가하기":
      modal = (
        <Modal modalName="폴더에 추가" title={title} buttonText="추가하기" add data={data} setModal={setModal} />
      )
      break;
    case "폴더에 추가":
      modal = (
        <Modal modalName="폴더에 추가" title={title} buttonText="추가하기" add data={data} setModal={setModal} />
      )
      break;

    default:
  }
  return modal
}