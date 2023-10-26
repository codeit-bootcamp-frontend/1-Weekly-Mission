import React, { useEffect } from "react";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Person } from "../../assets/images/person.svg";
import { ReactComponent as Login } from "../../assets/images/login.svg";

import styles from "./Nav.module.css";
import useUserFetch from "../../hooks/useUserFetch";
import Profile from "../profile/Profile";
import { useState } from "react";

export default function NavSec() {
  const [userData, isLoading] = useUserFetch({ id: 1 });
  const [data, setData] = useState();

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.profile__container}>
        {/* {userData.length && <Profile data={userData} />} */}
      </div>
    </div>
  );
}
