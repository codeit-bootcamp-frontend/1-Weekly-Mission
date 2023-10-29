import { Outlet } from "react-router-dom";
import { Nav, Footer } from "../containers";
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
