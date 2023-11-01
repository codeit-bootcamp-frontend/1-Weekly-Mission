import { useState, useEffect, useCallback } from "react";
import { getSelectedFolder } from "../global/api";

const useGetSelectedFolder = (userID) => {
  const [folderInfo, setFolderInfo] = useState();

  const getData = useCallback(async (userID) => {
    const selectedFolderData = await getSelectedFolder(userID);
    if (!selectedFolderData) {
      console.log("저장된 링크가 없습니다.");
      return;
    }
    setFolderInfo(selectedFolderData);
  }, []);

  useEffect(() => {
    getData(userID);
  }, [getData, userID]);

  return folderInfo;
};

export default useGetSelectedFolder;
