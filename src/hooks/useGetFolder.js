import { useState, useEffect, useCallback } from 'react';
import { getFolder } from "../global/api";

const useGetFolder = () => {
  const [folder, setFolder] = useState();

  const getData = useCallback(async () => {
    const {folder:{name:folderTitle, owner, links}} = await getFolder();
    if (!{folder:{name:folderTitle, owner, links}}) return;
    setFolder({folderTitle, owner, links});
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return folder;
}

export default useGetFolder;