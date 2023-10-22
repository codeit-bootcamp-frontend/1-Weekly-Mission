import "../../Global.css";
import "./GnB.css";
import linkbraryLogo from "../../assets/logo/linkbrary_logo.svg";

function UserProfile({ userAccount }) {
  const { email, profileImageSource } = userAccount;

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

function GlobalNavBar({ userAccount }) {
  return (
    <div className="gnb-container">
      <div className="gnb">
        <a className="site_logo">
          <img
            src={linkbraryLogo}
            alt="링크브러리 로고 링크(랜딩페이지 이동)"
          />
        </a>
        <UserProfile userAccount={userAccount} />
      </div>
    </div>
  );
}

export default GlobalNavBar;
