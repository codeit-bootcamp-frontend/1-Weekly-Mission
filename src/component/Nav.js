import logoImg from "../assets/img/logo.svg";
import { LoginButton } from "./Button";
import "../css/index.css";
import "../css/color.css";

function NavProfile({ userInfo }) {
  if (userInfo) {
    return (
      <div className="nav__profile">
        <img
          className="nav__profile__img"
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
    <div className="nav">
      <a href="/">
        <img className="nav__logo" src={logoImg} alt="로고" />
      </a>
      <NavProfile userInfo={userInfo} />
    </div>
  );
}

export default Nav;
