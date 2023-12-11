import Head from "next/head";
import Link from "next/link";
import s from "./404.module.css";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 페이지..!</title>
      </Head>
      <div className={s.main}>
        존재하지 않는 페이지입니다..!
        <Link href="/" className={s.link}>
          메인 페이지로 이동
        </Link>
      </div>
    </>
  );
}
