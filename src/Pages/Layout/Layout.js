import Footer from "../../components/Footer/Footer.jsx";
import Nav from "../../components/Nav/Nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}

      <Footer />
    </>
  );
}

export default Layout;