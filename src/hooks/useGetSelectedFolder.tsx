import { useState, useEffect, useCallback } from "react";
import { getSelectedFolder } from "../global/api";

const useGetSelectedFolder = (userID: number) => {
  const [folderInfo, setFolderInfo] = useState();

  const getData = useCallback(async (userID: number) => {
    const selectedFolderData = await getSelectedFolder(userID);
    if (!selectedFolderData) {
      return;
    }
    setFolderInfo(selectedFolderData);
  }, []);

  useEffect(() => {
    getData(userID);
  }, []);

  return folderInfo;
};

export default useGetSelectedFolder;
