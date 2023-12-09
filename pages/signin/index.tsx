import Link from "next/link";
import styles from "./signin.module.css";
import Image from "next/image";
import SocialAuth from "@/components/socialAuth/SocialAuth";
import logo from "@/public/icons/logo.svg";
import { SigninForm } from "@/components/signinForm/SigninForm";

function Signin() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href={"/"}>
            <Image src={logo} alt="linkbrary 로고" width={210} height={38} />
          </Link>
          <div className={styles.headerTextContainer}>
            <span>회원이 아니신가요?</span>
            <Link href={"/signup"}>
              <span className={styles.signupLink}>회원 가입하기</span>
            </Link>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <SigninForm />
        </div>
        <SocialAuth title="소셜 로그인" />
      </div>
    </section>
  );
}

export default Signin;
