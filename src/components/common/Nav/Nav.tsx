import Image from "next/image";
import Link from "next/link";
import { UserInterface } from "@/types";
import styles from "./Nav.module.scss";

function Nav({
  profile,
  isSticky,
}: {
  profile?: UserInterface;
  isSticky?: boolean;
}) {
  let navClassName = isSticky
    ? { className: `${styles["sticky"]} ${styles["nav"]}` }
    : { className: `${styles["nav"]}` };

  return (
    <nav {...navClassName}>
      <div className={styles["gnb"]}>
        <Link href="/">
          <Image
            src="icons/logo.svg"
            priority={true}
            width={133}
            height={52}
            alt="로고 크기"
          />
        </Link>
        {!profile ? (
          <button
            className={`${styles["link-button"]} ${styles["signin-button"]}`}
          >
            <Link href="./">로그인</Link>
          </button>
        ) : (
          <div className={styles["user-info"]}>
            <Image
              src={profile.image_source || "/public/images/no-profile.png"}
              alt="profile"
              width={20}
              height={20}
            />
            <span>{profile.email}</span>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
