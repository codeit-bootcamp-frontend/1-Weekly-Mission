import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFolderLinkList } from "./folderLinkList.js";
import useAsync from "hooks/useAsync";
import { SAMPLE_USER_ID } from "utils/constants.js";
import LinkCardList from "components/linkCardList/LinkCardList.jsx";

export default function FolderLinkList() {
  const params = useParams();
  const folderId = params.folderId;

  const [folderLinkList, setFolderLinkList] = useState([]);

  const [
    isLoadingFolderLinkList,
    loadingErrorFolderLinkList,
    getUserFolderLinkListAsync,
  ] = useAsync(getFolderLinkList);

  const handleFolderLinkList = async () => {
    const folderLinkList = await getUserFolderLinkListAsync(
      SAMPLE_USER_ID,
      folderId
    );

    if (!folderLinkList) return;
    setFolderLinkList(folderLinkList);
  };

  useEffect(() => {
    handleFolderLinkList();
  }, [folderId]);

  return (
    <>
      {folderLinkList && (
        <LinkCardList linkList={folderLinkList} page={"folder"} />
      )}
    </>
  );
}
