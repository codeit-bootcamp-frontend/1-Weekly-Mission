import * as Modal from '../Modal.style';
import * as S from './Share.style';
import { ReactNode, useEffect } from 'react';
import CopyToClipboard from '@/components/Toast/CopyToClipboard';
import ToastPortals from '@/components/Toast/ToastPortals';
import useToast from '@/hooks/useToast';
import { IconFacebook, IconKakaotalk, IconShareLink } from '@/public/svgs';

declare global {
  interface Window {
    Kakao: any;
  }
}

interface Props {
  folderName: string;
  folderId: number;
  userId: number;
}

function Share({ folderName, folderId, userId }: Props) {
  const { Kakao } = window;

  const realUrl = `https://linkbrary-geon.netlify.app/shared?user=${userId}&folder=${folderId}`;

  const shareToKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'LINKBRARY',
        description: '링크 공유',
        imageUrl:
          'https://cdn.discordapp.com/attachments/1155018218507870219/1169891810647212083/linkbrary.png?ex=65570da7&is=654498a7&hm=001d723c49b5b5d454a486a81a920b54e62115649e6a0709297a6fdd20981b7e&',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '나도 보러 가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  const shareToFacebook = () => {
    window.open(
      `http://www.facebook.com/sharer/sharer.php?u=${realUrl}`,
      '페이스북 공유하기',
      'width=600,height=800,location=no,status=no,scrollbars=yes'
    );
  };

  const [showCopy, setShowCopy] = useToast(2000);

  const copyLinkClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(realUrl);
    } catch (err) {
      console.error(err);
    }
    setShowCopy();
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('014f7aa5b4ac80b12ce4c83b35240a45');
  }, []);

  return (
    <>
      <Modal.Header>
        <Modal.Title>폴더 공유</Modal.Title>
        <Modal.Description>{folderName}</Modal.Description>
      </Modal.Header>
      <S.ShareContainer>
        <ShareBox icon={IconKakaotalk} onClick={shareToKakao}>
          카카오톡
        </ShareBox>
        <ShareBox icon={IconFacebook} onClick={shareToFacebook}>
          페이스북
        </ShareBox>
        <ShareBox icon={IconShareLink} onClick={copyLinkClipBoard}>
          링크 복사
        </ShareBox>
      </S.ShareContainer>
      <ToastPortals>
        <CopyToClipboard show={showCopy} />
      </ToastPortals>
    </>
  );
}

export default Share;

interface ShareBoxProps {
  children: ReactNode;
  icon: JSX.Element;
  onClick: () => void;
}

function ShareBox({ children, icon, onClick }: ShareBoxProps) {
  return (
    <S.Share>
      <button onClick={() => onClick()}>{icon}</button>
      <S.ShareText>{children}</S.ShareText>
    </S.Share>
  );
}
