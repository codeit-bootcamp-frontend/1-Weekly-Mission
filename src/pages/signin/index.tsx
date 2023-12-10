import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SnsSign, Input } from "@/components/sign";
import styles from "./SignInPage.module.scss";

function SignInPage() {
  return (
    <>
      <Head>
        <title>signin</title>
      </Head>

      <div className={styles["signin-page"]}>
        <div className={styles["signin-container"]}>
          <div className={styles["header"]}>
            <Link href="/">
              <div className={styles["logo"]}>
                <Image
                  src="icons/logo.svg"
                  width={210}
                  height={52}
                  priority={true}
                  alt="logo img"
                />
              </div>
            </Link>
            <div className={styles["description"]}>
              회원이 아니신가요?
              <span className={styles["signup-link"]}>
                <Link href="/signup">회원 가입하기</Link>
              </span>
            </div>
          </div>

          <div className={styles["form"]}>
            <form>
              <Input id="email" label="이메일" type="text" />
              <Input id="password" label="비밀번호" type="password" />
              <button className={styles["button"]}>로그인</button>
            </form>
          </div>
          <SnsSign label="소셜 로그인" />
        </div>
      </div>
    </>
  );
}

export default SignInPage;
