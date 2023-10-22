import logoImg from "../assets/img/logo.svg";
import { LoginButton } from "./Button";
import style from "../css/Nav.module.css";
// import "../css/color.css";

function NavProfile({ userInfo }) {
  if (userInfo) {
    return (
      <div className={style.profile}>
        <img
          className={style.profileImg}
          src={userInfo.profileImageSource}
          alt="유저 프로필"
        />
        <div>{userInfo.email}</div>
      </div>
    );
  }
  return <LoginButton />;
}

function Nav({ userInfo }) {
  return (
    <div className={style.root}>
      <a href="/">
        <img className={style.logo} src={logoImg} alt="로고" />
      </a>
      <NavProfile userInfo={userInfo} />
    </div>
  );
}

export default Nav;
