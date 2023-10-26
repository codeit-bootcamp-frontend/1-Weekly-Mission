import '../styles/header.css';
import { useEffect, useState } from 'react';
import { getData } from '../utils/getData';
import PATH from '../constants/path';
import Profile from './Profile';
import LoginBtn from './LoginBtn';
import logoImg from '../assets/images/logo.svg';

function Header({ page = '' }) {
  const [user, setUser] = useState(null);
  const fixed = page === 'shared' ? 'fixed' : null;
  const userPath = page === 'shared' ? PATH.user : PATH.users[1].userInfo;

  useEffect(() => {
    getData(setUser, userPath);
  }, []);

  return (
    <header className={fixed}>
      <div className="header_container">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img className="linkbrary_logo" src={logoImg} alt="Linkbrary 메인 페이지 바로가기" />
        </a>
        {user ? <Profile user={page === 'shared' ? user : user.data[0]} /> : <LoginBtn />}
      </div>
    </header>
  );
}

export default Header;
