import { useEffect, useState } from "react";
import logoImg from "../img/logo.svg";
import { isSignIn } from "../api";

function NavProfile({ userInfo }) {
  if (userInfo) {
    return (
      <>
        <img src={userInfo?.profileImageSource} alt="유저 프로필" />
        <div>{userInfo?.name}</div>
      </>
    );
  }
  return <button>로그인</button>;
}

function Nav() {
  const [userInfo, setUserInfo] = useState("");

  const getUser = async () => {
    const userInfo = await isSignIn();
    setUserInfo(userInfo);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <a href="/">
        <img src={logoImg} alt="로고" />
      </a>
      <NavProfile userInfo={userInfo} />
    </>
  );
}

export default Nav;
