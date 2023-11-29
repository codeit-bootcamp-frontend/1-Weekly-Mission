import React from "react";
import styles from "./ShareNav.module.css";
import useFetchData from "@/hooks/useFetchData";
import { getShareUserData } from "@/api/share";
import Logo from "@/public/images/logo.svg";
import Person from "@/public/images/person.svg";
import Login from "@/public/images/login.svg";
import Profile from "@/components/profile/Profile";

export default function ShareNav() {
  const [userData] = useFetchData(getShareUserData);
  // console.log(userData);

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.profile__container}>
        {userData.email ? <Person /> : <Login />}
        {userData.email && <Profile data={userData} />}
      </div>
    </div>
  );
}
