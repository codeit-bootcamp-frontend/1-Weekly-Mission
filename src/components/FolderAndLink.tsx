import { useCallback, useEffect, useState } from "react";

import { Link1, getFolders, getLinksByFolderID } from "../api";
import FolderList from "./FolderList/FolderList";

import useAsync from "../Hooks/useAsync";

import styled from "styled-components";
import { device } from "../style/device";
import CardList from "./CardList";

function FolderAndLink() {
  const [selectedFolderId, setSelectedFolderId] = useState<number>();

  const DEFAULT_FOLDER = 1;
  // 폴더

  const { data: folderData } = useAsync(() => getFolders(DEFAULT_FOLDER));

  const getLinks = useCallback(() => {
    return getLinksByFolderID(DEFAULT_FOLDER, selectedFolderId);
  }, [selectedFolderId]);

  const { data: linkData } = useAsync(getLinks);

  const setFolderLink = (folder_id: number) => {
    setSelectedFolderId(folder_id);
  };

  useEffect(() => {
    getLinksByFolderID(DEFAULT_FOLDER, selectedFolderId);
  }, [selectedFolderId]);

  if (!folderData) return null;

  if (!linkData) return null;

  const folders = folderData?.data;
  const links = linkData?.data;

  const convertedLinks: Link1[] = links.map((link) => {
    return {
      id: link.id,
      url: link.url,
      title: link.title,
      description: link.description,
      imageSource: link.image_source,
      folderId: link.folder_id,
      createdAt: link.created_at,
      updatedAt: link.updated_at,
    };
  });
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
      {links.length === 0 ? <NoLink /> : <CardList links={convertedLinks} />}
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
