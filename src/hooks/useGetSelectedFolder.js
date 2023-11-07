import { useState, useEffect, useCallback } from 'react';
import { getSelectedFolder } from '../global/api';

const useGetSelectedFolder = (userID) => {
  const [folderInfo, setFolderInfo] = useState();

  const getData = useCallback(async (userID) => {
    const selectedFolderData = await getSelectedFolder(userID);
    if (!selectedFolderData) {
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
