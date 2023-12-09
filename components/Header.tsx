import React, { useContext, useState } from "react";
import logoImg from "@/public/img/png/Linkbrary.png";
import { isLocation, isblock } from "@/utils/location";
import Link from "next/link";
import { AccountContext } from "@/contexts/AccountContext";
import Image from "next/image";
import styles from "./header.module.css";

const MOBILE_WIDTH = 390;

const Header = () => {
  const { account, errorMessage } = useContext(AccountContext);
  const { name, email, image_source: profileImageSource } = account?.data[0];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const userToken = window.localStorage.getItem("user");

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <header
      className={styles.header}
      style={{
        position: isLocation() ? "static" : "sticky",
        display: isblock() ? "block" : "none",
      }}
    >
      <div className={styles.headerInner}>
        <h1>
          <Link href="/">
            <Image
              className={styles.headerAImg}
              width={133}
              height={24}
              src={logoImg}
              alt="logo"
            />
          </Link>
        </h1>
        <div className={styles.headerLogin}>
          {!account || !userToken ? (
            <Link className={styles.headerLoginButton} href={"/signin"}>
              로그인
            </Link>
          ) : (
            <>
              <Image
                width={28}
                height={28}
                className={styles.profileLogo}
                src={profileImageSource ? profileImageSource : ""}
                alt={name ? name : ""}
              />
              {windowWidth > MOBILE_WIDTH ? (
                <span className={styles.profileId}>{email && email}</span>
              ) : null}
            </>
          )}
          {errorMessage && <span>{errorMessage.message}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
