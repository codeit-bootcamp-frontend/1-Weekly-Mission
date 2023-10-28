import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

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