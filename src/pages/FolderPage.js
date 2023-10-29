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
  const [searchParams, setSearchParams] = useSearchParams();
  const initFolderParam = searchParams.get("folderId");

  const handleFolderLoad = async () => {
    const folders = await getFolderAsync({ id: 1 });
    setFolders(folders);
  };
  const handleLinkLoad = async () => {
    const links = await getLinkAsync({
      id: 1,
      folderId: initFolderParam || "",
    });
    setLinks(links);
  };
  useEffect(() => {
    handleLinkLoad();
  }, [initFolderParam]);

  useEffect(() => {
    handleFolderLoad();
  }, []);
  return (
    <div className={style.root}>
      <AddLink />
      <div className={style.section}>
        <Search />
        <FolderList folders={folders} />
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
