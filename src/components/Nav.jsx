import logoImg from "../assets/images/logo.png";
import "./Nav.css";

function Nav({ userInfo }) {
  // 유저데이터가 있으면 유저데이터, 없으면 로그인 버튼
  if (!userInfo) return;

  const { email, image_source } = userInfo;

  return (
    <div className="nav">
      <a href="/">
        <img className="logo" src={logoImg} alt="로고" />
      </a>
      {userInfo ? (
        <div className="user-info">
          <img className="user-profile" src={image_source} alt="유저 프로필" />
          <span className="user-email">{email}</span>
        </div>
      ) : (
        <a href="/signin.html" className="login-link">
          로그인
        </a>
      )}
    </div>
  );
}

export default Nav;
