import * as S from "./Gnb.style";
import logoImg from "assets/images/logo.svg";
import Button from 'components/Button';

function Gnb() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>
          <img src={logoImg} alt="로고 이미지" />
        </S.Logo>
        <Button>로그인</Button>
      </S.Wrapper>
    </S.Container>
  );
}

export default Gnb;
