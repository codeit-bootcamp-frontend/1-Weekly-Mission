import { useEffect, useState } from "react";
import { getFolderData } from "../api";

function Folder() {
  const [folderData, setFolderData] = useState([]);

  const handleLoad = async () => {
    let result; 
    try {
      result = await getFolderData();
      setFolderData(result.folder);
    } catch (error) {
      console.log(error);
    }
    
    useEffect(()=> {
      handleLoad();
    }, []);
  }

  return (
    <div>
      <div>
        <img src={folderData.owner.profileImageSource}/>
      </div>
      <div>{folderData.owner.name}</div>
      <div>{folderData.name}</div>
    </div>
  );
}

export default Folder;