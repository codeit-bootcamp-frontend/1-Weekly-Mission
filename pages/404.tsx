import Head from "next/head";
import Link from "next/link";
export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 페이지..!</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "96.3rem",
          fontSize: "2rem",
          fontWeight: "700",
          background: "skyblue",
        }}
      >
        존재하지 않는 페이지입니다..!
        <Link href="/" style={{ color: "gray" }}>
          메인 페이지로 이동
        </Link>
      </div>
    </>
  );
}
