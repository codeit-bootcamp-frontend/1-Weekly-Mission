import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as S from "./folderLinkList.style.js";
import LinkCardList from "components/linkCardList/LinkCardList.jsx";
import NoLinkMsg from "components/noLinkMsg/NoLinkMsg.jsx";

import { getFolderLinkList } from "utils/getFolderLinkList.js";
import useAsync from "hooks/useAsync.js";
import { SAMPLE_USER_ID } from "utils/constants.js";

export default function FolderLinkList() {
  const { folderId } = useParams();

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
      {folderLinkList.length > 0 ? (
        <LinkCardList linkList={folderLinkList} page={"folder"} />
      ) : (
        <S.FolderLinkListEmpty>
          <NoLinkMsg />
        </S.FolderLinkListEmpty>
      )}
    </>
  );
}
