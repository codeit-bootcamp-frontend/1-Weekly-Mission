import styles from "./signup.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/Button";
import SocialAuth from "@/components/socialAuth/SocialAuth";
import logo from "@/public/icons/logo.svg";
import SignupForm from "@/components/signupForm/SignupForm";

function Signup() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href={"/"}>
            <Image src={logo} alt="linkbrary 로고" width={210} height={38} />
          </Link>
          <div className={styles.headerTextContainer}>
            <span>이미 회원이신가요?</span>
            <Link href={"/signin"}>
              <span className={styles.signupLink}>로그인 하기</span>
            </Link>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <SignupForm />
        </div>
        <Button className={styles.ctaButton}>회원가입</Button>
        <SocialAuth title="다른 방식으로 가입하기" />
      </div>
    </section>
  );
}

export default Signup;
