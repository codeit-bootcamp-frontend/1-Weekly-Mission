import Profile from "./Profile";
import LoginButton from "./LoginButton";
import logoImg from '../../assets/logo.png'

import '../../style/style.css';
import './Nav.css';


function Nav() {
  return (
    <nav className="Nav">
      <div className="container">
        <img className="logo" src={logoImg} alt ="로고 이미지"></img>
        <Profile />
        {/* <LoginButton /> */}
      </div>
    </nav>

  )
}

export default Nav;