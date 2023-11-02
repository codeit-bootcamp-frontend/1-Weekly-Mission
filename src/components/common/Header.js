import { styled } from 'styled-components';
import Profile from './Profile.js';
import LoginBtn from './Button/LoginBtn.js';
import useGetUser from 'hooks/useGetUser';
import useGetSampleUser from 'hooks/useGetSampleUser';
import logoImg from 'assets/images/logo.svg';

function Header({ page = '' }) {
  const sampleuser = useGetSampleUser();
  const user = useGetUser(1);
  const userData = page === 'shared' ? sampleuser : user;

  return (
    <Outer page={page}>
      <Container>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <LogoImg src={logoImg} alt="Linkbrary 메인 페이지 바로가기" />
        </a>
        {userData ? <Profile user={userData} /> : <LoginBtn />}
      </Container>
    </Outer>
  );
}

export default Header;

const Outer = styled.header`
  width: 100%;
  padding: 20px 200px;
  background: var(--bg);
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
  position: ${({ page }) => (page === 'shared' ? 'fixed' : null)};

  @media (max-width: 1199px) {
    padding: 20px 32px;
  }

  @media (max-width: 767px) {
    padding: 13px 32px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1199px) {
    max-width: 799px;
  }
`;

const LogoImg = styled.img`
  @media (max-width: 1199px) {
    height: 24px;
  }
  @media (max-width: 767px) {
    height: 18px;
  }
`;
