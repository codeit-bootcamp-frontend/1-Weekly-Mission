import * as S from './Social.style';
import GOOGLE from 'assets/icons/google.png';
import KAKAO from 'assets/icons/kakotalk.svg';

function Social() {
  return (
    <S.SocialContainer>
      <S.Text>소셜 로그인</S.Text>
      <S.SnsContainer>
        <S.Google href='https://google.com'>
          <img src={GOOGLE} alt='구글 로고' />
        </S.Google>
        <S.Kakao href='https://www.kakaocorp.com/page/'>
          <img src={KAKAO} alt='카카오톡 로고' />
        </S.Kakao>
      </S.SnsContainer>
    </S.SocialContainer>
  );
}

export default Social;
