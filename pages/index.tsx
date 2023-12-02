import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function MainPage() {
  return (
    <>
      <Head>
        <title>메인 페이지</title>
      </Head>
      <div style={{ textAlign: "center", fontSize: "50px" }}>MainPage</div>
      <Link href="/shared">공유 페이지</Link>
    </>
  );
}
