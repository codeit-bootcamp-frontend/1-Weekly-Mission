import logoImg from "../../assets/img/logo.svg";
import style from "./Nav.module.css";
import NavProfile from "../../component/NavProfile";

export function Nav() {
  return (
    <div className={style.root}>
      <a href="/">
        <img className={style.logo} src={logoImg} alt="로고" />
      </a>
      <NavProfile />
    </div>
  );
}
