import { ReactComponent as Logo } from '../assets/logo.svg';
import icon from '../assets/icon-smile.svg';
import './Header.css'

function Header () {
  return (
    <div className="header">
      <div className="nav">
        <div className="nav-container">
          <a href="/">
          <Logo width="133" height="24"/>
          </a>
          <a className="login cta">로그인</a>
        </div>
      </div>
      <div className="banner">
        <div className="banner-inner">
          <span className="profile-img"><img src={icon} alt="" /></span>
          <p className="profile-user">@코드잇</p>
          <p className="profile-folder">⭐️ 즐겨찾기</p>
        </div>
      </div>
  </div>
  );
}

export default Header;