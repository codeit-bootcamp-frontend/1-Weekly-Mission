import { useEffect, useState } from "react";
import AddLink from "../component/AddLink";
import Cards from "../component/Cards";
import FolderList from "../component/FolderList";
import Search from "../component/Search";
import useAsync from "../hooks/useAsync";
import { getLink } from "../api/getLink";
import { getFolder } from "../api/getFolder";
import style from "./FolderPage.module.css";
import { useSearchParams } from "react-router-dom";
import FolderItem from "../component/FolderItem";

function FolderPage() {
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);
  const [, , getLinkAsync] = useAsync(getLink);
  const [, , getFolderAsync] = useAsync(getFolder);
  const [folderParams, setFolderParams] = useSearchParams();
  const initFolderParam = folderParams.get("folderId");
  const [folderId, setFolderId] = useState(initFolderParam || "");

  const handleFolderClick = async (folderId) => {
    setFolderParams({ folderId });
    const links = await getLinkAsync({ id: 1, folderId });
    setLinks(links);
  };

  const handleLoad = async () => {
    const links = await getLinkAsync({
      id: 1,
      initFolderParam: initFolderParam || "",
    });
    setLinks(links);
    const folders = await getFolderAsync({ id: 1 });
    setFolders(folders);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div className={style.root}>
      <AddLink />
      <div className={style.section}>
        <Search />
        <FolderList folders={folders} onFolderClick={handleFolderClick} />
        {links.length ? (
          <Cards cards={links} />
        ) : (
          <span className={style.emptyLink}>저장된 링크가 없습니다.</span>
        )}
      </div>
    </div>
  );
}

export default FolderPage;
