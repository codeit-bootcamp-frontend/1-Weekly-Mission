import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
