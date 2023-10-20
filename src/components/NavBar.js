import "../styles/NavBar.css";
import logo from "../assets/logo.svg";
import LoginButton from "./LoginButton";

const NavBar = ({ userData, isLoading, onClick }) => {
  return (
    <nav className="NavBar">
      <div className="NavBar__container">
        <a href="/" className="NavBar__logo">
          <img src={logo} alt="LinkBrary 로고" />
        </a>
        <LoginButton userData={userData} isLoading={isLoading} onClick={onClick} />
      </div>
    </nav>
  );
};

export default NavBar;
