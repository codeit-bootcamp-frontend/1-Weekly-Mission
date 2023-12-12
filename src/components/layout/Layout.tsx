import { RefObject } from "react";
import useSWR from "swr";
import styles from "./Layout.module.css";

import Header from "./header/Header";
import Footer from "./footer/Footer";

import { TEST_USER_ID } from "@/common/constants";

interface LayoutProps {
  children: React.ReactNode;
  footerRef?: RefObject<HTMLDivElement>;
}

export default function Layout({ children, footerRef }: LayoutProps) {
  const { data, isLoading, error } = useSWR(`/api/users/${TEST_USER_ID}`); // 로그인 기능 배우면 userID 수정하기

  if (error) console.log(error);

  return (
    <section className={styles.container}>
      <Header user={data?.data[0]} isLoading={isLoading} />
      <section className={styles.body}>{children}</section>
      <Footer ref={footerRef} />
    </section>
  );
}
