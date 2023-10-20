import "../styles/NavBar.css";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar__container">
        <a href="/" className="NavBar__logo">
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
