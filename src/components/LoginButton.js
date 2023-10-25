import { useState } from "react";
import "../styles/LoginButton.css";
import ProfileInfo from "./ProfileInfo";
import getUser from "./../api/getUser";

const LoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleButtonClick = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      setUserData(await getUser());
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="LoginButton">
      {userData?.email ? (
        <ProfileInfo email={userData.email} profileImageSource={userData.profileImageSource} />
      ) : (
        <button disabled={isLoading} className="cta cta-short" onClick={handleButtonClick}>
          로그인
        </button>
      )}
    </div>
  );
};

export default LoginButton;
