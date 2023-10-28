import { useState, useEffect, useCallback } from 'react';
import { getSearchFolder } from "../global/api";

const useGetSearchFolder = (userID, folderID) => {
  const [folderInfo, setFolderInfo] = useState();
  
  const getData = useCallback(async (userID, folderID) => {
    const folderData = await getSearchFolder(userID, folderID);
    if (!folderData) {
      console.log("저장된 링크가 없습니다.");
      return;
    }
    setFolderInfo(folderData);
  }, []);
  
  useEffect(() => {
    getData(userID, folderID);
  }, [getData, userID, folderID]);

  return folderInfo;
}
 
export default useGetSearchFolder;