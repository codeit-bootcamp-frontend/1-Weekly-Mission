import React from "react";
import styles from "./ShareNav.module.css";
import { ShareUser } from "@/api/share";
import { UserProfile } from "@/api/folder";
import Logo from "@/public/images/logo.svg";
import Person from "@/public/images/person.svg";
import Login from "@/public/images/login.svg";
import Profile from "@/components/profile/Profile";

export default function ShareNav({
  data,
}: {
  data: UserProfile[] | ShareUser;
}) {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.profile__container}>
        {data ? <Person /> : <Login />}
        {!Array.isArray(data) ? data.email : <Profile data={data} />}
      </div>
    </div>
  );
}
