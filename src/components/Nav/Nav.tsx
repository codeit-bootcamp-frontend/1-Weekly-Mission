/*Nav 컴포넌트:  페이지 상단에 위치하는 공통 컴포넌트.*/

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Dropdown from "@/components/Nav/Dropdown/Dropdown";
import { UserType } from "@/types/UserType";

import styles from "./Nav.module.scss";

interface NavProps {
  userInfo?: UserType | null;
}

function Nav({ userInfo }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseDropdown = () => {
    setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <nav className={styles["nav"]}>
      {isOpen && <Dropdown />}
      <div className={styles["gnb"]}>
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            priority={true}
            width={133}
            height={52}
            alt="로고 크기"
          />
        </Link>
        {userInfo ? (
          <button
            className={styles["user-info"]}
            onClick={() => setIsOpen(true)}
            onBlur={handleCloseDropdown}
          >
            <Image
              src={userInfo?.image_source || "/images/no-profile.png"}
              alt="profile"
              width={20}
              height={20}
            />
            <span>{userInfo.email}</span>
          </button>
        ) : (
          <button
            className={`${styles["link-button"]} ${styles["signin-button"]}`}
          >
            <Link href="/signin">로그인</Link>
          </button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
