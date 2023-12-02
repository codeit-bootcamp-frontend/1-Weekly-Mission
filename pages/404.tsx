import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 페이지..!</title>
      </Head>
      <div
        style={{
          display: "flex",
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
      </div>
    </>
  );
}
