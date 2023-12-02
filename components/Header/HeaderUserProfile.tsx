import { useEffect } from "react";
import styles from "./HeaderUserProfile.module.css";
import useUserValues from "@/hooks/useUserData";
import Image from "next/image";

function HeaderUserProfile() {
  const [values, getUserData] = useUserValues();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") as string;
    getUserData(accessToken);
  }, [getUserData]);

  return (
    <div className={styles.profile}>
      <div className={styles.profileImage}>{values ? <Image fill src={values.image_source} alt="profile" /> : ""}</div>
      {values ? <p className={styles.UserProfile}>{values.email}</p> : ""}
    </div>
  );
}

export default HeaderUserProfile;
