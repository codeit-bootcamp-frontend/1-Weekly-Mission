import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function MainPage() {
  return (
    <>
      <Head>
        <title>메인 페이지</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        MainPage입니다.
        <br />
        <br />
        <Link href="/shared" style={{ color: "gray" }}>
          공유 페이지 버튼
        </Link>
        <Link href="/folder" style={{ color: "gray" }}>
          폴더 페이지 버튼
        </Link>
      </div>
    </>
  );
}
