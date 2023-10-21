import NavBtn from './NavBtn';
import NavLogo from './NavLogo';
import NavProfile from './NavProfile';
import './Nav.css';

function Nav() {
  const navLogo = 'nav__logo';
  const navProfile = ['nav__profile', 'nav__profileImage', 'nav__UserProfile'];
  return (
    <nav className="nav">
      <NavLogo className={navLogo} />
      {true ? (
        <NavProfile className={navProfile} />
      ) : (
        <NavBtn className={NavBtn}>로그인</NavBtn>
      )}
    </nav>
  );
}

export default Nav;
