import { useRef, useEffect, MouseEvent } from 'react';
import xClose from '../../asset/Xclose.svg';
import kakao from '../../asset/kakao.svg';
import facebookImg from '../../asset/facebookImg.svg';
import linkImg from '../../asset/linkImg.svg';
import { useLocation } from 'react-router-dom';
import * as M from '../styled-component/ModalStyledCompoenet';
const { Kakao }: any = window;

interface Props {
  handleClick: () => void;
  title: string;
  id: string;
}

export default function FolderShareModal({ handleClick, title, id }: Props) {
  const resultUrl = `window.location.href/${id}`;
  const BASEURL = 'localhost:3000';
  const location = useLocation();
  const kakaoApiKey = process.env.REACT_APP_KAKAO_SHARE_API;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(kakaoApiKey);
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Linkbrary',
        description: 'Share,Folder',
        imageUrl: 'https://i.ibb.co/XVh88Vs/image.jpg',
        link: {
          mobileWebUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: '모바일 버튼',
          link: {
            mobileWebUrl: resultUrl,
          },
        },
      ],
    });
  };
  const onClickFacebook = () => {
    window.open(
      `http://www.facebook.com/sharer.php?u=${BASEURL}${location.pathname}/${id}`
    );
  };

  const back = useRef<HTMLDivElement>(null);
  const backClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === back.current) handleClick();
  };

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <M.ModalBackground ref={back} onClick={backClick}>
      <M.ModlaWrapper>
        <M.ModalHeader>폴더 공유</M.ModalHeader>
        <M.ModalLinkUrl>{title}</M.ModalLinkUrl>
        <M.ModalShareWrapper>
          <M.ModalShareButton
            onClick={() => {
              shareKakao();
            }}
          >
            <img src={kakao} alt="카카오톡" />
            <M.ModalShareName>카카오톡</M.ModalShareName>
          </M.ModalShareButton>
          <M.ModalShareButton onClick={onClickFacebook}>
            <img src={facebookImg} alt="페이스북" />
            <M.ModalShareName>페이스북</M.ModalShareName>
          </M.ModalShareButton>
          <M.ModalShareButton
            onClick={() =>
              handleCopyClipBoard(`${BASEURL}${location.pathname}/${id}`)
            }
          >
            <img src={linkImg} alt="링크 복사" />
            <M.ModalShareName>링크 복사</M.ModalShareName>
          </M.ModalShareButton>
        </M.ModalShareWrapper>
        <M.CloseImg src={xClose} alt="닫기 버튼" onClick={handleClick} />
      </M.ModlaWrapper>
    </M.ModalBackground>
  );
}
