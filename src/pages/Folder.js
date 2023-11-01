import styled from "styled-components";
import NavAndFooterBasic from "../components/js/NavAndFooterBasic";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { getFolderInformations, getUserLinks } from "../api/apiUrl";
import useAsync from "../hooks/useAsync";
import LinkBar from "../components/js/LinkBar";
import Search from "../components/js/Search";
import FolderMenu from "../components/js/FolderMenu";
import CardListFolder from "../components/js/CardListFolder";
import FloatButton from "../components/js/FloatButton";
import LinksNotExist from "../components/js/LinksNotExist";
import AddLinktoFolderModalContainer from "components/js/modals/container/AddLinktoFolderModalContainer";
import FolderAddModal from "components/js/modals/container/FolderAddModal";
import FolderDeleteModal from "components/js/modals/container/FolderDeleteModal";
import FolderNameChangeModal from "components/js/modals/container/FolderNameChangeModal";
import LinkDeleteModal from "components/js/modals/container/LinkDeleteModal";
import FolderShareModalContainer from "components/js/modals/container/FolderShareModalContainer";

function Folder() {
  const [FoldersLoadingError, getFoldersAsync] = useAsync(
    getFolderInformations
  );
  const [LinksloadingError, getUserLinksAsync] = useAsync(getUserLinks);
  const [personalFolder, setPersonalFolder] = useState([]);
  const [currentFolderId, setCurrentFolderId] = useState("");
  const [folderLinks, setFolderLinks] = useState([]);
  const [folderName, setFolderName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalName, setActiveModalName] = useState("");
  const [link, setLink] = useState("");

  //카드 리스트 업데이트 하는 함수
  const loadCardList = async () => {
    const folders = await getFoldersAsync();
    setPersonalFolder(folders?.data);
    const result = await getUserLinksAsync(currentFolderId);
    setFolderLinks(result?.data);
  };

  //액션 메뉴에서 버튼을 누를 때마다 folderId와 foldername의 state가 변경되는 함수
  const handleClickMenuButton = (nextValue, nextName) => {
    setCurrentFolderId(nextValue);
    setFolderName(nextName);
  };

  //버튼 클릭하면 모달이 실행시키기 위한 함수
  const handleShowModal = (isOpen, modalName) => {
    setActiveModalName(modalName);
    setModalOpen(isOpen);
  };

  //currentFolderId가 바뀔 때마다 새로 카드리스트 업데이트
  useEffect(() => {
    loadCardList();
  }, [currentFolderId]);

  const isShowComponent =
    (currentFolderId === "") &
    (folderLinks.length === 0) &
    (personalFolder.length === 0);

  const MODALS = {
    addLink: (
      <AddLinktoFolderModalContainer
        onShow={handleShowModal}
        folders={personalFolder}
        link={link}
      />
    ),
    addFolder: <FolderAddModal onShow={handleShowModal} />,
    deleteLink: <LinkDeleteModal onShow={handleShowModal} link={link} />,
    shareFolder: <FolderShareModalContainer onShow={handleShowModal} />,
    deleteFolder: <FolderDeleteModal onShow={handleShowModal} />,
    changeFolderName: <FolderNameChangeModal onShow={handleShowModal} />,
  };

  console.log(modalOpen, activeModalName);

  return (
    <>
      <Helmet>
        <title>Linkbrary_Folder</title>
      </Helmet>
      {modalOpen && MODALS[`${activeModalName}`]}
      <NavAndFooterBasic>
        <FloatButton>폴더 추가</FloatButton>
        <LinkBar onShow={handleShowModal} onChange={setLink} />
        {isShowComponent ? (
          <Wrapper>
            <LinksNotExist>저장된 링크가 없습니다.</LinksNotExist>
          </Wrapper>
        ) : (
          <Wrapper>
            <Search />
            <FolderMenu
              folderName={folderName}
              folders={personalFolder}
              current={currentFolderId}
              onClick={handleClickMenuButton}
              modal={handleShowModal}
            />
            {folderLinks.length ? (
              <CardListFolder
                folderLinks={folderLinks}
                modal={handleShowModal}
                setLink={setLink}
              />
            ) : (
              <LinksNotExist>저장된 링크가 없습니다.</LinksNotExist>
            )}
          </Wrapper>
        )}
      </NavAndFooterBasic>
    </>
  );
}

export default Folder;
// console.log(window.location.pathname);

const Wrapper = styled.div`
  width: 1060px;
  height: auto;
  margin: 0 auto;

  @media (max-width: 1199px) and (min-width: 768px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 325px;
  }
`;
