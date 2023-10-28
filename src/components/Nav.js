import library from './img/linkbrary.svg';
import { useState } from 'react';
import { getSampleUserData } from '../api';
import './css/Nav.css';
import Profile from './Profile';

export default function Nav() {
  const [login, setLogin] = useState([]);

  const handleLoad = async () => {
    const data = await getSampleUserData();
    setLogin(data);
  };

  return (
    <div className="nav-container">
      <div className="nav1-wrapper">
        <a href="/" className="nav1-logo">
          <img className="nav1-libraryImg" src={library} alt="libraryLogo" />
        </a>
        {login.id ? (
          <Profile item={login} />
        ) : (
          <button href="/" className="nav-login" onClick={handleLoad}>
            로그인
          </button>
        )}
      </div>
    </div>
  );
}
