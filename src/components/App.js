import "./App.css";

import Nav from "./Nav";

import Footer from "./Footer";

import { getUsers } from "../utils/api";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  // const [userFolderInfo, setUserFolderInfo] = useState(null);

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
