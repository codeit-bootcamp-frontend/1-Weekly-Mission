import '../styles/header.css';
import Profile from './Profile';
import LoginBtn from './LoginBtn';
import logoImg from '../assets/images/logo.svg';

function Header({ user = null }) {
  return (
    <div className="header_container">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img className="linkbrary_logo" src={logoImg} alt="Linkbrary 메인 페이지 바로가기" />
      </a>
      {user ? <Profile user={user} /> : <LoginBtn />}
    </div>
  );
}

export default Header;
