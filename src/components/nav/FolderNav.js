import React from "react";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Person } from "../../assets/images/person.svg";
import { ReactComponent as Login } from "../../assets/images/login.svg";

import styles from "./Nav.module.css";
import useUserFetch from "../../hooks/useUserFetch";
import Profile from "../../common/profile/Profile";
import useFetch from "../../hooks/useFetch";

export default function NavSec() {
  // const [data, isLoadng] = useFetch(
  //   "https://bootcamp-api.codeit.kr/api/users/1"
  // );
  const [data, isLoading] = useUserFetch({ userId: 1 });

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.profile__container}>
        {data?.data ? <Person /> : <Login />}
        {data?.data && <Profile data={data?.data} />}
      </div>
    </div>
  );
}
