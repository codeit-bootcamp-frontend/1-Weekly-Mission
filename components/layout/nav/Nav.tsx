import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import logo from "@/public/icons/logo.svg";
import { User } from "../../../types/types";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { USERS_ENDPOINT, instance } from "@/api/services/config";
import { getAccessToken } from "@/utils/localStorage";

export default function Nav() {
  const router = useRouter();
  const isFolderPage = router.pathname === "/folder";
  const [userProfile, setUserProfile] = useState<User[]>([]);

  const fetchUsers = async () => {
    const res = await instance.get(USERS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    const user = res?.data.data;
    setUserProfile(user);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <nav className={isFolderPage ? styles.gnbContainer : styles.gnbFolder}>
        <Link href="/">
          <Image
            src={logo}
            alt="nav-title-logo"
            className={styles.gnbLogo}
            width={133}
            height={24}
          />
        </Link>
        {userProfile ? (
          <div className={styles.userProfileBox}>
            <Image
              src={userProfile[0]?.image_source}
              alt="userProfile"
              className={styles.userProfileIcon}
              width={24}
              height={24}
            />
            <span>{userProfile[0]?.email}</span>
          </div>
        ) : (
          <Link href="/pages/signin/SigninPage.js">
            <button type="button" className={styles.loginButton}>
              로그인
            </button>
          </Link>
        )}
      </nav>
    </>
  );
}
