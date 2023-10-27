import { useState, useEffect, useCallback } from 'react';
import { getShareFolder } from "../global/api";

const useGetFolder = () => {
  const [folderInfo, setFolderInfo] = useState();

  const getData = useCallback(async () => {
    const {name:folderTitle, owner, links} = await getShareFolder();
    if (!{name:folderTitle, owner, links}) return;
    setFolderInfo({folderTitle, owner, links});
  }, []);
  
  useEffect(() => {
    getData();
  }, [getData]);

  return folderInfo;
}

export default useGetFolder;