import React from 'react';
import Logo from '../assets/icon/logo.svg';
import Login from '../components/Login';
import '../styles/Header.css';

function Header({ id, email, img }) {
  return (
    <header>
      <nav className="nav">
        <a href="/">
          <img src={Logo} alt="로고 이미지" />
        </a>
        {id !== undefined ? (
          <div className="profile">
            <img className="header-profile-img" src={img} alt="프로필 이미지" />
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
