import Link from "next/link";
import styles from "./SignPageSocial.module.css";
import Image from "next/image";

import kakaoTalkIcon from "@/assets/images/kakaoTalkIcon.svg";
import googleIcon from "@/assets/images/google.svg";

interface SignPageSocialProps {
  socialDescription: string;
}

function SignPageSocial({ socialDescription }: SignPageSocialProps) {
  return (
    <div className={styles.socialContainer}>
      <p className={styles.socialDescription}>{socialDescription}</p>
      <div className={styles.socialButtons}>
        <Link
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={googleIcon} alt="구글 로그인" />
        </Link>
        <Link
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={kakaoTalkIcon} alt="카카오 로그인" />
        </Link>
      </div>
    </div>
  );
}

export default SignPageSocial;
