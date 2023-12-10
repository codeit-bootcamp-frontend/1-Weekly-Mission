import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Input, SnsSign } from "@/components/sign";
import styles from "./SignUpPage.module.scss";

function SignUpPage() {
  return (
    <>
      <Head>
        <title>signup</title>
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
              이미 회원이신가요?
              <span className={styles["signup-link"]}>
                <Link href="/signin">로그인 하기</Link>
              </span>
            </div>
          </div>

          <div className={styles["form"]}>
            <form>
              <Input id="email" label="이메일" type="text" />
              <Input id="password" label="비밀번호" type="password" />
              <Input
                id="password-repeat"
                label="비밀번호 확인"
                type="password"
              />
              <button className={styles["button"]}>회원가입</button>
            </form>
          </div>
          <SnsSign label="다른 방식으로 가입하기" />
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
