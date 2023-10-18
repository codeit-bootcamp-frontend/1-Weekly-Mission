import '../styles/Header.css';
import Logo from '../assets/icon/logo.svg';
import ProfileImg from '../assets/images/profile img.png';

function Header({ id, email }) {
  return (
    <header>
      <nav className="nav">
        <a href="/">
          <img src={Logo} alt="로고 이미지" />
        </a>
        <div className="profile">
          <img src={ProfileImg} alt="프로필 이미지" />
          <p key={id}>{email}</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
