import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

import { User } from "@/types/user";
import styles from "./Header.module.css";
import Button from "@/components/button/Basic";
import Loading from "@/components/Loading";

interface HeaderProps {
  user: User;
  isLoading: boolean;
}

const HIDE_HEADER = ["/folder"];

export default function Header({ user, isLoading }: HeaderProps) {
  const router = useRouter();
  const isHideHeader = HIDE_HEADER.includes(router.asPath);

  if (isLoading) {
    return <Loading />; // 로딩 UI 점검
  }

  return (
    <div className={classNames(styles.wrapper, { [styles.hide]: !isHideHeader })}>
      <div className={styles.container}>
        <Link href="/">
          <div className={styles.logo}>
            <Image src="/images/logo.svg" alt="logo" fill={true} priority />
          </div>
        </Link>
        <nav>
          {user ? (
            <div className={styles.navbar}>
              <div className={styles.avatar}>
                <Image src={user?.image_source} alt="avatar" fill={true} className={styles.photo} />
              </div>
              <span className={styles.email}>{user?.email}</span>
            </div>
          ) : (
            <Link href="/signin">
              <Button size="large" label="로그인" />
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
