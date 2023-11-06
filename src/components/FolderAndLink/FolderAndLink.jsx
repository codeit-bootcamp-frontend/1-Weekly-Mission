import { useEffect, useState } from "react";

import { getFolders, getLinksByFolderID } from "../../api";
import FolderList from "../FolderList/FolderList";
import CardList from "../../components/CardList/CardList";
import useAsync from "../../Hooks/useAsync";

import styled from "styled-components";
import { device } from "../../style/device";
import { useSearchParams } from "react-router-dom";


function FolderAndLink() {
  const [selectedFolderId, setSelectedFolderId] = useState(undefined);
  // const [searchParams] = useSearchParams();
  // const folderId = searchParams.get("folderId");

  
  const DEFAULT_FOLDER = 1;
  // 폴더

  const [folderData, isLoadingFolder, folderError, getFolderAsync] = useAsync(
    () => getFolders(DEFAULT_FOLDER)
  );

  const [linkData, isLoadinglink, linkError, getLinkAsync] = useAsync(
    () => getLinksByFolderID(DEFAULT_FOLDER, selectedFolderId),
    [selectedFolderId]
  );

  const setFolderLink = (folder_id) => {
    setSelectedFolderId(folder_id);
  };

  useEffect(() => {
    getLinkAsync(DEFAULT_FOLDER, selectedFolderId);
  }, [selectedFolderId]);

  if (!folderData) return null;

  if (!linkData) return null;

  const folders = folderData?.data;
  const links = linkData?.data;

  // 링크

  return (
    <>
      {folders.length !== 0 && (
        <FolderList
          folders={folders}
          setFolderLink={setFolderLink}
          selectedFolderId={selectedFolderId}
        />
      )}
      {links.length === 0 ? <NoLink /> : <CardList links={links} />}
    </>
  );
}

const NoLinkFrame = styled.div`
  width: 1060px;
  height: 300px;
  padding: 41px 0px 35px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    width: auto;
  }

  @media ${device.mobile} {
    width: auto;
  }
`;

function NoLink() {
  return <NoLinkFrame>저장된 링크가 없습니다.</NoLinkFrame>;
}

export default FolderAndLink;
