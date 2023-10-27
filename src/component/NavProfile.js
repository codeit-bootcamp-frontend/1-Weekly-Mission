import { useEffect, useState } from "react";
import { LoginButton } from "./Button";
import { getSampleUser } from "../api/sampleUser";
import style from "../css/NavProfile.module.css";
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

export default NavProfile;
