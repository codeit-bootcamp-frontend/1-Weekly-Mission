import ProfileInfo from "./ProfileInfo";
import getUser from "./../api/getUser";
import { useState } from "react";

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
      {userData ? (
        <ProfileInfo userData={userData} />
      ) : (
        <button disabled={isLoading} className="cta cta-short" onClick={handleButtonClick}>
          로그인
        </button>
      )}
    </div>
  );
};

export default LoginButton;
