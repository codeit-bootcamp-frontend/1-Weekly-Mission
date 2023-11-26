import { useState, useEffect, useCallback } from "react";
import { getSearchFolder } from "../global/api";

const useGetSearchFolder = (userID: number, folderID: number) => {
  const [folderInfo, setFolderInfo] = useState();

  const getData = useCallback(async (userID: number, folderID: number) => {
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
};

export default useGetSearchFolder;
