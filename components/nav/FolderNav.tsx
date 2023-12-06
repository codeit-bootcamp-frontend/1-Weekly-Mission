import React from "react";

import Logo from "@/public/images/logo.svg";
import Person from "@/public/images/person.svg";
import Login from "@/public/images/login.svg";
import styles from "./ShareNav.module.css";
import Profile from "@/components/profile/Profile";
import { UserProfile } from "@/api/folder";

export default function FolderNav({
  userProfile,
}: {
  userProfile: { data: UserProfile[] };
}) {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.profile__container}>
        {userProfile.data ? <Person /> : <Login />}
        {userProfile.data && <Profile data={userProfile.data} />}
      </div>
    </div>
  );
}
