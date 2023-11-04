import { useEffect, useState } from "react";

import { getFolders, getLinksByFolderID } from "../../api";
import FolderList from "../FolderList/FolderList";
import CardList from "../../components/CardList/CardList";
import useAsync from "../../Hooks/useAsync";

import styled from "styled-components";
import { device } from "../../style/device";
import colors from "../../style/colors";
import { cursorPointer } from "../../style/common";

function FolderAndLink() {
  const [selectedFolderId, setSelectedFolderId] = useState(undefined);
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

      <FloatingButton>폴더추가 +</FloatingButton>
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

const FloatingButton = styled.button`
  display: none;
  @media ${device.mobile} {
    display: block;
    padding: 8px 24px;
    background-color: ${colors.primary};
    border: 1px solid ${colors.white};
    border-radius: 20px;
    ${cursorPointer}
    position: fixed;
    bottom: 101px;
    left: 40%;
    width: 120px;
    height: 30px;
    text-align: center;
    color: ${colors.gray10};
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  }
`;

export default FolderAndLink;
