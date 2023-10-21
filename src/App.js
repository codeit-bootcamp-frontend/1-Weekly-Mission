import { useState, useEffect } from "react";
import { getResponse } from "./api.js";
import Header from "./components/Header.js";
import FolderInfo from "./components/FolderInfo.js";
import './styles/app.css';

function App() {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);

  async function getUser(){
    const user = await getResponse('sample/user');
    if(!user) return;
    setUser(user);
  }

  async function getFolder(){
    const { folder:folderData } = await getResponse('sample/folder');
    if(!folderData) return;
    setFolder(folderData);
  }

  useEffect(() => getUser, []);
  useEffect(() => getFolder, []);

  return (
    <>
      <div className = "header"><Header user={user}/></div>
      <div className = "folder_info"><FolderInfo folderData={folder}/></div>
      {/* <div>카드들을 넣을거다</div> */}
    </>
  );
}

export default App;