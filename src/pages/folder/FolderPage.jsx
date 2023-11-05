import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import * as S from "./folderPage.style.js";
import LinkAddBar from "components/linkAddBar/LinkAddBar.jsx";
import FolderTabList from "components/folderTabList/FolderTabList.jsx";
import { getUserFolderList } from "pages/folder/folderPage.js";
import LinkSearchBar from "components/linkSearchBar/LinkSearchBar.jsx";
import FolderHeader from "components/folderHeader/FolderHeader.jsx";

import { ENTIRE_LINK_FOLDER_NAME, SAMPLE_USER_ID } from "utils/constants.js";
import useAsync from "hooks/useAsync.js";
import useModal from "hooks/useModal.js";
import FolderAddModal from "components/modals/folderAddModal/FolderAddModal.jsx";

export default function FolderPage() {
  const { Modal, openModal, closeModal } = useModal();
  const [folderList, setFolderList] = useState([]);

  const { folderId } = useParams();
  const folderTitle = !folderId
    ? ENTIRE_LINK_FOLDER_NAME
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
        <LinkAddBar />
      </S.FolderAddWrapper>

      <S.LinkFolderListContainer>
        <LinkSearchBar />

        <S.FolderTabListContainer>
          <FolderTabList folderList={folderList} />
          <>
            <S.FolderAddButton onClick={openModal}>
              폴더 추가
              <S.FolderAddIcon alt="폴더 추가 아이콘" />
            </S.FolderAddButton>
            <Modal>
              <FolderAddModal onClickClose={closeModal} />
            </Modal>
          </>
        </S.FolderTabListContainer>

        <FolderHeader folderTitle={folderTitle} />

        <Outlet />
      </S.LinkFolderListContainer>
    </>
  );
}
