import React, { useEffect, useState } from "react";
import { getUsersData } from "../../api/users";
import Profile from "../profile/Profile";

import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Person } from "../../assets/images/person.svg";
import { ReactComponent as Login } from "../../assets/images/login.svg";

import styles from "./Nav.module.css";
import useFetch from "../../hooks/useFetch";

export default function Nav() {
  const [userData, isLoading] = useFetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );

  console.log(userData.email);
  // const [data, isLoading] = response;

  // const handlUserDate = async () => {
  //   const { email } = await getUsersData();
  //   if (email) {
  //     setUserEmail(email);
  //     setIsUser(true);
  //     return;
  //   }
  //   setIsUser(false);
  // };
  // useEffect(() => {
  //   handlUserDate();
  // }, []);
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.profile__container}>
        {userData.email ? <Person /> : <Login />}
        {/* {isUser && <span className="user-email">{userEmail}</span>} */}
        {userData.email && <Profile data={userData} />}
      </div>
    </div>
  );
}
