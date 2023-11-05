import logoImg from "../../assets/img/logo.svg";
import style from "./Nav.module.css";
import NavProfile from "../../component/NavProfile/NavProfile";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

export function Nav() {
  const location = useLocation();
  const isFolder = location.pathname === "/folder";
  return (
    <div className={clsx(style.root, { [style.folder]: isFolder })}>
      <a href="/">
        <img className={style.logo} src={logoImg} alt="로고" />
      </a>
      <NavProfile />
    </div>
  );
}
