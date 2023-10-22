import "../../Global.css";
import "./GnB.css";
import linkbraryLogo from "../../assets/logo/linkbrary_logo.svg";

function UserProfile({ email, profileImageSource }) {
  if (!email) {
    return <a className="login link">로그인</a>;
  } else {
    return (
      <div className="user-account-container">
        <img
          className="user-profile-image"
          src={profileImageSource}
          alt="로그인 유저 프로필 이미지"
        />
        <div className="user-email">{email}</div>
      </div>
    );
  }
}

function GlobalNavBar({ email, profileImageSource }) {
  return (
    <header>
      <div className="header_container">
        <a className="site_logo">
          <img
            src={linkbraryLogo}
            alt="링크브러리 로고 링크(랜딩페이지 이동)"
          />
        </a>
        <UserProfile email={email} profileImageSource={profileImageSource} />
      </div>
    </header>
  );
}

export default GlobalNavBar;
