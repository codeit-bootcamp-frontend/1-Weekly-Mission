import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { getUsers } from "../utils/api";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import Modals from "../pages/modals/Modals";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  async function handleLoad() {
    const { data } = await getUsers("1");
    setUserInfo({ ...data[0] });
  }

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <header>
        <Nav userInfo={userInfo} />
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
