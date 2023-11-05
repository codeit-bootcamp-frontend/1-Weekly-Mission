import React, { useCallback, useEffect, useState } from "react";
import useAsync from "../../../hooks/useAsync";

import { Navigate, useParams } from "react-router-dom";
import { useUser } from "../../../utils/UserContext";
import CardList from "../../cardList/CardList";
import * as S from "./FolderPage.style";
import FolderSearchBar from "../../folderSearchBar/FolderSearchBar";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { getFolderData } from "../../../utils/api";
import ModalLayout from "../../modalLayout/ModalLayout";
import FolderTabBar from "../../folderTabBar/\bFolderTabBar";
import FolderToolbar from "../../folderToolBar/FolderToolBar";
import FolderAddBar from "../../folderAddBar/FolderAddBar";
const FolderPage = () => {
  const [folderData, setFolderData] = useState(null);
  const [folderDataLoading, folderDataError, getFolderDataAsync] = useAsync(getFolderData);
  const [modalComponent, setModalComponent] = useState(null);
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
  const currentFolder = folderData?.folders?.find((folder) => folder.id === +folderId);
  if (folderDataLoading) return <LoadingSpinner />;
  if (folderDataError) return <Navigate to="error" />;
  if (folderId && !currentFolder) return <Navigate to="/folder" />;
  return (
    <>
      <FolderAddBar setModalComponent={setModalComponent} folders={folderData?.folders} />
      <S.FolderPageWrap>
        <S.FolderPage>
          <FolderSearchBar />
          {folderData && <FolderTabBar folders={folderData?.folders} setModalComponent={setModalComponent} />}
          <FolderToolbar
            folderName={currentFolder?.name}
            modalComponent={modalComponent}
            setModalComponent={setModalComponent}
          />
          <CardList
            links={folderData?.links}
            modalComponent={modalComponent}
            setModalComponent={setModalComponent}
            folders={folderData?.folders}
          />
        </S.FolderPage>
      </S.FolderPageWrap>
      {modalComponent && <ModalLayout modal={modalComponent} closeModal={() => setModalComponent(null)} />}
    </>
  );
};

export default FolderPage;
