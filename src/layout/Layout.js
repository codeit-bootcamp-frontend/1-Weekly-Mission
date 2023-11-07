import { Outlet } from "react-router-dom";
import NavBar from "./../components/NavBar/NavBar";
import Footer from "./../components/Footer/Footer";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
