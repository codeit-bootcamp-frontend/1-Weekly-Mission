import { useState } from "react";
import { useSetUserId } from "../../contexts/UserContext";
import ProfileInfo from "./ProfileInfo";
import useAsync from "../../hooks/useAsync";
import Button from "../Button/Button";
import getUser from "../../api/getUser";
import { useRouter } from "next/router";

import styles from "./LoginButton.module.css";

function LoginButton() {
  const router = useRouter();
  const setUserId = useSetUserId();
  const [userData, setUserData] = useState<UserData>();
  const { pending: isLoading, wrappedFunction: getUserAsync } =
    useAsync(getUser);

  const handleButtonClick = async () => {
    const userResponseData = await getUserAsync({ userId: 1 });
    const userId = userResponseData?.data?.[0]?.id;
    const folderId = router.query.folder;

    setUserData(userResponseData);
    setUserId(userId);

    router.push(`?user=${userId}&folder=${folderId || "all"}`);
  };

  return (
    <div className={styles.buttonContainer}>
      {userData?.data?.[0]?.email ? (
        <ProfileInfo
          email={userData.data[0].email}
          profileImage={userData.data[0].image_source}
        />
      ) : (
        <Button isLoading={isLoading} onClick={handleButtonClick} size={12.8}>
          로그인
        </Button>
      )}
    </div>
  );
}

export default LoginButton;
