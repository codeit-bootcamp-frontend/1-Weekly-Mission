import { useEffect } from 'react';
import * as Modal from '../Modal.style';
import * as S from './Share.style';
import KAKAO from 'assets/icons/kakaotalk-large.svg';
import FACEBOOK from 'assets/icons/facebook-large.svg';
import SHARE_LINK from 'assets/icons/share-link.svg';

function Share({ folderName, folderId, userId }) {
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

  const copyLinkClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(realUrl);
    } catch (err) {
      console.error(err);
    }
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
        <ShareBox
          imgSrc={KAKAO}
          imgAlt='카카오톡으로 공유하기'
          onClick={shareToKakao}
        >
          카카오톡
        </ShareBox>
        <ShareBox
          imgSrc={FACEBOOK}
          imgAlt='페이스북으로 공유하기'
          onClick={shareToFacebook}
        >
          페이스북
        </ShareBox>
        <ShareBox
          imgSrc={SHARE_LINK}
          imgAlt='링크 주소 복사하기'
          onClick={copyLinkClipBoard}
        >
          링크 복사
        </ShareBox>
      </S.ShareContainer>
    </>
  );
}

export default Share;

function ShareBox({ children, imgSrc, imgAlt, onClick }) {
  return (
    <S.Share>
      <button onClick={() => onClick()}>
        <img src={imgSrc} alt={imgAlt} />
      </button>
      <S.ShareText>{children}</S.ShareText>
    </S.Share>
  );
}
