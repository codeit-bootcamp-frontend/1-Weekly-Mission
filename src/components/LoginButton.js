import { useState } from "react";
import styles from "../styles/LoginButton.module.css";
import ProfileInfo from "./ProfileInfo";
import getUser from "./../api/getUser";
import classnames from "classnames";
import useAsync from "../hooks/useAsync";

const LoginButton = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, getUserAsync] = useAsync(getUser);

  const handleButtonClick = async (e) => {
    setUserData(await getUserAsync());
  };

  return (
    <div>
      {userData?.email ? (
        <ProfileInfo email={userData.email} profileImageSource={userData.profileImageSource} />
      ) : (
        <button disabled={isLoading} className={classnames(styles.cta, styles.cta_short)} onClick={handleButtonClick}>
          로그인
        </button>
      )}
    </div>
  );
};

export default LoginButton;
