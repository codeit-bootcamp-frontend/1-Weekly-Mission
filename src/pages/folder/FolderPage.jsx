import { useEffect, useState } from "react";

import * as S from "./folderPage.style.js";
import LinkAddBarComponent from "components/linkAddBar/linkAddBar.jsx";
import FolderTabListComponent from "components/folderTabList/FolderTabList.jsx";
import { getUserFolderList } from "pages/folder/folderPage.js";
import useAsync from "hooks/useAsync.js";
import { SAMPLE_USER_ID } from "utils/constants.js";
import addIcon from "assets/icons/add.svg";
import LinkSearchBarComponent from "components/linkSearchBar/LinkSearchBar.jsx";
import { Outlet } from "react-router-dom";

export default function FolderPage() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [folderList, setFolderList] = useState([]);
  const [isLoadingFolderList, loadingErrorFolderList, getUserFolderListAsync] =
    useAsync(getUserFolderList);

  const handleFolderList = async () => {
    const folderList = await getUserFolderListAsync(SAMPLE_USER_ID);

    if (!folderList) return;
    setFolderList(folderList);
    setSelectedFolder(folderList[0]);
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
            <img src={addIcon} alt="폴더 추가 아이콘" />
          </S.FolderAddButton>
        </S.FolderTabListContainer>
        <Outlet />
      </S.LinkFolderListContainer>
    </>
  );
}
