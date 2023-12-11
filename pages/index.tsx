import React from "react";
import Link from "next/link";
import Head from "next/head";
import s from "./index.module.css";

export default function MainPage() {
  return (
    <>
      <Head>
        <title>메인 페이지</title>
      </Head>
      <div className={s.main}>
        MainPage입니다.
        <br />
        <br />
        <Link href="/shared" className={s.link}>
          공유 페이지 버튼
        </Link>
        <Link href="/folder" className={s.link}>
          폴더 페이지 버튼
        </Link>
        <Link href="/signIn" className={s.link}>
          로그인 페이지 버튼
        </Link>
        <Link href="/signUp" className={s.link}>
          회원가입 페이지 버튼
        </Link>
      </div>
    </>
  );
}
