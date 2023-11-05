import React, { useCallback, useEffect, useState } from "react";
import useAsync from "../../../hooks/useAsync";
import defaultAvatarImage from "../../../images/Avatar.png";
import { useUser } from "../../../utils/UserContext";
import { Navigate } from "react-router-dom";
import FolderSearchBar from "../../folderSearchBar/FolderSearchBar";
import SharedFolderInfo from "../../folderUserInfo/SharedFolderInfo";
import * as S from "./SharedPage.style";
import CardList from "../../cardList/CardList";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { getSampleUserFolder, getSampleUserInfo } from "../../../utils/api";

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
  const { profileImageSource = defaultAvatarImage, name: userName } = owner ?? {};
  const folderDataError = userInfoError || userFolderError;
  const folderDataLoading = userInfoLoading || userFolderLoading;
  if (folderDataError) return <Navigate to="error" />;
  if (folderDataLoading) return <LoadingSpinner />;
  return (
    <>
      <SharedFolderInfo profileImageSource={profileImageSource} userName={userName} folderName={folderName} />
      <S.SharedPageWrap>
        <S.SharedPage>
          <FolderSearchBar />
          <CardList links={links} isShared={true} />
        </S.SharedPage>
      </S.SharedPageWrap>
    </>
  );
};

export default SharedPage;
