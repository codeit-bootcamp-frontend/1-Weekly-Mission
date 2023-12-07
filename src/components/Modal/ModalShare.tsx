import * as S from './Modal.style';
import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

interface Props {
  folderName: string;
  folderId: string | undefined;
}

function ModalShare({ folderName, folderId }: Props) {
  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'text',
      text: '카카오톡 공유하기',
      link: {
        webUrl: `${window.location.host}/shared?user=1&folder=${folderId}`,
      },
    });
  };

  const handleShareFacebook = () => {
    window.open(
      `http://www.facebook.com/sharer.php?u=${window.location.host}/shared?user=1&folder=${folderId}`
    );
  };

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크 복사');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!(window as any).Kakao.isInitialized()) {
      (window as any).Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, []);

  return (
    <>
      <S.TitleContainer>
        <S.Title>폴더 공유</S.Title>
        <S.Subtitle>{folderName}</S.Subtitle>
      </S.TitleContainer>
      <S.IconsBox>
        <S.Icon onClick={() => handleShareKakao()}>
          <S.KaKaotalkIconImgContainer>
            <img src='/assets/images/kakao.svg' alt='카카오톡 아이콘' />
          </S.KaKaotalkIconImgContainer>
          <p>카카오톡</p>
        </S.Icon>
        <S.Icon onClick={() => handleShareFacebook()}>
          <S.FacebookIconImgContainer>
            <img src='/assets/images/facebook.svg' alt='페이스북 아이콘' />
          </S.FacebookIconImgContainer>
          <p>페이스북</p>
        </S.Icon>
        <S.Icon onClick={() => handleCopyClipBoard(`${window.location.href}`)}>
          <S.IconImgContainer>
            <img src='/assets/images/link.svg' alt='링크 복사 아이콘' />
          </S.IconImgContainer>
          <p>링크 복사</p>
        </S.Icon>
      </S.IconsBox>
    </>
  );
}

export default ModalShare;
