import React from "react";

import Profile from "../../common/profile/Profile";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Person } from "../../assets/images/person.svg";
import { ReactComponent as Login } from "../../assets/images/login.svg";

import styles from "./Nav.module.css";

import useFetchData from "../../hooks/useFetchData";
import { getShareUserData } from "../../api/share";

export default function ShareNav() {
  const [userData] = useFetchData(getShareUserData);

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
