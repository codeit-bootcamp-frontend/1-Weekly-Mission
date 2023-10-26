import Nav from "./Nav";
import Footer from "./Footer";
import "styles/reset.css";
import "styles/color.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
