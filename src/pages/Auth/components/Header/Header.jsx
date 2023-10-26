import { Link } from 'react-router-dom';
import * as S from './Header.style';
import A11y from 'components/A11y';
import LB_LOGO from 'assets/icons/linkbrary.svg';

const TEXT = {
  signin: {
    a11y: '링크브러리 로그인',
    redirect: '회원이 아니신가요?',
    redirectLink: '회원 가입하기',
  },
  signup: {
    a11y: '링크브러리 회원가입',
    redirect: '이미 회원이신가요?',
    redirectLink: '로그인 하기',
  },
};

function Header({ type }) {
  const redirectUrl = {
    signin: '/signup',
    signup: '/signin',
  };
  return (
    <S.HeaderContainer>
      <A11y>{TEXT[type].A11y}</A11y>
      <Link to='/'>
        <S.Logo src={LB_LOGO} alt='링크브러리 로고' />
      </Link>
      <S.Redirect>
        {TEXT[type].redirect}
        <S.RedirectLink to={redirectUrl[type]}>
          {TEXT[type].redirectLink}
        </S.RedirectLink>
      </S.Redirect>
    </S.HeaderContainer>
  );
}

export default Header;
