import { useEffect } from "react";
import styles from "./NavProfile.module.css";
import useUserValues from "../../hooks/useUserValues";

function NavProfile() {
  const [values, getUserData] = useUserValues();

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <div className={styles.profile}>
      <div className={styles.profileImage}>{values ? <img src={values.imageSource} alt="profile" /> : ""}</div>
      {values ? <p className={styles.UserProfile}>{values.email}</p> : ""}
    </div>
  );
}

export default NavProfile;
