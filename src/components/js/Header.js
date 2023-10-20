import Nav from "./Nav";
import avatarImg from '../../Assets/codeItLogo.png'
import '../css/Header.css'

function Header() {
  return (
  <div>
    <Nav />
    <div>
      <div className="avatar">
        <img className="avatar_img" src={avatarImg} alt='avatar'></img>
        <div className="avatar_bg"></div>
      </div>
      <span>@codeit</span>
      <span>⭐즐겨찾기</span>
    </div>
  </div>)
}

export default Header;