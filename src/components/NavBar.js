import "../styles/NavBar.css";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <nav>
      <div className="header__container">
        <a href="/" className="header__logo">
          <img src={logo} alt="LinkBrary 로고" />
        </a>
        <a href="/signin" className="cta cta-short">
          로그인
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
