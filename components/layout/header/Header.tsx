import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

import { User } from "@/types/user";
import styles from "./Header.module.css";
import Button from "@/components/button/Basic";

interface HeaderProps {
  user: User;
  isLoading: boolean;
}

const HIDE_HEADER = ["/folder"];

export default function Header({ user, isLoading }: HeaderProps) {
  const router = useRouter();
  const isHideHeader = HIDE_HEADER.includes(router.asPath);

  return (
    <div className={classNames(styles.wrapper, { [styles.hide]: !isHideHeader })}>
      <div className={styles.container}>
        <Link href="/">
          <div className={styles.logo}>
            <Image src="/images/logo.svg" alt="logo" fill={true} priority />
          </div>
        </Link>
        <nav>
          {!isLoading ? (
            <div className={styles.navbar}>
              <div className={styles.avatar}>
                <img src={user?.image_source} alt="avatar" className={styles.avatar} />
                {/* <Image src={user?.image_source} alt="avatar" fill={true} /> */}
              </div>
              <span className={styles.email}>{user?.email}</span>
            </div>
          ) : (
            <Button size="large" label="로그인" />
          )}
        </nav>
      </div>
    </div>
  );
}
