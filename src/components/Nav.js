import { ReactComponent as Logo } from '../assets/logo.svg';

function Nav() {
  return (
    <div className="nav">
      <div className="nav-container">
        <a href="/">
          <Logo width="133" height="24"/>
        </a>
        <a className="login cta">로그인</a>
      </div>
    </div>
  );
}

export default Nav;