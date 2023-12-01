import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import logo from "@/public/icons/logo.svg";
import { getSampleUser } from "@/pages/api/user";
import { SampleUser } from "../../../types/types";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export async function getServerSideProps() {
  const response = await axios.get(
    `https://bootcamp-api.codeit.kr/api/users/1`
  );
  const userProfile = response?.data;
  return {
    props: {
      userProfile,
    },
  };
}

export default function Nav({ userProfile }: any) {
  const router = useRouter();
  const isFolderPage = router.pathname === "/folder";
  console.log("userprofile", { userProfile });

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
