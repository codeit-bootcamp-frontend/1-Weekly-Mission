import logoImg from "../assets/img/logo.svg";
import style from "../css/Nav.module.css";
import "../css/color.css";
import NavProfile from "./NavProfile";

function Nav() {
  return (
    <div className={style.root}>
      <a href="/">
        <img className={style.logo} src={logoImg} alt="로고" />
      </a>
      <NavProfile />
    </div>
  );
}

export default Nav;
