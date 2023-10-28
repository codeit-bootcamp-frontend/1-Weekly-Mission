import Logo from 'assets/icon/logo.svg';
import Login from 'components/Login/Login';
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerRequestData, { getUserProfile } from 'services/api';
import './Header.css';

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
  console.log(getUser);
  const { id, email, profileImageSource, image_source } = getUser;

  return (
    <header>
      <nav className="nav">
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
      </nav>
    </header>
  );
}

export default Header;
