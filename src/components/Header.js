import '../styles/Header.css';
import Logo from '../assets/icon/logo.svg';

function Header() {
  return (
    <header>
      <nav className="nav">
        <a href="/">
          <img src={Logo} alt="로고 이미지" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
