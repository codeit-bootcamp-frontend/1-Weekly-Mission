import '../componant.css';
import './Nav.css';

function NavBtn({ children }) {
  const NavBtn = 'nav__btn btn';

  return (
    <a className={NavBtn} href="/signin.html" title="signin">
      {children}
    </a>
  );
}

export default NavBtn;
