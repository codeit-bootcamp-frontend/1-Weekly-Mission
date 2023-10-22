import Logo from "./Logo";
import Profile from "./Profile";
import LoginButton from "./LoginButton";
import '../../style/reset.css';
import './Nav.css';
import './Logo.css';

function Nav() {
  return (
    <nav className="Nav">
      <div className = "container">
        <Logo className='Logo' />
        <Profile />
        <LoginButton />
      </div>
    </nav>

  )
}

export default Nav;