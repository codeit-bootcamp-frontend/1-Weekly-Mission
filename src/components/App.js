import Header from "./Header.js";
import Footer from "./Footer.js";
import "../css/App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
