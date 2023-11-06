import { useState } from "react";
import { useSetUserId } from "../../contexts/UserContext";
import ProfileInfo from "./ProfileInfo";
import useAsync from "../../hooks/useAsync";
import Button from "../Button/Button";
import getUser from "../../api/getUser";

const LoginButton = () => {
  const setUserId = useSetUserId();
  const [userData, setUserData] = useState(null);
  const { status: isLoading, wrappedFunction: getUserAsync } = useAsync(getUser);

  const handleButtonClick = async () => {
    const userResponseData = await getUserAsync({ userId: 1 });
    setUserData(userResponseData);
    setUserId(userResponseData?.data?.[0]?.id);
  };

  return (
    <div>
      {userData?.data?.[0]?.email ? (
        <ProfileInfo email={userData.data[0].email} profileImage={userData.data[0].image_source} />
      ) : (
        <Button isLoading={isLoading} onClick={handleButtonClick} size="short">
          로그인
        </Button>
      )}
    </div>
  );
};

export default LoginButton;
