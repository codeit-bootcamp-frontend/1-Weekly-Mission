import NavAndFooterBasic from "../components/js/NavAndFooterBasic";
import { useState, useEffect } from "react";
import { getFolderInformations } from "../api/apiUrl";
import useAsync from "../hooks/useAsync";
import LinkBar from "../components/js/LinkBar";
import Search from "../components/js/Search";
import FolderMenu from "../components/js/FolderMenu";

function Folder() {
  const [loadingError, getFolderInformsAsync] = useAsync(getFolderInformations);
  const [personalFolder, setPersonalFolder] = useState({});
  const [currentFolder, setCurrentFolder] = useState("");

  const handleLoad = async () => {
    const folders = await getFolderInformsAsync();
    if (!folders) return;
    console.log(folders);

    setPersonalFolder({ ...folders });
  };

  useEffect(() => {
    handleLoad();
  }, []);

  console.log(window.location.pathname);

  return (
    <NavAndFooterBasic>
      <LinkBar />
      <Search />
      <FolderMenu folders={personalFolder.data} />
    </NavAndFooterBasic>
  );
}

export default Folder;
