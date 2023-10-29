import { useEffect, useState } from "react";

import * as S from "./folderPage.style.js";
import LinkAddBarComponent from "components/linkAddBar/linkAddBar.jsx";
import FolderTabListComponent from "components/folderTabList/FolderTabList.jsx";
import { getUserFolderList } from "pages/folder/folderPage.js";
import useAsync from "hooks/useAsync.js";
import { SAMPLE_USER_ID } from "utils/constants.js";
import addIcon from "assets/icons/add.svg";
import LinkSearchBarComponent from "components/linkSearchBar/LinkSearchBar.jsx";
import FolderHeader from "components/folderHeader/FolderHeader.jsx";

import { Outlet, useParams } from "react-router-dom";

export default function FolderPage() {
  const [folderList, setFolderList] = useState([]);

  const params = useParams();
  const folderId = params.folderId;
  const folderTitle = !folderId
    ? "전체"
    : folderList.find((item) => String(item.id) === folderId)?.name;

  const [isLoadingFolderList, loadingErrorFolderList, getUserFolderListAsync] =
    useAsync(getUserFolderList);

  const handleFolderList = async () => {
    const folderList = await getUserFolderListAsync(SAMPLE_USER_ID);

    if (!folderList) return;
    setFolderList(folderList);
  };

  useEffect(() => {
    handleFolderList();
  }, []);

  return (
    <>
      <S.FolderAddWrapper>
        <LinkAddBarComponent />
      </S.FolderAddWrapper>

      <S.LinkFolderListContainer>
        <LinkSearchBarComponent />
        <S.FolderTabListContainer>
          <FolderTabListComponent folderList={folderList} />
          <S.FolderAddButton>
            폴더 추가
            <S.FolderAddIcon src={addIcon} alt="폴더 추가 아이콘" />
          </S.FolderAddButton>
        </S.FolderTabListContainer>

        <FolderHeader folderTitle={folderTitle} />

        <Outlet />
      </S.LinkFolderListContainer>
    </>
  );
}
