import Facebook from 'assets/images/facebook.png';
import KakaoTalk from 'assets/images/kakao.png';
import Link from 'assets/images/link.png';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 9px;
  & > p {
    font-size: 1.3rem;
  }
`;

function ModalShareButton() {
  return (
    <Wrapper>
      <ButtonWrapper>
        <img src={KakaoTalk} alt="카카오톡" />
        <p>카카오톡</p>
      </ButtonWrapper>
      <ButtonWrapper>
        <img src={Facebook} alt="카카오톡" />
        <p>페이스북</p>
      </ButtonWrapper>
      <ButtonWrapper>
        <img src={Link} alt="카카오톡" />
        <p>링크 복사</p>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default ModalShareButton;
