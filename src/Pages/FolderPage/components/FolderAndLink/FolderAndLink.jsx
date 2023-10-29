import { useState } from "react";
import useAsync from "../../../../Hooks/useAsync";
import { getAllLinks, getFolders, getLinksByFolderID } from "../../../../api";
import FolderList from "../FolderList/FolderList";
import LinkList from "../LinkList/LinkList";

function FolderAndLink() {
  const [folderId, setFolderId] = useState(undefined);

  // 폴더
  const [folderData, isLoadingFolder, folderLoadingError, getFolderAsync] =
    useAsync(() => getFolders());

  const [linkData, isLoadinglink, linkLoadingError, getLinkAsync] = useAsync(
    () => getLinksByFolderID(1, folderId),
    [folderId]
  );

  if (!folderData) return;

  const { data: folders } = folderData;
  const { data: links } = linkData;
  // 링크
  // console.log(links);

  const setFolderLink = (folder_id) => {
    setFolderId(folder_id);

    getLinkAsync(1, folderId);
  };

  return (
    <>
      {folders.length !== 0 && (
        <FolderList folders={folders} setFolderLink={setFolderLink} />
      )}
      <LinkList links={links} />
    </>
  );
}

export default FolderAndLink;
