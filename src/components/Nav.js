import library from './img/linkbrary.svg';
import { useState } from 'react';
import { getData } from '../api';
import './css/Nav.css';
import Profile from './Profile';

export default function Nav() {
  const [login, setLogin] = useState([]);
  let url = window.location.pathname;

  const handleLoad = async () => {
    if (url === '/shared') {
      const data = await getData('sample/user');
      setLogin(data);
    } else if ((url = '/folder')) {
      const { data } = await getData('users/1');
      setLogin(data);
    }
  };
  return (
    <div className="nav-container">
      <div className="nav1-wrapper">
        <a href="/" className="nav1-logo">
          <img className="nav1-libraryImg" src={library} alt="libraryLogo" />
        </a>
        {login.id || login[0] ? (
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
