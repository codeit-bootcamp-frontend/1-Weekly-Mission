import "../styles/navheader.css";
import "../styles/reset.css";
import logo from "../images/logo.svg";

function HeaderSpace({ items, userData }) {
  const { name, profileImageSource, title } = items;
  // const { email, profileImageSource: userImage } = userData;

  return (
    <>
      <nav>
        <div className="nav-box">
          <img className="logo" src={logo} alt="회사 로고" />
          <div className="profile">
            {/* <img src={userImage} alt="" />
            <span>{email}</span> */}
          </div>
          <a className="cta cta-short" href="/">
            <span>로그인</span>
          </a>
        </div>
      </nav>

      <header>
        <div className="hero-header">
          <div className="company-mark">
            <img className="circle-logo" src={profileImageSource} alt="" />
            <span className="company-name">{name}</span>
          </div>
          <div className="bookmarks-wrapper">
            <span className="bookmarks">{title}</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderSpace;
