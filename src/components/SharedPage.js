import { useState, useEffect } from 'react';
import { getSampleFolder } from '../api';
import FolderInfo from "./FolderInfo";



function SharedPage() {
  const [folderInfo, setFolderInfo] = useState({});

  const handleLoad = async () => {
    let result;
    try {
      result = await getSampleFolder();
      setFolderInfo(result);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);


  return (
    <>
      <FolderInfo folderInfo={folderInfo} />
    </>
  );
}

export default SharedPage;