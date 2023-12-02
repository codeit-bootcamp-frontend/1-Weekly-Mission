import React from "react";
import Link from "next/link";
export default function MainPage() {
  return (
    <>
      <div style={{ textAlign: "center", fontSize: "50px" }}>MainPage</div>
      <Link href="/shared">공유 페이지</Link>
    </>
  );
}
