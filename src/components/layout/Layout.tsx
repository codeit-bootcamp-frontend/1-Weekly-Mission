import { RefObject } from "react";
import styles from "./Layout.module.css";

import Header from "./header/Header";
import Footer from "./footer/Footer";

import { useFolder } from "@/hooks/useFolder";

interface LayoutProps {
  children: React.ReactNode;
  footerRef?: RefObject<HTMLDivElement>;
}

export default function Layout({ children, footerRef }: LayoutProps) {
  const { data, isLoading } = useFolder("/users");

  return (
    <section className={styles.container}>
      <Header user={data?.[0]} isLoading={isLoading} />
      <section className={styles.body}>{children}</section>
      <Footer ref={footerRef} />
    </section>
  );
}
