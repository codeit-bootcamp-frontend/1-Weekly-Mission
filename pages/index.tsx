import Head from "next/head";
import Link from "next/link";

import Button from "@/components/Button/Button";

import styles from "@/assets/styles/index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>LinkBrary</title>
      </Head>
      <div className={styles.buttonContainer}>
        <Link href={"/landing"}>
          <Button isLoading={false} size={"large"}>
            랜딩 페이지로 가기
          </Button>
        </Link>
        <Link href={"/folder"}>
          <Button isLoading={false} size={"large"}>
            폴더 페이지로 가기
          </Button>
        </Link>
        <Link href={"/shared"}>
          <Button isLoading={false} size={"large"}>
            공유폴더 페이지로 가기
          </Button>
        </Link>
        <Link href={"/signin"}>
          <Button isLoading={false} size={"large"}>
            로그인 페이지로 가기
          </Button>
        </Link>
        <Link href={"/signup"}>
          <Button isLoading={false} size={"large"}>
            회원가입 페이지로 가기
          </Button>
        </Link>
      </div>
    </>
  );
}
