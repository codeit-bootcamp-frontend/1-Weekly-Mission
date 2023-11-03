import { useEffect } from 'react';
import * as Modal from '../Modal.style';
import * as S from './Share.style';
import Layout from '../Layout';
import KAKAO from 'assets/icons/kakaotalk-large.svg';
import FACEBOOK from 'assets/icons/facebook-large.svg';
import SHARE_LINK from 'assets/icons/share-link.svg';

function Share({ closeModal, folderName, folderId, userId }) {
  const { Kakao } = window;

  const testUrl = 'http://localhost:3000';
  const realUrl = `https://https://linkbrary-geon.netlify.app/shared?user=${userId}&folder=${folderId}`;

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'LINKBRARY',
        description: '링크 공유',
        imageUrl:
          'https://cdn.discordapp.com/attachments/1155018218507870219/1169891810647212083/linkbrary.png?ex=65570da7&is=654498a7&hm=001d723c49b5b5d454a486a81a920b54e62115649e6a0709297a6fdd20981b7e&',
        link: {
          mobileWebUrl: testUrl,
        },
      },
      buttons: [
        {
          title: '나도 보러 가기',
          link: {
            mobileWebUrl: testUrl,
          },
        },
      ],
    });
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('014f7aa5b4ac80b12ce4c83b35240a45');
  }, []);

  return (
    <Layout closeModal={closeModal}>
      <Modal.Header>
        <Modal.Title>폴더 공유</Modal.Title>
        <Modal.Description>{folderName}</Modal.Description>
      </Modal.Header>
      <S.ShareContainer>
        <S.Share>
          <button onClick={() => shareKakao()}>
            <img src={KAKAO} alt='카카오톡으로 공유하기' />
          </button>
          <S.ShareText>카카오톡</S.ShareText>
        </S.Share>
        <S.Share>
          <button>
            <img src={FACEBOOK} alt='카카오톡으로 공유하기' />
          </button>
          <S.ShareText>페이스북</S.ShareText>
        </S.Share>
        <S.Share>
          <button>
            <img src={SHARE_LINK} alt='카카오톡으로 공유하기' />
          </button>
          <S.ShareText>링크 복사</S.ShareText>
        </S.Share>
      </S.ShareContainer>
    </Layout>
  );
}

export default Share;
