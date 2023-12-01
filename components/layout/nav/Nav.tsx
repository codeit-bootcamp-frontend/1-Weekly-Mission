import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import logo from "@/public/icons/logo.svg";
import { getSampleUser } from "@/pages/api/user";
import { SampleUser } from "../../../types/types";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [userProfile, setUserProfile] = useState<SampleUser[]>([]);
  const router = useRouter();
  const isFolderPage = router.pathname === "/folder/FolderPage";

  const fetchUserProfile = async () => {
    const response = await getSampleUser();
    const { data } = response;
    setUserProfile(data);
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div>
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
    </div>
  );
}
