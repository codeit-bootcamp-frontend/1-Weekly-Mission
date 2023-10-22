import "../styles/header.css";
import { getUserData, getFolders } from "../api/api.js";
import logoImage from "../assets/png/logo.png";

function Header({ userData }) {
  const { name, email, profileImageSource } = getUserData;

  return (
    <header>
      <div className="header__container">
        <div className="header__logo">
          <a href="/">
            <img src={logoImage} alt="LinkBrary logo" />
          </a>
        </div>
        <div className="header__profile">
          {!userData ? (
            <button>로그인</button>
          ) : (
            <>
              <img
                className="header__profile--logo"
                src={profileImageSource}
                alt={name}
              />
              <span className="header__profile--email">{email}</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
