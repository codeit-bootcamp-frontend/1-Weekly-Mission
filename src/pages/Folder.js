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
import CardList from "../components/js/CardList";

function Folder() {
  const [FoldersLoadingError, getFoldersAsync] = useAsync(
    getFolderInformations
  );
  const [loadingError, getEachFolderAsync] = useAsync(getEachFolder);
  const [LinksloadingError, getUserLinksAsync] = useAsync(getUserLinks);
  const [personalFolder, setPersonalFolder] = useState({});
  const [currentFolder, setCurrentFolder] = useState("");

  const handleLoad = async (options) => {
    const folders = await getFoldersAsync();
    if (!folders) return;
    console.log(folders);

    setPersonalFolder({ ...folders });
  };

  const handleClickMenuButton = (value) => {
    const nextValue = value;
    setCurrentFolder(nextValue);
    console.log(currentFolder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  console.log(currentFolder);

  return (
    <NavAndFooterBasic>
      <LinkBar />
      <Search />
      <FolderMenu
        folders={personalFolder.data}
        current={currentFolder}
        onClick={handleClickMenuButton}
      />
      <CardList />
    </NavAndFooterBasic>
  );
}

export default Folder;
// console.log(window.location.pathname);
