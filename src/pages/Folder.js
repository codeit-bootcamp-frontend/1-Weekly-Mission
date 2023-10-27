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
  const [currentFolderId, setCurrentFolderId] = useState("");
  const [folderLinks, setFolderLinks] = useState({});

  const handleLoad = async () => {
    const folders = await getFoldersAsync();
    if (!folders) return;
    console.log(folders);

    setPersonalFolder({ ...folders });

    const links = await getUserLinks(currentFolderId);
    if (!links) return;
    console.log(links);

    setFolderLinks(links.data);
  };

  const handleClickMenuButton = (value) => {
    const nextValue = value;
    setCurrentFolderId(nextValue);
    console.log(currentFolderId);
  };

  useEffect(() => {
    handleLoad();
  }, [currentFolderId]);

  console.log(currentFolderId);
  console.log(folderLinks);

  return (
    <NavAndFooterBasic>
      <LinkBar />
      <Search />
      <FolderMenu
        folders={personalFolder.data}
        current={currentFolderId}
        onClick={handleClickMenuButton}
      />
      <CardList folderLinks={folderLinks} />
    </NavAndFooterBasic>
  );
}

export default Folder;
// console.log(window.location.pathname);
