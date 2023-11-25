import styled from "styled-components";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";
import NavAndFooterBasic from "../../../components/js/NavAndFooterBasic";
import {
  getFolderInformations,
  getUserLinks,
  getAccount,
} from "../../../api/apiUrl";
import useAsync from "../../../hooks/useAsync";
import LinkBar from "../../../components/js/LinkBar";
import Search from "../../../components/js/Search";
import FolderMenu from "../../../components/js/FolderMenu";
import CardListFolder from "../../../components/js/CardListFolder";
import FloatButton from "../../../components/js/FloatButton";
import LinksNotExist from "../../../components/js/LinksNotExist";
import AddLinktoFolderModalContainer from "../../../components/js/modals/container/AddLinktoFolderModalContainer";
import FolderAddModal from "../../../components/js/modals/container/FolderAddModal";
import FolderDeleteModal from "../../../components/js/modals/container/FolderDeleteModal";
import FolderNameChangeModal from "../../../components/js/modals/container/FolderNameChangeModal";
import LinkDeleteModal from "../../../components/js/modals/container/LinkDeleteModal";
import FolderShareModalContainer from "../../../components/js/modals/container/FolderShareModalContainer";
import LinkBarFixed from "../../../components/js/LinkBarFixed";

function Folder() {
  const [FoldersLoadingError, getFoldersAsync] = useAsync(
    getFolderInformations
  );
  const [personalFolder, setPersonalFolder] = useState([]);
  const [currentFolderId, setCurrentFolderId] = useState("");
  const [folderLinks, setFolderLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState(folderLinks);
  const [folderName, setFolderName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalName, setActiveModalName] = useState("");
  const [link, setLink] = useState("");
  const [userId, setUserId] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [ref, inView] = useInView();
  const [footerRef, inViewFooter] = useInView();

  console.log(folderLinks);
  console.log(currentFolderId);
  console.log(searchValue);
  console.log(inView, "ref");
  console.log(inViewFooter, "footer");

  const handleLoadAccountId = async () => {
    const nextAccount = await getAccount();
    const email = nextAccount?.data[0]?.email;
    const nextId = email?.split("@")[0];
    setUserId(nextId);
  };

  //카드 리스트 업데이트 하는 함수
  const handleLoadCardList = async (id: any) => {
    const result = await getUserLinks(id);
    setFolderLinks(result?.data);
    setFilteredLinks(result?.data);
  };

  //폴더 리스트 불러오는 함수
  const handleLoadFolderList = async () => {
    const folders = await getFolderInformations();
    setPersonalFolder(folders?.data);
  };

  //액션 메뉴에서 버튼을 누를 때마다 folderId와 foldername의 state가 변경되는 함수
  const handleClickMenuButton = (nextValue: any, nextName: any) => {
    setCurrentFolderId(nextValue);
    setFolderName(nextName);
    setSearchValue("");
  };

  //버튼 클릭하면 모달이 실행시키기 위한 함수
  const handleShowModal = (isOpen: any, modalName: any) => {
    setActiveModalName(modalName);
    setModalOpen(isOpen);
  };

  //setSearchValue Prop으로 내려주기 위한 함수
  const handleChangeSearchValue = (value: any) => {
    setSearchValue(value);
  };

  //Search.js에 내려줄 x 버튼 클릭시 초기화하는 함수
  const handleClearSearchValue = () => {
    setSearchValue("");
    setFilteredLinks(folderLinks);
  };

  //검색바에 입력된 searchValue대로 리스트를 필터링하는 함수
  const handleFilterCardList = () => {
    if (!folderLinks) return;
    if (searchValue.length > 0) {
      const filteredLinks = folderLinks?.filter(
        (item: any) =>
          item.description?.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.url?.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredLinks(filteredLinks);
    }
    if (!searchValue) {
      setFilteredLinks(folderLinks);
    }
  };

  //currentFolderId가 바뀔 때마다 새로 카드리스트 업데이트
  useEffect(() => {
    handleLoadCardList(currentFolderId);
  }, [currentFolderId]);

  //최초 마운트 시, 폴더 리스트와 account ID 정보 가져오기(모달 링크용)
  useEffect(() => {
    handleLoadAccountId();
    handleLoadFolderList();
  }, []);

  const isShowComponent =
    currentFolderId === "" &&
    folderLinks.length === 0 &&
    personalFolder.length === 0;

  const MODALS: any = {
    addLink: (
      <AddLinktoFolderModalContainer
        onShow={handleShowModal}
        folders={personalFolder}
        link={link}
      />
    ),
    addFolder: (
      <FolderAddModal onShow={handleShowModal} currentFolder={folderName} />
    ),
    deleteLink: <LinkDeleteModal onShow={handleShowModal} link={link} />,
    shareFolder: (
      <FolderShareModalContainer
        onShow={handleShowModal}
        currentFolder={folderName}
        folderId={currentFolderId}
        userId={userId}
      />
    ),
    deleteFolder: (
      <FolderDeleteModal onShow={handleShowModal} currentFolder={folderName} />
    ),
    changeFolderName: (
      <FolderNameChangeModal
        onShow={handleShowModal}
        currentFolder={folderName}
      />
    ),
  };

  return (
    <>
      <Helmet>
        <title>Linkbrary_Folder</title>
      </Helmet>
      {modalOpen && MODALS[`${activeModalName}`]}
      <NavAndFooterBasic>
        <FloatButton>폴더 추가</FloatButton>
        <LinkBar
          onShow={handleShowModal}
          onChange={setLink}
          $view={inView}
          $viewFooter={inViewFooter}
        />
        <div ref={ref}></div>
        {isShowComponent ? (
          <Wrapper>
            <LinksNotExist>저장된 링크가 없습니다.</LinksNotExist>
          </Wrapper>
        ) : (
          <Wrapper>
            <Search
              value={searchValue}
              onChange={handleChangeSearchValue}
              onFilter={handleFilterCardList}
              onDelete={handleClearSearchValue}
            />
            <FolderMenu
              folderName={folderName}
              folders={personalFolder}
              current={currentFolderId}
              onClick={handleClickMenuButton}
              modal={handleShowModal}
              onChange={handleFilterCardList}
            />
            {folderLinks.length ? (
              <CardListFolder
                folderLinks={filteredLinks}
                modal={handleShowModal}
                setLink={setLink}
              />
            ) : (
              <LinksNotExist>저장된 링크가 없습니다.</LinksNotExist>
            )}
          </Wrapper>
        )}
        {!inView && !inViewFooter && <LinkBarFixed/> }
        <div ref={footerRef}></div>
      </NavAndFooterBasic>
    </>
  );
}

export default Folder;

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
