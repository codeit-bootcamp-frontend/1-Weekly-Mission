import styled from 'styled-components';
import { Link } from 'react-router-dom';
import kakaoIcon from '../../../assets/Modal_kakaoTalk_icon.svg';
import facebookIcon from '../../../assets/Modal_facebook_icon.svg';
import linkCopyIcon from '../../../assets/Modal_linkCopy_icon.svg';

function ShareModal() {
  return (
    <>
      <P>폴더명</P>
      <Container>
        <Div>
          <img src={kakaoIcon} alt="카카오톡으로 폴더 공유" />
          <p>카카오톡</p>
        </Div>
        <Div>
          <img src={facebookIcon} alt="페이스북으로 폴더 공유" />
          <p>페이스북</p>
        </Div>
        <Div>
          <img src={linkCopyIcon} alt="폴더 링크 복사" />
          <p>링크 복사</p>
        </Div>
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
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  p {
    color: var(--black);
    text-align: center;
    font-family: Inter;
    font-size: 1.3rem;
    line-height: 1.5rem;
  }
`;

export default ShareModal;
