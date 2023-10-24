import React, { useEffect, useState } from 'react';
import logo from '../../assets/common/logo.svg';
import './nav.css';
import { getSampleUser } from '../../api/user';

export default function Nav() {
  const [userProfile, setUserProfile] = useState({});

  useEffect(async () => {
    const response = await getSampleUser();
    setUserProfile(response);
  }, []);

  return (
    <div>
      <nav className="gnb">
        <a href="/">
          <img src={logo} alt="nav-title-logo" className="gnb-logo" />
        </a>
        {userProfile ? (
          <div className="user-profile-box">
            <img
              src={userProfile.profileImageSource}
              alt="userProfile"
              className="user-profile-icon"
            />
            <span>{userProfile.email}</span>
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
