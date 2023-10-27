import logoImg from "../assets/img/logo.svg";
import { LoginButton } from "./Button";
import style from "../css/Nav.module.css";
import { useEffect, useState } from "react";
import { getSampleUser } from "../api/sampleUser";
import "../css/color.css";

function NavProfile() {
  const [userInfo, setUserInfo] = useState("");

  const loadUser = async () => {
    const userInfo = await getSampleUser();
    setUserInfo(userInfo);
  };

  useEffect(() => {
    loadUser();
  }, []);
  if (userInfo) {
    return (
      <div className={style.profile}>
        <img
          className={style.profileImg}
          src={userInfo.profileImageSource}
          alt="유저 프로필"
        />
        <div className={style.email}>{userInfo.email}</div>
      </div>
    );
  }
  return <LoginButton />;
}

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
