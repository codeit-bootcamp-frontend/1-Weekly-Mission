import React, { useCallback, useEffect, useState } from "react";
import Folder from "../templates/Folder";
import FolderUserInfo from "../modules/FolderUserInfo";
import { getSampleUserFolder, getSampleUserInfo } from "../../api";
import useAsync from "../../hooks/useAsync";
import avatarImage from "../../images/Avatar.png";
import { useUser } from "../../utils/UserContext";
import ErrorPage from "./ErrorPage";

const SharedPage = () => {
  const [folderInfo, setFolderInfo] = useState(null);
  const { setUser } = useUser();

  const [userInfoLoading, userInfoError, getUserInfoAsync] = useAsync(getSampleUserInfo);
  const [userFolderLoading, userFolderError, getUserFolderAsync] = useAsync(getSampleUserFolder);

  const handleUserInfo = useCallback(async () => {
    const result = await getUserInfoAsync();
    if (!result) return;

    setUser(result);
  }, [getUserInfoAsync, setUser]);

  const handleUserFolder = useCallback(async () => {
    const result = await getUserFolderAsync();
    if (!result) return;
    const { folder } = result;
    setFolderInfo(folder);
  }, [getUserFolderAsync, setFolderInfo]);

  useEffect(() => {
    handleUserInfo();
    handleUserFolder();
  }, [handleUserInfo, handleUserFolder]);

  const { owner, name: folderName, links } = folderInfo ?? {};
  const { profileImageSource = avatarImage, name: userName } = owner ?? {};
  if (userInfoError || userFolderError) {
    const error = userInfoError || userFolderError;
    return <ErrorPage message={error.message}></ErrorPage>;
  }

  return (
    <Folder
      headerContent={
        <FolderUserInfo folderName={folderName} profileImageSource={profileImageSource} userName={userName} />
      }
      links={links}
    />
  );
};

export default SharedPage;
