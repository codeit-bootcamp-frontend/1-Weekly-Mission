import ProfileInfo from "./ProfileInfo";

import Button from "../Button/Button";

import { useRouter } from "next/router";

import styles from "./LoginButton.module.css";
import { useEffect, useState } from "react";
import removeTokens from "@/utils/removeTokens";
import { useAuthContext } from "@/contexts/AuthContext";

function LoginButton() {
  const router = useRouter();
  const { user } = useAuthContext();
  const [userId, setUserId] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const handleButtonClick = () => {
    router.push("/signin");
  };
  const handleLogout = () => {
    removeTokens();
    window.location.href = "/";
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const accessToken = localStorage.getItem("accessToken");
    if (userId && accessToken) {
      setUserId(userId);
      setAccessToken(accessToken);
    }
  }, []);

  return (
    <div className={styles.buttonContainer}>
      {userId && accessToken ? (
        <>
          <ProfileInfo email={user?.email} profileImage={user?.image_source} />
          <Button onClick={handleLogout} size={12.8}>
            로그아웃
          </Button>
        </>
      ) : (
        <Button onClick={handleButtonClick} size={12.8}>
          로그인
        </Button>
      )}
    </div>
  );
}

export default LoginButton;
