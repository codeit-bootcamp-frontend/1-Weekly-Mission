import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../../assets/common/logo.svg';
import './nav.css';
import { getSampleUser } from '../../../api/user';

export default function Nav() {
  const [userProfile, setUserProfile] = useState({});
  const location = useLocation();
  const isFolderPage = location.pathname === '/folder';

  useEffect(async () => {
    const response = await getSampleUser();
    const { data } = response;
    setUserProfile(data);
  }, []);

  return (
    <div>
      <nav className={isFolderPage ? 'gnb gnb-folder' : 'gnb'}>
        <a href="/">
          <img src={logo} alt="nav-title-logo" className="gnb-logo" />
        </a>
        {userProfile ? (
          <div className="user-profile-box">
            <img
              src={userProfile[0]?.image_source}
              alt="userProfile"
              className="user-profile-icon"
            />
            <span>{userProfile[0]?.email}</span>
          </div>
        ) : (
          <a href="/pages/signin/SigninPage.js">
            <button type="button" className="login-btn">
              로그인
            </button>
          </a>
        )}
      </nav>
    </div>
  );
}
