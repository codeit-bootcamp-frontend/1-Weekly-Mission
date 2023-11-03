import * as Modal from '../Modal.style';
import * as S from './Share.style';
import Layout from '../Layout';
import KAKAO from 'assets/icons/kakaotalk-large.svg';
import FACEBOOK from 'assets/icons/facebook-large.svg';
import SHARE_LINK from 'assets/icons/share-link.svg';

function Share({ closeModal, folderName }) {
  return (
    <Layout closeModal={closeModal}>
      <Modal.Header>
        <Modal.Title>폴더 공유</Modal.Title>
        <Modal.Description>{folderName}</Modal.Description>
      </Modal.Header>
      <S.ShareContainer>
        <S.Share>
          <button>
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
