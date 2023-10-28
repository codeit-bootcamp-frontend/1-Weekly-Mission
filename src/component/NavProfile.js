import { useEffect, useState } from "react";
import { LinkButton } from "./LinkButton";
import { getSampleUser } from "../api/sampleUser";
import style from "./NavProfile.module.css";
function NavProfile() {
  const [userInfo, setUserInfo] = useState("");

  const loadUser = async () => {
    const userInfo = await getSampleUser();
    setUserInfo(userInfo);
  };

  useEffect(() => {
    loadUser();
  }, []);
  return userInfo ? (
    <div className={style.profile}>
      <img
        className={style.profileImg}
        src={userInfo.profileImageSource}
        alt="유저 프로필"
      />
      <div className={style.email}>{userInfo.email}</div>
    </div>
  ) : (
    <LinkButton text="로그인" type="login" />
  );
}

export default NavProfile;
