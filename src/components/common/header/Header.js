import "./Header.css";
import logo from "assets/logo.svg";

export default function Header({ user }) {
  return (
    <header className="header">
      <div className="header__container max-container">
        <img src={logo} alt="logo" className="header__logo" />
        <nav>
          {user ? (
            <div className="header__navbar">
              <img src={user?.profileImageSource} className="navbar__userImage" />
              <span className="navbar__userEmail">{user?.email}</span>
            </div>
          ) : (
            <button className="header__login__btn">로그인</button>
          )}
        </nav>
      </div>
    </header>
  );
}
