import { useState } from "react";
import useAsync from "../../../../Hooks/useAsync";
import { getFolders, getLinksByFolderID } from "../../../../api";
import FolderList from "../FolderList/FolderList";
import LinkList from "../LinkList/LinkList";
import NoLink from "../NoLink/NoLink";

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

  if (!folderData) return;

  const { data: folders } = folderData;
  const { data: links } = linkData;
  // 링크
  // console.log(links);

  const setFolderLink = (folder_id) => {
    setSelectedFolderId(folder_id);
    getLinkAsync(DEFAULT_FOLDER, selectedFolderId);
  };

  return (
    <>
      {folders.length !== 0 && (
        <FolderList
          folders={folders}
          setFolderLink={setFolderLink}
          selectedFolderId={selectedFolderId}
        />
      )}
      {links.length === 0 ? <NoLink /> : <LinkList links={links} />}
    </>
  );
}

export default FolderAndLink;
