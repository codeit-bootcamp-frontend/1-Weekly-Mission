import NavAndFooterBasic from "../components/js/NavAndFooterBasic";
import { useState, useEffect } from "react";
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

function Folder() {
  const [FoldersLoadingError, getFoldersAsync] = useAsync(
    getFolderInformations
  );
  const [loadingError, getEachFolderAsync] = useAsync(getEachFolder);
  const [LinksloadingError, getUserLinksAsync] = useAsync(getUserLinks);
  const [personalFolder, setPersonalFolder] = useState({});
  const [currentFolderId, setCurrentFolderId] = useState("");
  const [folderLinks, setFolderLinks] = useState({});
  const [folderName, setFolderName] = useState("");

  //폴더 목록, 전체 링크 데이터 fetch
  const loadInitial = async () => {
    const folders = await getFoldersAsync();
    setPersonalFolder({ ...folders });
    const result = await getUserLinks();
    setFolderLinks(result?.data);
  };

  //카드 리스트 업데이트 하는 함수
  const loadCardList = async () => {
    const result = await getUserLinks(currentFolderId);
    setFolderLinks(result?.data);
    console.log(currentFolderId);
    const folder = await getEachFolderAsync(currentFolderId);
    console.log(folder);
    setFolderName(folder);
    console.log(folderName);
  };

  const handleClickMenuButton = (value) => {
    const nextValue = value;
    setCurrentFolderId(nextValue);
  };

  useEffect(() => {
    loadInitial();
  }, []);

  useEffect(() => {
    loadCardList();
  }, [currentFolderId]);

  return (
    <NavAndFooterBasic>
      <FloatButton>폴더 추가</FloatButton>
      <LinkBar />
      <Search />
      <FolderMenu
        folderName={folderName}
        folders={personalFolder.data}
        current={currentFolderId}
        onClick={handleClickMenuButton}
      />
      <CardListFolder folderLinks={folderLinks} />
    </NavAndFooterBasic>
  );
}

export default Folder;
// console.log(window.location.pathname);
