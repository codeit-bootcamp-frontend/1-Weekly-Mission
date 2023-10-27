import React from "react";

import Profile from "../profile/Profile";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Person } from "../../assets/images/person.svg";
import { ReactComponent as Login } from "../../assets/images/login.svg";

import styles from "./Nav.module.css";
import useFetch from "../../hooks/useFetch";

export default function Nav() {
  const [userData, isLoading] = useFetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );

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
