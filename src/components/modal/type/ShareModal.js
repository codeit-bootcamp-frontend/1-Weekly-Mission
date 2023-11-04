import styled from 'styled-components';
import { Link } from 'react-router-dom';
import kakaoIcon from '../../../assets/Modal_kakaoTalk_icon.svg';
import facebookIcon from '../../../assets/Modal_facebook_icon.svg';
import linkCopyIcon from '../../../assets/Modal_linkCopy_icon.svg';

function ShareModal({ subTitle, currentPath }) {
  const host = 'http://localhost:3000';
  const facebookShareUrl = 'http://www.facebook.com/sharer.php?u=';

  const copyClipboard = () => {
    navigator.clipboard
      .writeText(host + currentPath)
      .then(() => {
        alert('클립보드에 복사되었습니다.');
      })
      .catch((err) => {
        console.error('URL 복사 실패:', err);
      });
  };

  const shareFacebook = () => {
    window.open(facebookShareUrl + host + currentPath); // localhost라서 오류 발생..
  };

  return (
    <>
      <P>{subTitle}</P>
      <Container>
        <Button>
          <img src={kakaoIcon} alt="카카오톡으로 폴더 공유" />
          <p>카카오톡</p>
        </Button>
        <Button onClick={shareFacebook}>
          <img src={facebookIcon} alt="페이스북으로 폴더 공유" />
          <p>페이스북</p>
        </Button>
        <Button onClick={copyClipboard}>
          <img src={linkCopyIcon} alt="폴더 링크 복사" />
          <p>링크 복사</p>
        </Button>
      </Container>
    </>
  );
}

const P = styled.p`
  margin-top: 0.8rem;
  color: var(--gray60);
  text-align: center;
  font-size: 1.4rem;
  line-height: 2.2rem;
`;

const Container = styled.div`
  margin-top: 2.4rem;
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
`;

// 링크? 공유 가능한 태그로 바꿔야 함. 마지막에...
const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 0;

  p {
    color: var(--black);
    text-align: center;
    font-family: Inter;
    font-size: 1.3rem;
    line-height: 1.5rem;
  }
`;

export default ShareModal;
