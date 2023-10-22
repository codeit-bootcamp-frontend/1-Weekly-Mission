import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Profile from "./component/Profile";
import Main from "./component/Main";
import { useEffect, useState } from "react";
import { isSignIn, getFolder } from "./api";
import "./css/index.css";
import "./css/color.css";

function App() {
  const [userInfo, setUserInfo] = useState("");
  const [folderInfo, setFolderInfo] = useState("");

  const loadUser = async () => {
    const userInfo = await isSignIn();
    setUserInfo(userInfo);
  };

  const loadFolder = async () => {
    const { folder } = await getFolder();
    setFolderInfo(folder);
  };
  useEffect(() => {
    loadUser();
    loadFolder();
  }, []);
  return (
    <>
      <Nav userInfo={userInfo} />
      <Profile folderInfo={folderInfo} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
