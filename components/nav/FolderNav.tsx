import React from "react";

import Logo from "@/public/images/logo.svg";
import Person from "@/public/images/person.svg";
import Login from "@/public/images/login.svg";
import styles from "./ShareNav.module.css";
import Profile from "@/components/profile/Profile";

export default function FolderNav({ data }) {
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
