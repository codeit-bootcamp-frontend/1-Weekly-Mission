import "../styles/header.css";
import logoImage from "../assets/png/logo.png";

function header() {
  const { name, email, profileImageSource } = account;

  return (
    <header>
      <div className="header__container">
        <div className="header__logo">
          <a href="/">
            <img src={logoImage} alt="LinkBrary logo" />
          </a>
        </div>
        <div className="header__profile">
          {!account ? (
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
