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

function ShareBox({ clickEvent, src, alt, content }) {
  return (
    <>
      <button onClick={clickEvent}>
        <img src={src} alt={alt} />
      </button>
      <p>{content}</p>
    </>
  );
}

function ModalShareButton({ shareKakao, shareFacebook, shareLink }) {
  return (
    <Wrapper>
      <ButtonWrapper>
        <ShareBox
          clickEvent={shareKakao}
          src={KakaoTalk}
          alt="카카오톡"
          content="카카오톡"
        />
      </ButtonWrapper>
      <ButtonWrapper>
        <ShareBox
          clickEvent={shareFacebook}
          src={Facebook}
          alt="페이스북"
          content="페이스북"
        />
      </ButtonWrapper>
      <ButtonWrapper>
        <ShareBox
          clickEvent={shareLink}
          src={Link}
          alt="링크 복사"
          content="링크 복사"
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default ModalShareButton;
