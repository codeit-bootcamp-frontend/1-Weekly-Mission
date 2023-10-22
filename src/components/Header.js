import icon from '../assets/icon-smile.svg';
import './Header.css';
import Nav from './Nav';

function Header () {
  return (
    <div className="header">
      <Nav />
      <div className="banner">
        <div className="banner-inner">
          <div className="profile-img"><img src={icon} alt="" /></div>
          <div className="folder-user">@코드잇</div>
          <div className="folder-fname ">⭐️ 즐겨찾기</div>
        </div>
      </div>
  </div>
  );
}

export default Header;