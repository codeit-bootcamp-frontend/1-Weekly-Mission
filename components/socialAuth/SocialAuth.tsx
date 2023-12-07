import { ReactNode } from "react";
import styles from "./socialAuth.module.css";
import Image from "next/image";
import googleIcon from "@/public/icons/google.png";
import kakaoIcon from "@/public/icons/kakaoicon.svg";

interface SocialAuthProps {
  title: string;
}

function SocialAuth({ title }: SocialAuthProps) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.iconContainer}>
        <div className={styles.iconBox}>
          <Image
            src={googleIcon}
            alt="구글 아이콘"
            width={22}
            height={22}
            className={styles.icon}
          />
        </div>
        <div className={`${styles.iconBox} ${styles.kakaoIconBox}`}>
          <Image
            src={kakaoIcon}
            alt="카카오 아이콘"
            width={22}
            height={22}
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
}

export default SocialAuth;
