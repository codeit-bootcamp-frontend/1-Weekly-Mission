import Link from "next/link";
import styles from "@/assets/styles/NotFound.module.css";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <h1>
        404
        <br />
        잘못된 주소로 들어왔어요 !
      </h1>
      <Link className={styles.button} href={"/"}>
        홈으로 돌아가기
      </Link>
      <Footer />
    </>
  );
};

export default NotFound;
