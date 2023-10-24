import React, { useCallback, useEffect, useState } from 'react';
import Logo from '../assets/icon/logo.svg';
import Login from '../components/Login';
import headerRequestData from '../services/api';
import './header.css';

function Header() {
  const [getUser, setGetUser] = useState({});

  const loginInfo = useCallback(async () => {
    const headerResult = await headerRequestData();
    if (!headerResult) return;

    setGetUser(headerResult);
  }, []);

  useEffect(() => {
    loginInfo();
  }, [loginInfo]);

  const { id, email, profileImageSource } = getUser;

  return (
    <header>
      <nav className="nav">
        <a href="/">
          <img src={Logo} alt="로고 이미지" />
        </a>
        {id !== undefined ? (
          <div className="profile">
            <img className="header-profile-img" src={profileImageSource} alt="프로필 이미지" />
            <p className="email" key={id}>
              {email}
            </p>
          </div>
        ) : (
          <Login />
        )}
      </nav>
    </header>
  );
}

export default Header;
