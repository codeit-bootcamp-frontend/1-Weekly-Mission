import { Outlet } from "react-router-dom";

import Footer from "./Footer";

function App() {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <Footer className="footer" size="large" />
    </>
  );
}

export default App;
