import "../styles/header.css";
import "../styles/reset.css";
import logoSvg from "../assets/logo.svg";

function Header() {
  return (
    <nav className="nav">
      <div className="gnb">
        <a href="./">
          <img src={logoSvg} alt="링크브러리 로고" />
        </a>
        <button className="link-button signin-button">
          <a href="./" className="a-label">
            로그인
          </a>
        </button>
      </div>
    </nav>
  );
}

export default Header;
