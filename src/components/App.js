import "./App.css";

import Nav from "./Nav";

import Footer from "./Footer";

import { getUserData } from "../utils/api";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  async function handleLoad() {
    const userData = await getUserData();
    setUserInfo(userData);
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
