import styled from "styled-components";
import NavAndFooterBasic from "../components/js/NavAndFooterBasic";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  getEachFolder,
  getFolderInformations,
  getUserLinks,
} from "../api/apiUrl";
import useAsync from "../hooks/useAsync";
import LinkBar from "../components/js/LinkBar";
import Search from "../components/js/Search";
import FolderMenu from "../components/js/FolderMenu";
import CardListFolder from "../components/js/CardListFolder";
import FloatButton from "../components/js/FloatButton";
import LinksNotExist from "../components/js/LinksNotExist";

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

function Folder() {
  const [FoldersLoadingError, getFoldersAsync] = useAsync(
    getFolderInformations
  );
  const [LinksloadingError, getUserLinksAsync] = useAsync(getUserLinks);
  const [personalFolder, setPersonalFolder] = useState([]);
  const [currentFolderId, setCurrentFolderId] = useState("");
  const [folderLinks, setFolderLinks] = useState([]);
  const [folderName, setFolderName] = useState("");

  //폴더 목록, 전체 링크 데이터 fetch
  const loadInitial = async () => {
    const folders = await getFoldersAsync();
    setPersonalFolder(folders?.data);
    const result = await getUserLinks();
    setFolderLinks(result?.data);
  };

  //카드 리스트 업데이트 하는 함수
  const loadCardList = async () => {
    const result = await getUserLinks(currentFolderId);
    setFolderLinks(result?.data);
  };

  const handleClickMenuButton = (value, name) => {
    const nextValue = value;
    setCurrentFolderId(nextValue);
    const nextName = name;
    setFolderName(nextName);
  };
  //처음 로드될 때
  useEffect(() => {
    loadInitial();
  }, []);

  //currenetFolderId가 바뀔 때마다 새로 카드리스트 업데이트
  useEffect(() => {
    loadCardList();
  }, [currentFolderId]);

  return (
    <>
      <Helmet>
        <title>Linkbrary_Folder</title>
      </Helmet>
      <NavAndFooterBasic>
        <FloatButton>폴더 추가</FloatButton>
        <LinkBar />
        {personalFolder.length !== 0 ? (
          <Wrapper>
            <Search />
            <FolderMenu
              folderName={folderName}
              folders={personalFolder}
              current={currentFolderId}
              onClick={handleClickMenuButton}
            />
            {folderLinks.length ? (
              <CardListFolder folderLinks={folderLinks} />
            ) : (
              <LinksNotExist>저장된 링크가 없습니다.</LinksNotExist>
            )}
          </Wrapper>
        ) : (
          <Wrapper>
            <LinksNotExist>저장된 링크가 없습니다.</LinksNotExist>
          </Wrapper>
        )}
      </NavAndFooterBasic>
    </>
  );
}

export default Folder;
// console.log(window.location.pathname);
