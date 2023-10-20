import Header from "./Header";
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
  return <Header userInfo={userInfo} folderInfo={folderInfo.folder} />;
}

export default App;
