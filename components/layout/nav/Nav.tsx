import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import logo from "@/public/icons/logo.svg";
import { SampleUser } from "../../../types/types";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

interface NavProps {
  userProfile: SampleUser[];
}

export const getStaticProps = async () => {
  // 여기 getStaticProps로 전달한 userProfile이 계속해서 undefined가 뜨는 이유 ???
  const response = await axios.get(
    "https://bootcamp-api.codeit.kr/api/users/1"
  );
  const userProfile = response.data.data;

  return {
    props: {
      userProfile,
    },
  };
};

export default function Nav() {
  const [userProfile, setUserProfile] = useState<SampleUser[]>();
  const router = useRouter();
  const isFolderPage = router.pathname === "/folder";

  const fetchUsers = async () => {
    const res = await axios.get("https://bootcamp-api.codeit.kr/api/users/1");
    const user = res.data.data;
    setUserProfile(user);
  };

  useEffect(() => {
    fetchUsers();
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
