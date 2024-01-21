/*Nav 컴포넌트:  페이지 상단에 위치하는 공통 컴포넌트.*/

import Image from "next/image";
import Link from "next/link";

import Dropdown from "@/components/Nav/Dropdown/Dropdown";
import useDropdown from "@/hooks/useDropdown";
import { UserType } from "@/types/UserType";

import styles from "./Nav.module.scss";

interface NavProps {
  userInfo?: UserType | null;
}

function Nav({ userInfo }: NavProps) {
  const { isOpen, handleOpen, handleClose } = useDropdown();

  return (
    <nav className={styles["nav"]}>
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
          <div className={styles["wrapper"]}>
            {isOpen && <Dropdown />}
            <button
              className={styles["user-info"]}
              onClick={handleOpen}
              onBlur={handleClose}
            >
              <Image
                src={userInfo?.image_source || "/images/no-profile.png"}
                alt="profile"
                width={20}
                height={20}
              />
              <span>{userInfo.email}</span>
            </button>
          </div>
        ) : (
          <Link href="/signin">
            <button
              className={`${styles["link-button"]} ${styles["signin-button"]}`}
            >
              로그인
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
