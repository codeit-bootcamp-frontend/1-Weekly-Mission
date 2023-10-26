import "./App.css";
// import Cards from "./Cards";
import Nav from "./Nav";
// import Search from "./Search";
import Footer from "./Footer";
// import FolderInfo from "./FolderInfo";
import { getUserData } from "../utils/api";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  // const [state, setState] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  // const [folderInfo, setFolderInfo] = useState(null);

  async function handleUserData() {
    // const { links } = await getUserFolder();
    // setState(links);
    const userData = await getUserData();
    setUserInfo(userData);
    // const folderData = await getUserFolder();
    // setFolderInfo(folderData);
  }

  useEffect(() => {
    handleUserData();
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
