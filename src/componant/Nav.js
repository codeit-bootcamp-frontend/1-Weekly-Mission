import NavBtn from './NavBtn';
import NavLogo from './NavLogo';
import NavProfile from './NavProfile';
import './Nav.css';

function Nav() {
  const navLogo = 'nav__logo';
  return (
    <nav className="nav">
      <NavLogo className={navLogo} />
      {false ? <NavProfile /> : <NavBtn className={NavBtn}>로그인</NavBtn>}
    </nav>
  );
}

export default Nav;
