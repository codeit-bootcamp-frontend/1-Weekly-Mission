import { Outlet } from "react-router-dom";
import Gnb from "./Gnb";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Gnb />
      <div>
        <Outlet />
      </div>
      <Footer className="footer" size="large" />
    </>
  );
}

export default App;
