import Logo from 'assets/icon/logo.svg';
import Login from 'components/Login/Login';
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerRequestData, { getUserProfile } from 'services/api';
import { styled } from 'styled-components';
import './Header.css';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  position: ${({ pathname }) => (pathname === '/shared' ? 'fixed' : 'static')};
  padding: 3.3rem 20rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  @media (max-width: 1199px) {
    padding: 2rem 3.2rem;
    margin: 0 auto;
  }
  @media (max-width: 767px) {
    padding: 2rem 3.2rem;
    margin: 0 auto;
  }
`;

function Header() {
  const [getUser, setGetUser] = useState({});
  const { pathname } = useLocation();
  const sharedPage = pathname === '/shared';

  const loginInfo = useCallback(async () => {
    const headerResult = sharedPage ? await headerRequestData() : await getUserProfile();
    if (!headerResult) return;

    if (sharedPage) {
      setGetUser(headerResult);
    } else {
      const { data } = headerResult;
      setGetUser(data[0]);
    }
  }, [sharedPage]);

  useEffect(() => {
    loginInfo();
  }, [loginInfo]);
  const { id, email, profileImageSource, image_source } = getUser;

  return (
    <header>
      <Nav pathname={pathname}>
        <Link to="/">
          <img src={Logo} alt="로고 이미지" />
        </Link>
        {id !== undefined ? (
          <div className="profile">
            <img className="header-profile-img" src={profileImageSource ?? image_source} alt="프로필 이미지" />
            <p className="email">{email}</p>
          </div>
        ) : (
          <Login />
        )}
      </Nav>
    </header>
  );
}

export default Header;
