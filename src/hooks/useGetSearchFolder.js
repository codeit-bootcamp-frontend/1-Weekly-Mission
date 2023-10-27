import { useState, useEffect, useCallback } from 'react';
import { getSearchFolder } from "../global/api";

const useGetAccount = (userID) => {
  const [folderInfo, setFolderInfo] = useState();
  
  const getData = useCallback(async (userID) => {
    const folderData = await getSearchFolder(userID);
    if (!folderData) {
      console.log("저장된 링크가 없습니다.");
      return;
    }
    setFolderInfo(folderData);
  }, []);

  useEffect(() => {
    console.log(folderInfo);
  }, [folderInfo]);

  useEffect(() => {
    getData(userID);
  }, [getData, userID]);

  return folderInfo;
}
 
export default useGetAccount;