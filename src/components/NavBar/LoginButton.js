import { useState } from "react";
import { useSetUserId } from "../../contexts/UserContext";
import ProfileInfo from "./ProfileInfo";
import useAsync from "../../hooks/useAsync";
import Button from "../Button/Button";
import getSampleUser from "../../api/getSampleUser";

const LoginButton = () => {
  const setUserId = useSetUserId();
  const [userData, setUserData] = useState(null);
  const { status: isLoading, wrappedFunction: getUserAsync } = useAsync(getSampleUser);

  const handleButtonClick = async () => {
    const userResponseData = await getUserAsync();
    setUserData(userResponseData);
    setUserId(userResponseData.id);
  };

  return (
    <div>
      {userData?.email ? (
        <ProfileInfo email={userData.email} profileImage={userData.profileImageSource} />
      ) : (
        <Button isLoading={isLoading} onClick={handleButtonClick} size="short">
          로그인
        </Button>
      )}
    </div>
  );
};

export default LoginButton;
