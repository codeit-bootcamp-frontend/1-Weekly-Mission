import Footer from "components/layout/footer/Footer";
import Header from "components/layout/header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <section>{children}</section>
      <Footer />
    </>
  );
}
