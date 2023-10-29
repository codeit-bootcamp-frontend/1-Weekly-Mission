import React, { useCallback, useEffect, useState } from "react";
import { getFolderData } from "../../api";
import useAsync from "../../hooks/useAsync";

import { useParams } from "react-router-dom";
import Folder from "../templates/Folder";
import AddLinkInput from "../modules/AddLinkInput";
import { useUser } from "../../utils/UserContext";
import ErrorPage from "./ErrorPage";

const FolderPage = () => {
  const [folderData, setFolderData] = useState(null);
  const [folderDataLoading, folderDataError, getFolderDataAsync] = useAsync(getFolderData);
  const { setUser } = useUser();
  const handleFolderInfo = useCallback(
    async (userId, folderId) => {
      const result = await getFolderDataAsync(userId, folderId);
      if (!result) return;

      setUser(result.userInfo);
      setFolderData(result);
    },
    [getFolderDataAsync, setFolderData, setUser]
  );

  const { folderId } = useParams();
  useEffect(() => {
    handleFolderInfo(1, folderId);
  }, [folderId, handleFolderInfo]);

  if (folderDataError) return <ErrorPage message={folderDataError.message}></ErrorPage>;
  return <Folder headerContent={<AddLinkInput />} links={folderData?.links} folders={folderData?.folders} />;
};

export default FolderPage;
