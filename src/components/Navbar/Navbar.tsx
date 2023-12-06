import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import API from "../../utils/api";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/icons/Logo";

const Navbar = ({ isFolderPage }: { isFolderPage: boolean }) => {
  const [userData, setUserData] = useState<{
    id: number;
    created_at: string;
    name: string;
    image_source: string;
    email: string;
    auth_id: string;
  } | null>(null);
  const userId = 1;

  useEffect(() => {
    fetch(API.USER.DATA(userId))
      .then((response) => response.json())
      .then((data) => {
        if (data.data && data.data.length > 0) {
          setUserData(data.data[0]);
        }
      });
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isFolderPage ? styles.folderPage : styles.sharePage
      }`}
    >
      <div className={styles.headerContent}>
        <Link href="/">
          <Logo alt="logo" className={styles.logo} />
        </Link>
        {userData ? (
          <div className={styles.profile}>
            <img
              src={userData.image_source}
              alt="profile"
              className={styles.profileImage}
            />
            <span className={styles.email}>{userData.email}</span>
          </div>
        ) : (
          <Link href="/signin" className={styles.loginBtn}>
            로그인
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
