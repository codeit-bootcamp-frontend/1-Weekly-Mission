import PageContainer from "../pageContainer/PageContainer";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Layout.module.scss";

export default function Layout({ ...props }) {
  return (
    <div className={styles["layout"]}>
      <Header />
      <PageContainer {...props} />
      <Footer />
    </div>
  );
}
