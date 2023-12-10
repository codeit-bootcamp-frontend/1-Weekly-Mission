import { useRef, useEffect, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import * as M from '../../style/styled-component/Modal/ModalStyledComponent';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  handleClick: () => void;
  title: string;
  id: string;
}

export default function FolderShareModal({ handleClick, title, id }: Props) {
  const { Kakao }: any = window;
  const resultUrl = `window.location.href/${id}`;
  const BASEURL = 'localhost:3000';
  const location = useRouter();

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('512cd8a8ece57b97899c8cc612089c7d');
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
            <KakadImgDiv>
              <Image src="/kakao.svg" fill alt="카카오톡" />
            </KakadImgDiv>
            <M.ModalShareName>카카오톡</M.ModalShareName>
          </M.ModalShareButton>
          <M.ModalShareButton onClick={onClickFacebook}>
            <FacebookImgDiv>
              <Image src="/facebookImg.svg" fill alt="페이스북" />
            </FacebookImgDiv>
            <M.ModalShareName>페이스북</M.ModalShareName>
          </M.ModalShareButton>
          <M.ModalShareButton
            onClick={() =>
              handleCopyClipBoard(`${BASEURL}${location.pathname}/${id}`)
            }
          >
            <LinkImgDiv>
              <Image src="/linkImg.svg" fill alt="링크 복사" />
            </LinkImgDiv>
            <M.ModalShareName>링크 복사</M.ModalShareName>
          </M.ModalShareButton>
        </M.ModalShareWrapper>
        <CloseImg
          src="/Xclose.svg"
          width={16}
          height={16}
          alt="닫기 버튼"
          onClick={handleClick}
        />
      </M.ModlaWrapper>
    </M.ModalBackground>
  );
}

const KakadImgDiv = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
`;

const FacebookImgDiv = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
`;

const LinkImgDiv = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
`;

const CloseImg = styled(Image)`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
`;
