import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { isSignIn, getFolder } from "../api";

function App() {
  const [userInfo, setUserInfo] = useState("");
  const [folderInfo, setFolderInfo] = useState("");

  const loadUser = async () => {
    const info = await isSignIn();
    setUserInfo(info);
  };

  const loadFolder = async () => {
    const info = await getFolder();
    setFolderInfo(info);
  };
  useEffect(() => {
    loadUser();
    loadFolder();
  }, []);
  return (
    <>
      <Header userInfo={userInfo} folderInfo={folderInfo.folder} />
      <Footer />
    </>
  );
}

export default App;
