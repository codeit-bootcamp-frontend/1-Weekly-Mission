import { useState } from "react";
import classnames from "classnames";
import styles from "./LoginButton.module.css";
import ProfileInfo from "./ProfileInfo";
import getUser from "../../api/getUser";
import useAsync from "../../hooks/useAsync";

const LoginButton = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const { pending: isLoading, wrappedFunction: getUserAsync } = useAsync(getUser);

  const handleButtonClick = async () => {
    const userResponseData = await getUserAsync();

    setUserData(userResponseData);

    if (userId) {
      userId(userResponseData.id);
    }
  };

  return (
    <div>
      {userData?.email ? (
        <ProfileInfo email={userData.email} profileImage={userData.profileImageSource} />
      ) : (
        <button disabled={isLoading} className={classnames(styles.cta, styles.ctaShort)} onClick={handleButtonClick}>
          로그인
        </button>
      )}
    </div>
  );
};

export default LoginButton;
