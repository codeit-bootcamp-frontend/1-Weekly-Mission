import "./Nav.style.css";
import "../../styles/reset.css";
import logoSvg from "../../assets/logo.svg";

function Button() {
  return (
    <button className="link-button signin-button">
      <a href="./" className="a-label">
        로그인
      </a>
    </button>
  );
}

function Nav({ userEmail, userProfile }) {
  if (!userEmail) {
    return (
      <nav className="nav">
        <div className="gnb">
          <a href="./">
            <img src={logoSvg} alt="링크브러리 로고" />
          </a>
          <Button />
        </div>
      </nav>
    );
  }
  return (
    <nav className="nav">
      <div className="gnb">
        <a href="./">
          <img src={logoSvg} alt="링크브러리 로고" />
        </a>
        <div className="user-info">
          <img src={userProfile} alt="profile" className="profile-img" />
          <span>{userEmail}</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
