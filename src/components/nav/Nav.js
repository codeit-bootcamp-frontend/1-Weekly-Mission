import React from 'react';
import logo from '../../assets/common/logo.svg';

export default function Nav() {
  return (
    <div>
      <nav className="gnb">
        <a href="/">
          <img src={logo} alt="nav-title-logo" className="gnb-logo" />
        </a>
        <a href="/pages/signin/SigninPage.js">
          <button type="button" className="login-btn">
            로그인
          </button>
        </a>
      </nav>
    </div>
  );
}
