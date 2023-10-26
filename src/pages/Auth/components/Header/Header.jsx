import { Link } from 'react-router-dom';
import * as S from './Header.style';
import A11y from 'components/A11y';
import LB_LOGO from 'assets/icons/linkbrary.svg';

function Header() {
  return (
    <S.HeaderContainer>
      <A11y>링크브러리 로그인</A11y>
      <Link to='/'>
        <S.Logo src={LB_LOGO} alt='링크브러리 로고' />
      </Link>
      <S.Redirect class='auth__redirect'>
        회원이 아니신가요?
        <S.RedirectLink href='/pages/signup.html' class='auth__redirect-link'>
          회원 가입하기
        </S.RedirectLink>
      </S.Redirect>
    </S.HeaderContainer>
  );
}

export default Header;
