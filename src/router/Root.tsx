import Footer from "components/Footer";
import Nav from "components/Nav";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
