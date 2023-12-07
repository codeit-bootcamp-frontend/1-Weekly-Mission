import styles from "./socialAuth.module.css";
import Image from "next/image";
import googleIcon from "@/public/icons/google.png";
import kakaoIcon from "@/public/icons/kakaoicon.svg";
import Link from "next/link";

interface SocialAuthProps {
  title: string;
}

function SocialAuth({ title }: SocialAuthProps) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.iconContainer}>
        <Link
          href={"https://google.com"}
          className={styles.iconBox}
          target="_blank"
        >
          <Image
            src={googleIcon}
            alt="구글 아이콘"
            width={22}
            height={22}
            className={styles.icon}
          />
        </Link>
        <Link
          href={"https://kakao.com"}
          className={`${styles.iconBox} ${styles.kakaoIconBox}`}
          target="_blank"
        >
          <Image
            src={kakaoIcon}
            alt="카카오 아이콘"
            width={22}
            height={22}
            className={styles.icon}
          />
        </Link>
      </div>
    </div>
  );
}

export default SocialAuth;
