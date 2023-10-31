import "../styles/navheader.css";
import "../styles/reset.css";
import logo from "../images/logo.svg";

function Nav({ lists }) {
  const { userEmail, userImage } = lists;

  return (
    <nav>
      <div className="nav-box">
        <img className="logo" src={logo} alt="회사 로고" />
        {lists ? (
          <div className="profile">
            <img className="user-image" src={userImage} alt="사용자 이미지" />
            <span className="user-email">{userEmail}</span>
          </div>
        ) : (
          <a className="cta cta-long" href="/">
            <span>로그인</span>
          </a>
        )}
      </div>
    </nav>
  );
}

export default Nav;
