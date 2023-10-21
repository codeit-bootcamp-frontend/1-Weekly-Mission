import React from 'react';
import logo from '../../assets/common/logo.svg';
import './nav.css';

export default function Nav({ userProfile }) {
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
