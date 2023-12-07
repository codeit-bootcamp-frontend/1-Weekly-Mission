import Link from "next/link";
import Head from "next/head";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Button from "@/components/Button/Button";

import styles from "@/assets/styles/NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>NotFound</title>
      </Head>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.status}>404</h2>
          <br />
          <p className={styles.description}>⚠️잘못된 주소로 들어왔어요⚠️</p>
        </div>

        <Link href={"/"}>
          <Button size="large">홈으로 돌아가기</Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};
export default NotFound;
