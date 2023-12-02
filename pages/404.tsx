import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/404.module.css";
import LinkButton from "@/components/Button/LinkButton";

const ErrorPage: NextPageWithLayout = () => {
  return (
    <>
      <div className={styles.root}>
        <p>
          잘못된 페이지로 들어오셨네요.
          <br />썩 꺼지세요
        </p>
        <LinkButton className={styles.button} href="/" title="메인 화면">
          메인 화면으로 도망치기
        </LinkButton>
      </div>
    </>
  );
};
// (페이지 컴포넌트 이름).getLayout 으로 호출.
ErrorPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header position="sticky" />
      <main>{page}</main>
      <Footer />
    </>
  );
};

export default ErrorPage;
