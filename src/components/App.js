import "./App.css";

import Nav from "./Nav";

import Footer from "./Footer";

import { getUsers, getUserData } from "../utils/api";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [userFolderInfo, setUserFolderInfo] = useState(null);

  async function handleLoad() {
    const userData = await getUserData();
    setUserInfo(userData);

    const folderData = await getUsers("1");
    console.log(folderData);
    setUserFolderInfo(folderData);
  }

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <header>
        <Nav userInfo={userInfo} userFolderInfo={userFolderInfo} />
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
